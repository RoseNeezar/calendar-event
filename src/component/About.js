import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import calendarGif from "../guideGif/Calendar-planner.gif";
import "./About.css";

function About() {
  return (
    <Paper
      style={{
        padding: 100,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <Grid
        container
        justify="center"
        style={{
          marginTop: "1rem"
        }}
      >
        <Card style={{ maxHeight: "auto" }}>
          <CardActionArea style={{ paddingBottom: 50 }}>
            <img
              src={calendarGif}
              alt="loading..."
              className="rounded mx-auto d-block "
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                About .
              </Typography>
              <Typography variant="h5" color="textSecondary" component="h5">
                Calendar planner has 2 hard coded user name Bob and Robert. Both
                can set events on a calendar to each other as shown in the gif
                above.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Paper>
  );
}
export default About;
