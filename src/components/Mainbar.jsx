import Trending from "./Mainbarplaylists/Trending"
import SecurityPolicy from "./Mainbarplaylists/SecurityPolicy";

const Mainbar = () => {
    return (
      <div className="bg-neutral-900 px-4 py-4 rounded-lg h-[580px] overflow-y-auto w-[70%] scrollbar-hide">
  <Trending />
  <SecurityPolicy />
  </div>
    );
};

export default Mainbar;
