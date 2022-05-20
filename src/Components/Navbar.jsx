import React from "react";
import { AppBar, ButtonGroup, Button } from "@material-ui/core";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
