import "./Home.css"
import { BrowserRouter as  Router, Switch, Route, Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="Home">
            
                <div className="joinContent"><h4>Join </h4>and experience to <h4>Connect </h4>like nowhere else!</div>
               <Link className="link" to="/register"><a href="" className="joinButton">Join Now</a></Link> 
                <p className="Member">Already a Member? <a href=""><Link className="link" to="/login"><span>Login Here!</span></Link></a></p>
        </div>
    );
}
