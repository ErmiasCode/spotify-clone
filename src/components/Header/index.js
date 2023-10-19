import "./Header.css";

import { useDataLayerValue } from "../../config/DataLayer";

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExitToApp from "@material-ui/icons/ExitToApp";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  const handleLogout = () => {
    dispatch({
      type: "SET_TOKEN",
      token: null,
    });
    dispatch({
      type: "SET_USER",
      user: null,
    });
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: [],
    });
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: null,
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Artists, Songs, Podcasts" type="text" />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
        <ExitToApp className="header__right__logout" onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Header;
