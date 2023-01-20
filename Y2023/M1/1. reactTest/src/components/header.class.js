import React from "react";
import propTypes from "prop-types";

function Header(props){
    return <header><span>{props.logo + " "+props.hoal}</span><nav><ul><li>Home</li><li>Users</li></ul></nav></header>
}
/*
class Header extends React.Component{
    render(){
        return <header><span>{this.props.logo}</span><nav><ul><li>Home</li><li>Users</li></ul></nav></header>
        
    }
}
*/

Header.defaultProps={
    hoal:"hOLA"
}

Header.propTypes={
    hoal:propTypes.string
}

export default Header;