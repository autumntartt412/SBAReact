import { Link } from "react-router-dom"


export const Footer = function( ) {
    return  (
       <>
       <Link to="/">Home</Link>
       <br/>
       <Link to="/weather">Weather</Link>
       </>
    )
}