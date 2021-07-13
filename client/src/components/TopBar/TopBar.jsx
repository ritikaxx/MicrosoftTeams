import "./TopBar.css"
import { useContext } from "react";

import { Context } from "react";
export default function TopBar() {

  return (
    <div className="TopBar">
      <div className="topLeft">
        <i class="fas fa-users fa-2x"></i>
        <div class='search-box'>
          <input class="search-text" type="text" placeholder="Search Anything"></input>
          <a href="#" class="search-btn">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
      <div className="topCenter">

      </div>
      <div className="topRight">

        <i class="fas fa-ellipsis-h "></i> &nbsp;&nbsp;&nbsp;
        <img className="topImg" src="https://previews.123rf.com/images/pandavector/pandavector1607/pandavector160700160/60027009-girl-icon-flat-single-avatar-people-icon-from-the-big-avatar-collection-stock-vector.jpg" alt="" />





      </div>
    </div>
  );
}
