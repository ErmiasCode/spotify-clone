import "./Body.css";

import { useDataLayerValue } from "../../config/DataLayer";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Header from "../Header";
import SongRow from "../SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();

  return (
    <div className="body">
      {/** Header */}
      <Header spotify={spotify} />
      {/** Banner */}
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      {/** Add Songs */}
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon className="body__heartLike" fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
