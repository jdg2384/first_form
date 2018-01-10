import React from "react";
import Message from "./message/Message.js"
import Footer from "./footer/Footer.js"
import '../App.css';

export default class App extends React.Component {
    render() {
        return (
            <div >
              < Message data = {this.props.data} hello = "Hello world" date = {Date().toString()}/>
              < Footer />
            </div>
        );
    }
}








