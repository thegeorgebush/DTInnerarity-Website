import "./styles.css";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  ButtonGroup,
  Button,
  Paper,
  Grid,
  Typography,
  Tooltip,
  IconButton
} from "@material-ui/core";

const App = () => {
  const [money, setMoney] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [Paused, setPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  //sets whethere go to work button enabled or not
  const [btnDisabled, setBtnDisabled] = useState(false);
  //an array of properties owned
  const [properties, setProperties] = useState([]);
  //Determines if lots are bought or not
  const [lot1Bought, setLot1Bought] = useState(false);
  const [lot2Bought, setLot2Bought] = useState(false);
  const [lot3Bought, setLot3Bought] = useState(false);
  const [lot4Bought, setLot4Bought] = useState(false);
  const [lot5Bought, setLot5Bought] = useState(false);
  const [lot6Bought, setLot6Bought] = useState(false);
  const [lot7Bought, setLot7Bought] = useState(false);
  const [lot8Bought, setLot8Bought] = useState(false);
  const [lot9Bought, setLot9Bought] = useState(false);
  const [lot10Bought, setLot10Bought] = useState(false);
  const [lot11Bought, setLot11Bought] = useState(false);

  const [Address, setAddress] = useState();
  const [Zestamate, setZestamte] = useState();
  const [lastSold, setLastSold] = useState();
  const [LikleyhoodToSell, setLikelyhoodToSell] = useState();

  const startTimer = () => {
    if (!Paused) {
      const newIntervalId = setInterval(() => {
        //setSeconds(seconds => seconds + 1)
        setMoney((money) => money + Math.floor(Math.random() * 1000));
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
      setTimeout(() => {
        setBtnDisabled(!Paused);
      }, 1000);
    }
  }, [seconds, intervalId]);

  const addLots = (lot) => {
    const newProperties = properties.slice();
    newProperties.push("lot3");
    setProperties(newProperties);
    //console.log("properties: " + properties.map(name => ({properties}))) properties.map(name => ( name === "lot2" ? "green" : ""))
  };

  const toolTips = (propCost, lotSold) => {
    return (
      <React.Fragment>
        <Typography>{!lotSold ? "Price: $" + propCost : "Owned"}</Typography>
      </React.Fragment>
    );
  };

  const lotDetails = (
    lotName,
    lotBought,
    lotAddress,
    lotZestamate,
    lotLastSold,
    lotLikelyhood,
    padding = "5px"
  ) => {
    return (
      <IconButton
        onClick={() => {
          if (money > lotZestamate) {
            addLots(lotName);
            setLotBought(lotName);
            setMoney(money - lotZestamate);
          }
          setAddress(lotAddress);
          setZestamte(lotZestamate);
          setLastSold(lotLastSold);
          setLikelyhoodToSell(lotLikelyhood);
        }}
        style={{ padding: "0px" }}
      >
        <Tooltip
          placement="top"
          arrow
          title={toolTips(lotZestamate, lotBought)}
        >
          <Paper
            style={{
              backgroundColor: lotBought ? "green" : "",
              padding: padding
            }}
          >
            <Typography>{lotName}</Typography>
          </Paper>
        </Tooltip>
      </IconButton>
    );
  };

  const setLotBought = (lotName) => {
    if (lotName === "Lot 1") setLot1Bought(true);
    else if (lotName === "Lot 2") setLot2Bought(true);
    else if (lotName === "Lot 3") setLot3Bought(true);
    else if (lotName === "Lot 4") setLot4Bought(true);
    else if (lotName === "Lot 5") setLot5Bought(true);
    else if (lotName === "Lot 6") setLot6Bought(true);
    else if (lotName === "Lot 7") setLot7Bought(true);
    else if (lotName === "Lot 8") setLot8Bought(true);
    else if (lotName === "Lot 9") setLot9Bought(true);
    else if (lotName === "Lot 10") setLot10Bought(true);
    else if (lotName === "Lot 11") setLot11Bought(true);
  };

  return (
    <div className="App">
      <AppBar style={{ backgroundColor: "grey", boxShadow: "1px 1px" }}>
        <ButtonGroup>
          <Button variant="text" type="button">
            Mobility Options
          </Button>
          <Button variant="text" type="button">
            Things to do
          </Button>
        </ButtonGroup>
      </AppBar>
      <br />
      {/*<h1>Welcome to the Perdido District!</h1>*/}
      <h2>Envision what life could be like:</h2>
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
          <Paper style={{ minHeight: "130px", minWidth: "260px" }}>
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
      <Grid container>
        <Grid contianer direction="column">
          <Grid item>
            {lotDetails(
              "Lot 1",
              lot1Bought,
              "5780 Bob O Link Dr",
              336000,
              "N/A",
              80
            )}
          </Grid>
          <Grid item>
            {lotDetails(
              "Lot 3",
              lot3Bought,
              "14304 Innerarity Point Rd",
              46000,
              "Dec 1995",
              80
            )}
          </Grid>
        </Grid>
        <Grid contianer direction="column">
          <Grid item>
            {lotDetails(
              "Lot 2",
              lot2Bought,
              "5681 Cruzat Way",
              54000,
              "N/A",
              80
            )}
          </Grid>
          <Grid item>
            {lotDetails(
              "Lot 4",
              lot4Bought,
              "5695 Cruzat Way",
              212000,
              "Feb 2018",
              80
            )}
          </Grid>
        </Grid>
        <Grid contianer direction="column">
          <Grid item>
            {lotDetails(
              "Lot 5",
              lot5Bought,
              "123 candy lane",
              429000,
              "Jan 2004",
              80,
              "21px"
            )}
          </Grid>
          <Grid container direction="row">
            <Grid item>
              {lotDetails(
                "Lot 6",
                lot6Bought,
                "123 candy lane",
                26000,
                "Jan 2004",
                80
              )}
            </Grid>
            <Grid item>
              {lotDetails(
                "Lot 7",
                lot7Bought,
                "123 candy lane",
                65000,
                "Jan 2004",
                80
              )}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              {lotDetails(
                "Lot 8",
                lot8Bought,
                "123 candy lane",
                294000,
                "Jan 2004",
                80
              )}
            </Grid>
            <Grid item>
              {lotDetails(
                "Lot 9",
                lot9Bought,
                "123 candy lane",
                30000,
                "Jan 2004",
                80
              )}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              {lotDetails(
                "Lot 10",
                lot10Bought,
                "123 candy lane",
                13000,
                "Jan 2004",
                80
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid contianer direction="column">
          <Grid item />
          <Grid item>
            {lotDetails(
              "Lot 11",
              lot11Bought,
              "123 candy lane",
              20000,
              "Jan 2004",
              80
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
