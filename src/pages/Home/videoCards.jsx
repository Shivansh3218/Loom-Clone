import React from "react";
import {
  Typography,
  CssBaseline,
  Container,
  Button,
  Card,
  Stack,
  CardActionArea,
  CardMedia,
  Box,
  Grid,
  CardContent,
  makeStyles,
} from "@mui/material";

// const useStyles = makeStyles({
//     card: {
//       maxWidth: 345,
//       margin: 16,
//       maxHeight: 100,

//     },
//     media: {
//       height: 140,
//       weight: 40,
//     },
//   });

function VideoCards() {
  // const classes = useStyles();
  const cardData = [
    {
      color: "#e8f5e3",
      image:
        "https://cdn.sanity.io/images/pvn35iyy/production/1fbc589ca61c81668ab593338e1574803b244594-582x480.jpg",
      title: "Sales",
      description:
        "Personalize your pitch with video outreach to close more deals.",
    },
    {
      color: "#f8edfb",
      image:
        "https://cdn.sanity.io/images/pvn35iyy/production/0f64f6e8166dba475a323d474d9760efc9fcd093-580x480.jpg",
      title: "Engineering",
      description:
        "Add visual context to your code to accelerate your sprints.",
    },

    {
      color: "#e3f3ff",
      image:
        "https://cdn.sanity.io/images/pvn35iyy/production/7398089afbd2eb07a0a9ae57683cc6b1579b2b65-580x480.jpg",
      title: "Customer support",
      description: "Troubleshoot over video to reach resolutions faster.",
    },
    {
      color: "#eff0ff",
      image:
        "https://cdn.sanity.io/images/pvn35iyy/production/9351d769309a81c96600ccca75914e94ac6a9c91-580x480.jpg",
      title: "Design",
      description:
        "Share ideas and provide feedback over video to enhance designs.",
    },
  ];

  return (
    <div>
      <Grid container spacing={4}>
        {cardData.map((item, index) => (
          <Grid item xs={12} ms={6} md={3}>
            <Card
              style={{
                backgroundColor: item.color,
                height: "85%",
                borderRadius: "40px",
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                padding: "20px",
                margin: "10px",
              }}
              elevation={6}
              key={index}
            >
              <CardMedia
                style={{ height: "150px", width: "200px", margin: "auto" }}
                component="img"
                // height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography
                  align="center"
                  style={{ marginTop: "30px" }}
                  variant="h6"
                  component="div"
                >
                  {item.title}
                </Typography>
                <Typography
                  align="center"
                  style={{ marginTop: "10px" }}
                  variant="body1"
                //   color="text.secondary"
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default VideoCards;
