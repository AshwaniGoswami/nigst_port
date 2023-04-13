import React, { Component } from 'react';
import './gallery.css'
import'./Images/backgroundImage.jpg'
import { IconName } from "react-icons/bs";

class Carousel extends Component {
  render() {
    return (
      <div className="content-container">
        <div id="carousel">
          <i className="fa fa-angle-left leftImage" aria-hidden="true"></i>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
          <div id="imagessss">
            <img src={require("./Images/backgroundImage.jpg")} alt=" 1" />
            <img src={require("./Images/backgroundImage.jpg")} alt="Image 2" />
            <img src={require("./Images/backgroundImage.jpg")} alt="Image 3" />
            <img src={require("./Images/backgroundImage.jpg")} alt="Image 4" />
          </div>
          <div className="btn-container">
            <button className="speed-control-stop"><i className="fa fa-stop-circle"></i></button>
            <button className="speed-control-start"><i className="fa fa-play-circle"></i></button>
            <button className="speed-control-slow">0.5X</button>
            <button className="speed-control-medium">1X</button>
            <button className="speed-control-fast">2X</button>
          </div>
        </div>
        <div className="grid-wrapper">
          <div className="album">
            <img src="https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGVwZW5kZW5jZSUyMGRheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" data-attribute = "independence" />
            <div className="album-detail">
              <h2>Independence Day</h2> 
              <h1>03/03/2023</h1>
            </div>
          </div>
          <div className="album">
            <img src="https://plus.unsplash.com/premium_photo-1674992166124-94ebd434fb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRpd2FsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" data-attribute = "diwali" />
            <div className="album-detail">
              <h2>Diwali</h2> 
              <h1>03/03/2023</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
