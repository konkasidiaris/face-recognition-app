import React, { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/image-link-form/ImageLinkForm";
import FaceRecognition from "./components/face-recognition/FaceRecognition";
import Rank from "./components/rank/Rank";
import { Grid } from "@material-ui/core";
import "./App.css";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "e0e95cb131c64dc5abbb3290d7454c05"
});

export default function App() {
  const [input, setInput] = useState("");
  const [box, setBox] = useState({});

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  const onSubmit = () => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(response => setBox(calculateFaceLocation(response)))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        item
      >
        <Logo />
        <Navigation />
      </Grid>
      <Grid
        style={{ height: "80vh", minHeight: "80vh" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="stretch"
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
        >
          <Rank />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
        >
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onSubmit}
          />
          <FaceRecognition box={box} imageUrl={input} />
        </Grid>
      </Grid>
    </div>
  );
}
