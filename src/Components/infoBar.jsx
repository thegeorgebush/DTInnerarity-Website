import { React, useEffect } from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

const infoBar = ({
  Paused,
  setMoney,
  setSeconds,
  setOpen,
  setIntervalId,
  setBtnDisabled,
  setPaused,
  seconds,
  intervalId,
  open,
  btnDisabled,
  money,
  Address,
  Zestamate,
  lastSold,
  LikleyhoodToSell,
  lotCount
}) => {
  const startTimer = () => {
    if (!Paused) {
      const newIntervalId = setInterval(() => {
        //setSeconds(seconds => seconds + 1)
        setMoney(
          (money) => money + Math.floor(Math.random() * (1000 + lotCount * 200))
        );
      }, 1000);
      setIntervalId(newIntervalId);
      setBtnDisabled(true);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (seconds % 90 === 0 && seconds !== 0) {
      clearInterval(clearInterval(intervalId));
      setPaused((prevCheck) => !prevCheck);
      console.log("Paused: " + Paused);
      setTimeout(() => {
        setBtnDisabled(!Paused);
        console.log("btn disabled: " + btnDisabled);
      }, 1000);
    }
  }, [seconds, intervalId]);

  return (
    <>
      <br />
      {/*<h1>Welcome to the Perdido District!</h1>*/}
      <h2>Envision what life could be like:</h2>
      <Dialog open={open}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>poop pee</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            {" "}
            poopy
          </Button>
        </DialogActions>
      </Dialog>
      <Grid
        container
        alignContent="space-around"
        spacing={2}
        justifyContent="space-around"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Button
                variant="text"
                type="button"
                onClick={startTimer}
                disabled={btnDisabled}
              >
                Go to work
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" type="button">
                Buy Lot
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper>
            <Typography>Money: ${money}</Typography>
            <Typography>{!Paused ? "daytime" : "night"}</Typography>
            <Typography>Day {Math.floor(seconds / 180)}</Typography>
          </Paper>
        </Grid>
        <Grid item direction="row">
          <Paper style={{ minWidth: "260px", minHeigh: "250px" }}>
            <Typography variant="h6">Real Life Info:</Typography>
            <Typography align={"left"} style={{ padding: "3px" }}>
              Address: {Address}
            </Typography>
            <Typography align={"left"} style={{ padding: "3px" }}>
              Zestamate: ${Zestamate}
            </Typography>
            <Typography align={"left"} style={{ padding: "3px" }}>
              Last Sold: {lastSold}
            </Typography>
            <Typography align={"left"} style={{ padding: "3px" }}>
              Likelyhood To Sell: {LikleyhoodToSell}%
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default infoBar;
