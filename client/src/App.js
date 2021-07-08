import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JoinRoomPage from "./JoinRoom/joinroom";
import RoomPage from "./RoomPage/roompage";
import IntroductionPage from "./Introduction/introduction";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IntroductionPage></IntroductionPage>
        </Route>
        <Route exact path="/join-room">
          <JoinRoomPage></JoinRoomPage>
        </Route>
        <Route exact path="/room">
          <RoomPage></RoomPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
