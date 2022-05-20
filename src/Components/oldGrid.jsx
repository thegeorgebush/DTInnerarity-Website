import { React, useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Tooltip,
  IconButton
} from "@material-ui/core";

const oldGrid = () => {
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

  const [lotCount, setLotCount] = useState(0);

  const addLots = (lot) => {
    const newProperties = properties.slice();
    newProperties.push("lot3");
    setProperties(newProperties);
    //console.log("properties: " + properties.map(name => ({properties}))) properties.map(name => ( name === "lot2" ? "green" : ""))
  };

  const lotRender = (
    lotName,
    lotBought,
    lotAddress,
    lotZestamate,
    lotLastSold,
    lotLikelySell,
    padding = "5px"
  ) => {
    return (
      <Tooltip placement="top" arrow title={toolTips(lotZestamate, lotBought)}>
        <IconButton
          onClick={() => {
            if (money > lotZestamate) {
              setOpen(true);
              if (open) {
                addLots(lotName);
                setBought(lotName);
                setMoney(money - lotZestamate);
                setLotCount(lotCount + 1);
              }
            }
            setAddress(lotAddress);
            setZestamte(lotZestamate);
            setLastSold(lotLastSold);
            setLikelyhoodToSell(lotLikelySell);
          }}
          style={{ padding: "0px" }}
        >
          <Paper
            style={{
              backgroundColor: lotBought ? "green" : "",
              padding: padding
            }}
          >
            <Typography>{lotName}</Typography>
          </Paper>
        </IconButton>
      </Tooltip>
    );
  };

  const toolTips = (lotPrice, lotBought) => {
    return (
      <React.Fragment>
        <Typography>{!lotBought ? "Price: $" + lotPrice : "Owned"}</Typography>
      </React.Fragment>
    );
  };

  const setBought = (lotName) => {
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
    <Grid container>
      <Grid contianer direction="column">
        <Grid item>
          {lotRender(
            "Lot 1",
            lot1Bought,
            "5780 Bob O Link Dr",
            336000,
            "N/A",
            80
          )}
        </Grid>
        <Grid item>
          {lotRender(
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
          {lotRender("Lot 2", lot2Bought, "5681 Cruzat Way,", 54000, "N/A", 80)}
        </Grid>
        <Grid item>
          {lotRender(
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
          {lotRender(
            "Lot 5",
            lot5Bought,
            "5661 Galvez Rd",
            429000,
            "Jun 2008",
            80,
            "21px"
          )}
        </Grid>
        <Grid container direction="row">
          <Grid item>
            {lotRender(
              "Lot 6",
              lot6Bought,
              "14300 Innerarity Point Rd",
              26000,
              "jan 2000",
              80
            )}
          </Grid>
          <Grid item>
            {lotRender(
              "Lot 7",
              lot7Bought,
              "5811 Galvez Rd",
              65000,
              "Oct 2015",
              80
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            {lotRender(
              "Lot 8",
              lot8Bought,
              "5820 Cruzat Way",
              294000,
              "Oct 2015",
              80
            )}
          </Grid>
          <Grid item>
            {lotRender(
              "Lot 9",
              lot9Bought,
              "123 candy lane",
              20000,
              "jan 2000",
              80
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            {lotRender(
              "Lot 10",
              lot10Bought,
              "5800 Cruzat Way",
              13000,
              "Jun 2006",
              80
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid contianer direction="column">
        <Grid item />
        <Grid item>
          {lotRender(
            "Lot 11",
            lot11Bought,
            "14265 Innerarity Point Rd,",
            368000,
            "Mar 2020",
            80
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default oldGrid;
