import React, { useState, useEffect, useRef } from "react";
import { PLAYLIST, songs } from "../../assets/assets"; // Your playlist list
import s1 from "../../assets/s1.mp3"
const Trending = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bearerToken, setBearerToken] = useState("");
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track the current song
  const audioRef = useRef(null);

  const CLIENT_ID = "88954914d97542a18205e7c333faeb89";
  const CLIENT_SECRET = "bfc76e6bf8444ac38305a2441ec22cbe";

  // 1. Get Bearer Token
  const getBearerToken = async () => {
    const tokenUrl = "https://accounts.spotify.com/api/token";
    const encodedCredentials = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ grant_type: "client_credentials" }),
      });

      const data = await response.json();
      if (data.access_token) {
        setBearerToken(data.access_token);
      } else {
        setError("Failed to fetch access token.");
      }
    } catch (error) {
      console.error("Error fetching token:", error);
      setError("Failed to fetch Bearer Token.");
    }
  };

  // 2. Fetch Playlist Tracks
  const fetchPlaylist = async (playlistId) => {
    if (!bearerToken) return;

    const apiUrl = `https://api.spotify.com/v1/playlists/${playlistId}?market=IN`;

    try {
      const response = await fetch(apiUrl, {
        headers: { Authorization: `Bearer ${bearerToken}` },
      });
      const data = await response.json();

      if (data?.tracks?.items) {
        return data.tracks.items.map((item) => ({
          name: item.track.name,
          artist: item.track.artists.map((a) => a.name).join(", "),
          album: item.track.album.name,
          albumImage: item.track.album.images[0]?.url,
          trackUri: item.track.uri,
        }));
      }
    } catch (error) {
      console.error("Error fetching tracks:", error);
      setError("Failed to fetch tracks.");
    }
  };

  // 3. useEffects
  useEffect(() => {
    getBearerToken();
  }, []);

  useEffect(() => {
    if (bearerToken) {
      const fetchAllPlaylists = async () => {
        try {
          const allPlaylists = await Promise.all(
            PLAYLIST.map(async (playlist) => {
              const tracks = await fetchPlaylist(playlist.playlistId);
              return { ...playlist, tracks };
            })
          );
          setPlaylists(allPlaylists);
        } catch (error) {
          console.error("Error fetching playlists:", error);
          setError("Failed to fetch playlists.");
        } finally {
          setLoading(false);
        }
      };
      fetchAllPlaylists();
    }
  }, [bearerToken]);

  // 4. Handlers
  const handleTrackClick = (trackUri) => {
    const trackId = trackUri.split(":")[2];
    if (trackId) {
      window.open(`https://open.spotify.com/track/${trackId}`, "_blank");
    } else {
      console.error("Invalid track URI:", trackUri);
    }
  };

  const handlePlayClick = (track) => {
    if (track.trackUri) {
      setSelectedTrack(track);
      setIsModalOpen(true);
      setCurrentSongIndex(0); // Reset to the first song
    } else {
      alert("No preview available for this track.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrack(null);
  };

  // Audio event listener to move to the next song
  const handleAudioEnd = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1); // Move to next song
    } else {
      setCurrentSongIndex(0); // Loop back to first song
    }
  };

  // 5. UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center font-semibold py-4">{error}</div>;
  }

  return (
    <div className="border-neutral-700">
      {playlists.map((playlist, index) => (
        <div key={index} className="mx-3">
          <div className="flex justify-between items-center">
            <h2 className="text-white text-2xl font-bold hover:underline">{playlist.name}</h2>
            <h6 className="text-neutral-600 mb-6 font-bold cursor-pointer hover:underline">Show all</h6>
          </div>

          <div className="relative group/scroll">
            <div
              className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
            >
              {playlist.tracks?.length > 0 ? (
                playlist.tracks.map((track, idx) => (
                  <div
                    key={idx}
                    className="group relative w-48 flex-shrink-0 rounded-lg cursor-pointer px-2 py-2 hover:bg-neutral-800 mx-2 pb-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTrackClick(track.trackUri);  // Open the track URI directly
                    }}
                  >
                    <img src={track.albumImage} alt={track.album} className="h-46 rounded-md mb-2" />
                    <div
                      className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayClick(track); // Just open the modal
                        }}
                        className="bg-green-600 h-10 w-10 flex justify-center items-center text-white p-2 rounded-full shadow-lg hover:bg-green-400"
                      >
                        <i className="fa-solid fa-play"></i>
                      </button>
                    </div>

                    <div className="flex flex-col px-2">
                      <div className="text-white text-md font-semibold truncate">{track.name}</div>
                      <div className="text-gray-400 text-sm truncate">{track.artist}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-white">No tracks available.</div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Preview Modal */}


    </div>

  );
};

export default Trending;
