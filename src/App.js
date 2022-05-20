import "./styles.css";
import React, { Suspense, useEffect, useState, useRef } from "react";
import {
  AppBar,
  ButtonGroup,
  Button,
  Paper,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Popover,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  MeshReflectorMaterial
} from "@react-three/drei";
import RoadGround from "./Components/RoadGround";
import Crane from "./Components/Crane";

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

  const [Address, setAddress] = useState();
  const [Zestamate, setZestamte] = useState();
  const [lastSold, setLastSold] = useState();
  const [LikleyhoodToSell, setLikelyhoodToSell] = useState();

  const [lotCount, setLotCount] = useState(0);
  const [open, setOpen] = React.useState(false);

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
      setTimeout(() => {
        setBtnDisabled(!Paused);
      }, 1000);
    }
  }, [seconds, intervalId]);

  const renderVillage = () => {
    return (
      <>
        <OrbitControls
          minPolarAngle={Math.PI / 3.0}
          maxPolarAngle={Math.PI / 3.0}
          enablePan={false}
          enableZoom={false}
        />
        <PerspectiveCamera makeDefault fov={50} position={[1, 1, 2]} />

        {/*<color args={[0, 0, 0]} attach="background" />*/}

        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={1.5}
          position={[3, 4, -1]}
          angle={0.6}
          penumbra={0.5}
          castShadow
        />
        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={2}
          position={[-7, 3, -1]}
          angle={0.6}
          penumbra={0.5}
          castShadow
        />
        {/**fix this shit */}
        <group>
          <mesh>
            <RoadGround scale={[0.01, 0.01, 0.01]} />

            {/*<boxGeometry args={[1, 1, 1]} />*/}
            <meshPhysicalMaterial color={"red"} roughness={1} opacity={0.2} />
          </mesh>
        </group>
      </>
    );
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

      <Suspense fallback={null}>
        <Canvas
          shadows
          style={{ width: "100vw", height: "80vh", display: "block" }}
        >
          {renderVillage()}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default App;
