import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Tooltip from "@material-ui/core/Tooltip";

export default function ImageLinkForm() {
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
        />
        <Tooltip title="detect image" placement="bottom-end" leaveDelay={200}>
          <Button color="default">
            <ImageSearchIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
