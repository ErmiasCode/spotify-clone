import "./Sidebar.css";

import { useDataLayerValue } from "../../config/DataLayer";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import SidebarOption from "../SidebarOption";

function Sidebar() {
  const [{ playlists }] = useDataLayerValue();

  //console.log("Show me the playlists", playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOption Icon={HomeIcon} title="Start" />
      <SidebarOption Icon={SearchIcon} title="Suchen" />
      <SidebarOption Icon={LibraryMusicIcon} title="Bibliothek" />
      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
