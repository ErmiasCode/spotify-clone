import { useState } from "react";
import "./Footer.css";

import { Grid, Slider } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  const [shuffleColor, setShuffleColor] = useState("white");
  const [repeatColor, setRepeatColor] = useState("white");

  function handleShuffleClick() {
    if (shuffleColor === "#1ed15e") {
      setShuffleColor("white");
    } else setShuffleColor("#1ed15e");
  }

  function handleRepeatClick() {
    if (repeatColor === "#1ed15e") {
      setRepeatColor("white");
    } else setRepeatColor("#1ed15e");
  }

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumCover"
          src="https://external-preview.redd.it/Yp9c2rHpw5c5LAqg2IWHVGyU3oLKKRe2y_0YouR2WvE.jpg?auto=webp&s=da87b4f60a999a0329009a2b97b8bf754b284a4b"
          alt="Album Cover"
        />
        <div className="footer__songInfo">
          <h4>U remind me</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon
          style={{ color: shuffleColor }}
          onClick={handleShuffleClick}
        />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon
          style={{ color: repeatColor }}
          onClick={handleRepeatClick}
        />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
