import React from "react";
import "./FaceRecognition.css";

export default function({ box, imageUrl }) {
  return (
    <div className="parent">
      <img
        id="inputImage"
        alt="find faces on"
        src={imageUrl}
        className="image"
      />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          left: box.leftCol,
          bottom: box.bottomRow
        }}
      ></div>
    </div>
  );
}
