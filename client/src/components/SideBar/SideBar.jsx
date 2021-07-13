import "./SideBar.css"
import { BrowserRouter as  Router, Switch, Route, Link } from 'react-router-dom';
export default function SideBar() {
    return (
        <div className="SideBar">
    <div class="sidenav">
  <a href="#"><i class="far fa-bell"></i></a>
  
  <Link className="link" to="/chat"><i class="far fa-comments"></i></Link>
  <Link className="link" to="/call"><i class="fas fa-phone-square"></i></Link>
  <a href="#"><i class="fas fa-users"></i></a>
  <Link className="link" to="/scheduler"><i class="far fa-calendar-alt"></i></Link>
  <Link className="link" to="/whiteboard"><i class="fas fa-file-alt"></i></Link>
</div>
        </div>
    );
}
