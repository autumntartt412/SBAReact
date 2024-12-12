import { Link } from "react-router-dom"


export const Navbar = function( ) {
    return  (
       <>
       <Link to="/">Home</Link>
       <br/>
       <Link to="/weather">Weather</Link>
       <br/>
       </>
    )
}