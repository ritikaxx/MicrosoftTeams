import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Be a part of Our <span>Community</span> </span>
        <iframe
          className="headerImg"
          src="https://www.youtube.com/embed/jugBQqE_2sM"
          alt=""> </iframe>
      </div>
      <div className="getStarted">
        <span className="Startedlb">Welcome to <span>Teams!</span></span>
        <span className="Startedsm">Here are some things to get going...</span>
        <div className="container">
          <div className="left">
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
          <div className="right">
            <div id="container">
              <div class="product-details">
                <h1>Start a Group Chat!</h1>
                <br />
                <p class="information"><br /> Be it chatting with your friends or group chats with your colleagues, we have covered you the best!</p>
                <div class="control">
                  <button class="btn1">

                    <span class="buy">Group Chat</span>
                  </button>
                </div>
              </div>
              <div class="product-image">
                <img src="https://bcel.deakin.edu.au/wp-content/uploads/2020/05/01104-19-integration-microsoft-teams-project-planning-683x500-1.png" />
                <div class="info">
                  <h2>Features we provide</h2>
                  <ul>
                    <li><strong>Multiple People: </strong>Discuss Together</li>
                    <li><strong>Emojis and GIFS: </strong>Latest</li>
                    <li><strong>Voice Messages:</strong>Fast</li>
                    <li><strong>Seen Info:</strong>Keep Track</li>
                    <li><strong>Stay Connected:</strong>Make Plans</li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
