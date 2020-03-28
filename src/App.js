import React from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/image-link-form/ImageLinkForm";
import Rank from "./components/rank/Rank";
import { Grid } from "@material-ui/core";
import "./App.css";

export default function App() {
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
          <ImageLinkForm />
          {/*<FaceRecognition /> */}
        </Grid>
      </Grid>
    </div>
  );
}
