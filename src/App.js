import { useEffect } from "react";
import "./App.css";

import { useDataLayerValue } from "./config/DataLayer";

import { getTokenFromUrl } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./components/Login";
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, user }, dispatch] = useDataLayerValue();

  console.log("Token: ", user);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcHIse72xGMyU").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [dispatch]);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
