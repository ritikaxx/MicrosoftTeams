import React from "react";
import "./introduction.css";
import ConnectionButtons from "./connectionButtons";
import { connect } from "react-redux";
import { setIsRoomHost } from "../Store/Actions";
import { useEffect } from "react";

const IntroductionPage = (props) => {
  const { setIsRoomHostAction } = props;
  useEffect(() => {
    setIsRoomHostAction(false);
  }, []);
  return (
    <div className="group">
      <div className="overlap-group">
        <div className="rectangle-1"></div>
        <div className="rectangle-2"></div>
        <div className="rectangle-5"></div>
        <div className="rectangle-3"></div>
        <div className="text-1 ">You can host a meeting</div>
        <div className="text-2 ">You can Join a meeting</div>
        <div className="rectangle-4"></div>
        <div className="text-3">
          Stay connected
          <br />
          Stay united
        </div>
        <h1 className="title">Microsoft Teams</h1>
        <div className="text-4">Welcome to Microsoft Teams</div>
        <ConnectionButtons></ConnectionButtons>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapDispatchToProps)(IntroductionPage);
