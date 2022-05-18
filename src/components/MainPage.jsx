import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import CardItem from "./CardItem";

function MainPage() {
  return (
    <Container>
      <h1>Welcome to Material UI</h1>
      <Grid container spacing={2}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Grid>
    </Container>
  );
}

export default MainPage;
