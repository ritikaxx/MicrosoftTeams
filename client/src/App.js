import Home from "./pages/homepage/Home"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
import Landing from "./pages/landingpage/landingpage"
import Chat from "./pages/chat/Chat"
import Container from './components/container/Container';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import React from "react";
import "./App.css";
import JoinRoomPage from "./JoinRoom/joinroom";
import RoomPage from "./RoomPage/roompage";
import IntroductionPage from "./Introduction/introduction";
import Scheduling from "./pages/Scheduler/Scheduler";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
       
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        
        <Route  path="/landing">
          <Landing />
        </Route>
        <Route  path="/chat">
          <Chat />
          </Route>
          <Route  path="/call">
          <IntroductionPage></IntroductionPage>
        </Route>
        <Route  path="/join-room">
          <JoinRoomPage></JoinRoomPage>
        </Route>
        <Route  path="/room">
          <RoomPage></RoomPage>
        
        </Route>
        <Route  path="/whiteboard">
        <Container/>
          </Route>
          <Route  path="/scheduler">
        <Scheduling/>
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
