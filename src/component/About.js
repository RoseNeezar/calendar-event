import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import logo from "../guideGif/calendar.gif";
import "./About.css";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500
  }
}));
function About() {
  const classes = useStyles();

  return (
    <Paper
      style={{
        padding: 0,
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
        <Card className={classes.card}>
          <CardActionArea style={{ paddingBottom: 50 }}>
            <img
              src={logo}
              alt="loading..."
              className="rounded mx-auto d-block "
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                About .
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Calendar planner
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Paper>
  );
}
export default About;
