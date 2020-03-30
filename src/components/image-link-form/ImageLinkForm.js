import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

export default function ImageLinkForm({onInputChange, onButtonSubmit}) {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      alignContent="stretch"
    >
      <p>{"The magic brain will detect faces in your pictures"}</p>
      <Grid container direction="row" justify="center" alignItems="center" item>
        <TextField
          id="standard-basic"
          variant="outlined"
          label="Image URL"
          placeholder="enter the url of the image for detection"
          required
          onChange={onInputChange}
        />
          <Button color="default" onClick={onButtonSubmit}>
            <ImageSearchIcon />
          </Button>
      </Grid>
    </Grid>
  );
}
