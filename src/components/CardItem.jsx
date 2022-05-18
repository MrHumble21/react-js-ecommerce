import { Grid, Paper, Typography, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React,{useState} from "react";
import { AccessTime } from "@mui/icons-material";

function CardItem() {

    const rand =  Math.random() * 5;
    const [rate, setRate] = useState(rand.toFixed(1))
  return (
    <Grid item xs={3} xm={2}>
      <Paper elevation={3}>
        <img
          className="img"
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into fall
          </Typography>
        </Box>
        <Box
          paddingX={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccessTime
            sx={{
              width: 14.9,
              marginRight: 1,
            }}
          />

          <Typography variant="body2" component="p">
            5 hours later
          </Typography>
        </Box>
        <Box paddingX={1} sx={{display: "flex", alignItems: "center", marginTop: 3}}>
          <Rating
         sx={{ marginRight:1}}
            size="small"
            value={rate}
            precision={0.25}
          />
          <Typography variant="body2" component="p">
            {rate}
          </Typography>
          <Typography sx={
              {
                  marginLeft:2
              }
          } variant="body2" component="p">
            ({Math.round(rate * rate * 100)} Reviews)
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

export default CardItem;
