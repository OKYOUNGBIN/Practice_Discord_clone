import { Button } from "@mui/material";
import React from "react";
import "./Login.css";

function Login() {
  const singIn = () => {};
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.vox-cdn.com/thumbor/lYEBkUDPcaH-ATfsJOoiQmQG7no=/0x0:2400x1600/1200x800/filters:focal(1008x608:1392x992)/cdn.vox-cdn.com/uploads/chorus_image/image/70595234/discord_logo_wordmark_2400.0.jpg"
          alt=""
        />
      </div>

      <Button onClick={singIn}>Sign In</Button>
    </div>
  );
}

export default Login;
