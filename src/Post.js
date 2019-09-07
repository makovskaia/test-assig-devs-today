import React from "react";
import { Paper, Typography } from "@material-ui/core";

const Post = ({ post }) => {
  const display = prop =>
    post[prop] ? post[prop].value || post[prop] : "no " + prop;
  return post ? (
    <Paper>
      <Typography variant="h4">{display("title")}</Typography>
      <Typography variant="h5">{display("author")}</Typography>
      <Typography variant="h6">{display("date")}</Typography>
      <Typography variant="body1">{display("content")}</Typography>
    </Paper>
  ) : (
    <Paper>
      <Typography variant="h4">no post selected</Typography>
    </Paper>
  );
};

export default Post;
