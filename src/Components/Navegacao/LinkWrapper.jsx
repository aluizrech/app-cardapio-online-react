import React, {Component} from "react";
import {NavLink} from "react-router-dom";


export default class LinkWrapper extends Component {

    render() {
        return (
            <NavLink activeStyle={{fontWeight: "bold"}} {...this.props}/>
        );
    }

}