import "./Login.css";

import { loginUrl } from "../../config/spotify";

function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />

      {/* Login with Spotify button */}
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
