import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handlePrevClick = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  handleNextClick = () => {
    this.setState((prevState) => ({
      currentIndex: 
        (prevState.currentIndex - 1 + images.length) % images.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const currentImage = images[currentIndex];

    return (
      <div className="carousel-container">
        <button onClick={this.handlePrevClick}>
          <ArrowBackIosIcon />
        </button>
        <div className="carousel-image">
          <img src={currentImage.img} alt="Carousel Item" />
          <div className="carousel-text">
            <div className="subtitle">{currentImage.subtitle}</div>
            <div className="title">{currentImage.title}</div>
          </div>
        </div>
        <button onClick={this.handleNextClick}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    );
  }
}

export default Carousel;
