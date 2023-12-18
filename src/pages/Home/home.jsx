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
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import useStyles from "./styles";
import VideoCards from "./videoCards";

function Home() {
  // const classes = useStyles();
  return (
    <>
      <div
        style={{
          backgroundColor: "#d1d1f7",
          width: "100%",
          marginTop: "-0.1rem",
        }}
      >
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            paddingTop: "10rem",
            paddingBottom: "1rem",
            fontWeight: "bold",
            color: "#2b1c50",
          }}
        >
          One video is worth a thousand words
        </Typography>
        <Container maxWidth="md">
          <Typography
            variant="h5"
            align="center"
            style={{
              color: "#3d2e7c",
            }}
          >
            Easily record and share AI-powered video messages with your
            teammates and customers to supercharge productivity
          </Typography>

          <Stack alignItems="center">
            <Button
              style={{
                width: "50%",
                height: "90px",
                backgroundColor: "#565add",
                border: "9px solid #7E75E680",
                fontSize: "24px",

                marginTop: "2rem",
              }}
              variant="contained"
              rounded
            >
              Get Loom for free
            </Button>
          </Stack>
        </Container>

        <Container maxWidth="xl" sx={{ marginTop: 5 }}>
          <Card sx={{ borderRadius: "50px" }}>
            <CardActionArea>
              <video
                style={{ width: "100%" }}
                src={
                  "https://cdn.loom.com/sessions/thumbnails/313bf71d20ca47b2a35b6634cefdb761-00001.mp4"
                }
                controls="controls"
                autoplay="true"
              />
            </CardActionArea>
          </Card>
        </Container>
      </div>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          style={{
            color: "#2b1c50",
            marginTop: "5rem",
            marginBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          More than 21 million people across 200,000 companies choose Loom
        </Typography>

        {/* need to add logos slider here */}
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ backgroundColor: "#2b1c50", borderRadius: "60px" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} ms={6} md={6}>
              <Box>
                <img
                  style={{ width: "80%", padding: "5rem" }}
                  src="https://cdn.sanity.io/images/pvn35iyy/production/7a4e577433f53ec844f00a11f275ca7b00864871-1298x1298.jpg"
                />
              </Box>
            </Grid>
            <Grid item xs={12} ms={6} md={6}>
              <Box sx={{ marginTop: "25%", width: "85%" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    align="left"
                    style={{ color: "#f0f0f0", fontWeight: "700" }}
                  >
                    NEW!
                  </Typography>
                  <Typography
                    variant="h2"
                    align="left"
                    style={{ color: "#f0f0f0", fontWeight: "bold" }}
                  >
                    Loom AI
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{ color: "#f0f0f0" }}
                  >
                    Record better, faster video messages, without lifting a
                    finger
                  </Typography>

                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontSize: "25px", color: "#f0f0f0" }}
                  >
                    Learn how 25+ million people around the world use async
                    video to improve focus, clarity, and connectedness.
                  </Typography>

                  {/* </Box> */}
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          style={{
            color: "#2b1c50",
            fontWeight: "bold",
            marginTop: "5rem",
            marginBottom: "1rem",
          }}
        >
          The easiest screen recorder you’ll ever use
        </Typography>
        <Typography
          variant="h6"
          color="secondary"
          align="center"
          style={{ color: "#3d2e7c" }}
        >
          Record in a few clicks. Share anywhere. Collaborate better.
        </Typography>
      </Container>

      {/*  */}
      <Container
        sx={{
          marginTop: "4%",
          borderRadius: "60px",
          backgroundColor: "#eff0ff",
        }}
        maxWidth="xl"
      >
        <Grid container spacing={1}>
          <Grid item xs={12} ms={6} md={6}>
            <Card
              sx={{
                backgroundColor: "#2b1c50",
                borderRadius: "40px",
                height: "auto",
                width: "80%",
                margin: "50px",
              }}
            >
              <CardContent>
                <CardMedia
                  sx={{
                    borderRadius: "100%",
                    height: "30%",
                    width: "50%",
                    margin: "auto",
                    marginTop: "8%",
                  }}
                  component="video"
                  image={
                    "https://cdn.loom.com/assets/marketing/bubbs/angelina.mp4"
                  }
                  autoPlay
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} ms={6} md={6}>
            <Box
              sx={{
                marginTop: "10%",
                width: "50%",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  color: "#2b1c50",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Lighting fast screen recording
              </Typography>
              <Typography variant="body1" style={{ color: "#3d2e7c" }}>
                Easily record your screen and camera. Record on any device using
                Loom’s Chrome extension, desktop app or mobile app.
              </Typography>

              <Button
                variant="contained"
                rounded
                sx={{
                  marginTop: "1rem",
                  backgroundColor: "#565add",
                  border: "5px solid #7E75E680",
                  fontSize: "16px",
                }}
              >
                Download now
              </Button>
            </Box>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          marginTop: "8%",
          backgroundColor: "#eff0ff",
          borderRadius: "60px",
          height: "500px",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            // align="center"
            style={{
              textAlign: "center",
              paddingTop: "7rem",
              paddingBottom: "2rem",
              fontWeight: "bold",
              color: "#2b1c50",
              backgroundColor: "#eff0ff",
            }}
          >
            Keep your content safe
          </Typography>
          <Typography
            variant="h6"
            align="center"
            style={{
              fontSize: "25px",
              color: "#3d2e7c",
            }}
          >
            Enterprise-grade security to keep your data and your customer’s data
            private and secure. We offer SSO, SCIM as well as custom data
            retention policies and privacy settings.
          </Typography>

          <Button
            variant="contained"
            rounded
            sx={{
              marginTop: "2rem",
              backgroundColor: "#565add",
              border: "5px solid #7E75E680",
              fontSize: "16px",

              margin: " 30px auto",
            }}
          >
            Learn more
          </Button>
        </Container>
      </Container>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          align="center"
          style={{
            color: "#2b1c50",
            fontWeight: "bold",
            marginTop: "8rem",
            marginBottom: "1rem",
          }}
        >
          Video messaging for all use cases
        </Typography>
        <Box sx={{ marginTop: "5%" }}>
          <VideoCards />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          style={{
            color: "#2b1c50",
            fontWeight: "bold",
            marginTop: "4rem",
            marginBottom: "1rem",
          }}
        >
          Powerful features for easy, custom recordings
        </Typography>
        <Container maxWidth="md">
          <Grid container spacing={10}>
            <Grid item xs={12} ms={6} md={6}>
              <Box style={{ display: "flex", margin: "20px" }}>
                <CheckCircleIcon sx={{ color: "#7e75e6", fontSize: "35px" }} />
                <Typography style={{ paddingLeft: "25px" }} variant="body1">
                  Screen and camera recording
                </Typography>
              </Box>
              <Box style={{ display: "flex", margin: "20px" }}>
                <CheckCircleIcon sx={{ color: "#7e75e6", fontSize: "35px" }} />
                <Typography style={{ paddingLeft: "25px" }} variant="body1">
                  Trim and stitch video clips
                </Typography>
              </Box>
              <Box style={{ display: "flex", margin: "20px" }}>
                <CheckCircleIcon sx={{ color: "#7e75e6", fontSize: "35px" }} />
                <Typography style={{ paddingLeft: "25px" }} variant="body1">
                  Transcriptions and closed captions
                </Typography>
              </Box>
              <Box style={{ display: "flex", margin: "20px" }}>
                <CheckCircleIcon sx={{ color: "#7e75e6", fontSize: "35px" }} />
                <Typography style={{ paddingLeft: "25px" }} variant="body1">
                  Custom background
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} ms={6} md={6}>
              <Box style={{ display: "flex", margin: "20px" }}>
                <CheckCircleIcon sx={{ color: "#7e75e6", fontSize: "35px" }} />
                <Typography style={{ paddingLeft: "25px" }} variant="body1">
                  Easy sharing and embedding
                </Typography>
              </Box>
              <Box style={{ display: "flex", margin: "20px" }}>
                <CheckCircleIcon sx={{ color: "#7e75e6", fontSize: "35px" }} />
                <Typography style={{ paddingLeft: "25px" }} variant="body1">
                  Download and upload
                </Typography>
              </Box>
              <Box style={{ display: "flex", margin: "20px" }}>
                <CheckCircleIcon sx={{ color: "#7e75e6", fontSize: "35px" }} />
                <Typography style={{ paddingLeft: "25px" }} variant="body1">
                  Video privacy controls
                </Typography>
              </Box>
              <Box style={{ display: "flex", margin: "20px" }}>
                <CheckCircleIcon sx={{ color: "#7e75e6", fontSize: "35px" }} />
                <Typography style={{ paddingLeft: "25px" }} variant="body1">
                  Video and viewer insights
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Container maxWidth="xl">
        <Box
          style={{
            marginTop: "4%",
            borderRadius: "60px",
            backgroundColor: "#2b1c50",
            height: "800px",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              align="center"
              variant="subtitle2"
              style={{ color: "white", paddingTop: "3rem" }}
            >
              FROM OUR BLOG
            </Typography>
            <Typography
              variant="h2"
              align="center"
              style={{
                color: "white",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              How to use async video messaging to improve communication
            </Typography>
            <Grid style={{ marginTop: "10px" }} container spacing={8}>
              <Grid item xs={12} ms={6} md={6}>
                <Card
                  sx={{
                    backgroundColor: "#3d2e7c",
                    borderRadius: "40px",
                    paddingBottom: "4rem",
                    padding: "25px",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      align="left"
                      sx={{ color: "white" }}
                    >
                      When to Choose Synchronous Vs. Asynchronous Communication
                    </Typography>

                    <Typography variant="body1" sx={{ color: "white", mt: 4 }}>
                      This guide explores the intricacies of sync vs. async
                      communication, helps you decide which is the best for your
                      workflow, and introduces how screen recording like Loom
                      bridges the gap between these communication styles.
                    </Typography>
                  </CardContent>

                  <Typography>Read the article</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} ms={6} md={6}>
                <Card
                  sx={{
                    backgroundColor: "#3d2e7c",
                    borderRadius: "40px",
                    paddingBottom: "4rem",
                    padding: "25px",
                  }}
                >
                  <CardContent>
                    <Typography
                      align="left"
                      variant="h5"
                      sx={{ color: "white" }}
                    >
                      7 Tips for Overcoming Camera Anxiety
                    </Typography>

                    <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
                      It can feel vulnerable to record a video message almost
                      like public speaking especially if you’re not getting
                      feedback from another person in real life. Here are 7 tips
                      for overcoming camera anxiety,so you can communicate with
                      greater clarity, build stronger relationships at work.
                    </Typography>
                  </CardContent>

                  <Typography>Read the article</Typography>
                </Card>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              rounded
              sx={{
                marginTop: "2rem",
                backgroundColor: "#565add",
                border: "5px solid #7E75E680",
                fontSize: "16px",
                margin: " 30px auto",
              }}
            >
              Explore our blog
            </Button>
          </Container>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Box
          style={{
            marginTop: "4%",
            borderRadius: "60px",
            backgroundColor: "black",
          }}
        >
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              style={{
                textAlign: "center",
                paddingTop: "5rem",
                paddingBottom: "1rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Loom for Enterprise
            </Typography>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                paddingBottom: "1rem",
                color: "white",
              }}
            >
              Loom for Enterprise helps teams securely manage and organize async
              video communication at scale
            </Typography>
            <Button
              variant="contained"
              rounded
              sx={{
                marginTop: "1rem",
                backgroundColor: "#565add",
                border: "5px solid #7E75E680",
                fontSize: "16px",
                margin: " 30px auto",
              }}
            >
              Learn more
            </Button>

            <Box sx={{ marginTop: "15%" }}>
              <img
                style={{ width: "100%" }}
                src="https://cdn.loom.com/assets/marketing/home/enterprise.webp"
              />
            </Box>
          </Container>
        </Box>
      </Container>
    </>
  );
}

export default Home;
