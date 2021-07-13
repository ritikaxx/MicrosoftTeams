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
      
        
        
        <div className="left1">
            <div id="container">
              <div class="product-details">
                <h1>Start an Instant Meeting</h1>
                <br />
                <p class="information"><br /> Connect with your friends and family with just a click instantly!</p>
                <div class="control">
                  <button class="btn1">

                    <span class="buy">Video Call</span>
                  </button>
                </div>
              </div>
              <div class="product-image">
                <img src="https://www.avepoint.com/blog/wp-content/uploads/2020/06/web-design-development-concept-vector-illustration-vector-id1169592004.jpg" />
                <div class="info">
                  <h2>Features we provide</h2>
                  <ul>
                    <li><strong>Screen Share: </strong>Work Together</li>
                    <li><strong>Waiting Room: </strong>Customize</li>
                    <li><strong>Record:</strong>Busy Schedule</li>
                    <li><strong>Chat: </strong>Relax</li>
                    <li><strong>Group Calls: </strong>Plan Together</li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        
        

        <ConnectionButtons></ConnectionButtons>
      </div>
    
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapDispatchToProps)(IntroductionPage);
