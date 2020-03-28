import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "./Logo.css";
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));

export default function Logo() {
    const classes = useStyles();

  return (
    <div className="logo">
        <Avatar alt="logo"
        className={classes.large}
        >
      <svg
        id="Layer_1_1_"
        enableBackground="new 0 0 64 64"
        height="512"
        viewBox="0 0 64 64"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="26" r="2" />
        <path d="m61.707 57.293-5.008-5.008c.188-.391.301-.823.301-1.285 0-1.654-1.346-3-3-3-1.302 0-2.402.839-2.816 2h-5.369c-.302-.847-.969-1.514-1.816-1.816v-2.77l6.707-6.707c.189-.187.294-.441.294-.707v-4.184c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3-1.302 0-2.402.839-2.816 2h-4.184c-.552 0-1 .447-1 1v3.184c-1.161.414-2 1.514-2 2.816s.839 2.402 2 2.816v4.184h-1.184c-.302-.847-.969-1.514-1.816-1.816v-13.368c.474-.169.889-.449 1.22-.816h3.78c.265 0 .52-.105.707-.293l1-1c.188-.187.293-.441.293-.707v-1h5.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.302 0-2.402.839-2.816 2h-2.184v-6.184c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3-.462 0-.894.113-1.285.301l-7.008-7.008c-.187-.188-.442-.293-.707-.293h-21c-.821 0-1.571-.521-1.865-1.296-.165-.433-.604-.693-1.067-.636-1.833.246-3.529 1.235-4.65 2.714-1.133 1.492-1.612 3.349-1.348 5.229.37 2.609 2.24 4.75 4.742 5.592-.529 1.767-.812 3.575-.812 5.397h-1c-2.757 0-5 2.243-5 5s2.243 5 5 5h1.107c.67 6.372 4.501 11.814 9.893 14.727v4.273h-14c-3.86 0-7 3.141-7 7v5h2v-5c0-2.757 2.243-5 5-5h14.713l7.287 4.554v5.446h6c.265 0 .52-.105.707-.293l3.293-3.293 1.293 1.293c.187.188.442.293.707.293h3.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3 0-1.302-.839-2.402-2-2.816v-4.184h1.184c.414 1.161 1.514 2 2.816 2 .462 0 .894-.113 1.285-.301l1.301 1.301-1.293 1.293c-.188.187-.293.441-.293.707v5h2v-4.586l1-1 2 2v3.586h2v-4c0-.266-.105-.52-.293-.707zm-21.523-7.293h-7.184v-4h2.184c.414 1.161 1.514 2 2.816 2s2.402-.839 2.816-2h1.184v2.184c-.847.302-1.514.969-1.816 1.816zm-5-37c.302.847.969 1.514 1.816 1.816v4.184h-4v-6zm1.816-1c0-.552.449-1 1-1s1 .448 1 1-.449 1-1 1-1-.448-1-1zm-1.816 15c.302.847.969 1.514 1.816 1.816v4.184h-4v-6zm3.816 18c0 .552-.449 1-1 1s-1-.448-1-1 .449-1 1-1 1 .448 1 1zm-3.816-1h-2.184v-9h4v7.184c-.847.302-1.514.969-1.816 1.816zm8.816 7c0 .552-.449 1-1 1s-1-.448-1-1 .449-1 1-1 1 .448 1 1zm6-21c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1zm-2.816 2c.302.847.969 1.514 1.816 1.816v3.77l-5 5v-2.77c1.161-.414 2-1.514 2-2.816s-.839-2.402-2-2.816v-2.184zm-4.184 4c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1zm-5-9c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1zm5.586-1h-2.586c0-1.654-1.346-3-3-3-1.302 0-2.402.839-2.816 2h-2.184v-4h7.586l3.414 3.414v1.172zm10.414-3c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1zm-5-9c0 .552-.449 1-1 1s-1-.448-1-1 .449-1 1-1 1 .448 1 1zm-3.699-1.285c-.188.391-.301.823-.301 1.285 0 1.302.839 2.402 2 2.816v6.184h-1.586l-3.707-3.707c-.187-.188-.442-.293-.707-.293h-2v-4.184c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3-1.302 0-2.402.839-2.816 2h-2.184v-5h5.586zm-34.251-2.984c-.189-1.347.152-2.676.96-3.74.674-.889 1.598-1.514 2.65-1.804.731 1.11 1.986 1.813 3.34 1.813h13v8h-14.79c-.268 0-.542-.022-.798-.062-.028-.006-.055-.009-.073-.011-.027-.004-.057-.009-.08-.012-2.219-.4-3.911-2.083-4.209-4.184zm.95 19.269c-1.654 0-3-1.346-3-3s1.346-3 3-3h1v6zm3 0v-8c0-1.69.259-3.374.77-5.014.147.009 15.23.014 15.23.014v29.971c-8.91-.52-16-7.933-16-16.971zm16 18.949v6.247l-6-3.751v-3.798c1.873.746 3.891 1.192 6 1.302zm5.586 12.051h-3.586v-4h5.586l1 1zm12.414 0c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1zm-1-3.816c-.847.302-1.514.969-1.816 1.816h-2.77l-3.707-3.707c-.187-.188-.442-.293-.707-.293h-6v-2h7.184c.414 1.161 1.514 2 2.816 2s2.402-.839 2.816-2h2.184zm5-5.184c0-.552.449-1 1-1s1 .448 1 1-.449 1-1 1-1-.448-1-1z" />
      </svg>
      </Avatar>
    </div>
  );
}
