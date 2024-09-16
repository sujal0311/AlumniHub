import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const LandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/login");
  };

  // List of institutes
  const institutes = [
    { name: "IIT Kanpur", image: "https://th.bing.com/th/id/OIG1..jqA1v1Qa0DyQhpQP2Sz?pid=ImgGn" },
    { name: "IIT Madras", image: "https://th.bing.com/th/id/OIG1.VJkTOfKlRmFCRtdhqYFp?w=1024&h=1024&rs=1&pid=ImgDetMain" },
    { name: "IIT Bombay", image: "https://th.bing.com/th/id/OIG3.WQ6AA711aM.M3rFyjxhT?pid=ImgGn" },
    { name: "NIT Trichy", image: "https://th.bing.com/th/id/OIG4.mcUDdl4r2ViKgjf7vhne?pid=ImgGn" },
    { name: "NIT Warangal", image: "https://th.bing.com/th/id/OIG2.Rh7r.Nb07qk6hFD1sb5a?w=1024&h=1024&rs=1&pid=ImgDetMain" },
    { name: "NIT Kurukshetra", image: "https://th.bing.com/th/id/OIG2.vfo.yhAWd9B15tF4LQMm?pid=ImgGn" },
    { name: "IIIT Bangalore", image: "https://th.bing.com/th/id/OIG1.pytQ_1YCpL3hIC5Deahk?w=1024&h=1024&rs=1&pid=ImgDetMain" },
    { name: "IIIT Hyderabad", image: "https://th.bing.com/th/id/OIG3.UXu2QHel2yzzj3J9TRYH?w=1024&h=1024&rs=1&pid=ImgDetMain" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #232F47 0%, #1c2535 100%)",
        minWidth: "99vw",
        minHeight: "110vh",
        paddingTop: "50px",
        paddingBottom: "50px",
        color: "#fff",
        scrollBehavior: "smooth",
      }}
    >
      <Container maxWidth="lg">
        {/* Image */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <img
            src="https://th.bing.com/th/id/OIG4.ZUb5aSsuFP1FJhmHnMCU?pid=ImgGn"
            alt="AlumniHub"
            style={{
              width: "100%",
              maxWidth: "100px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              position: "absolute",
              left: 30,
              top: 20,
            }}
          />
        </div>

        {/* Main Title */}
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#f9a825",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          Welcome to AlumniHub
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#f9a825",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          An Intelligent Platform to Interconnect Alumni and Students
        </Typography>

        {/* Descriptive Text */}
        <Typography
          variant="h6"
          align="center"
          paragraph
          style={{
            marginBottom: "40px",
            opacity: 0.9,
            color: "#ffffff",
            maxWidth: "600px",
            margin: "40px auto",
            lineHeight: "1.8",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          Connecting Alumni & Students for Lifelong Learning and Support through
          AI & Blockchain
        </Typography>

        {/* Unique Features */}
        <Grid container spacing={4}>
          {[
            {
              title: "AI Matching",
              description: "Connect based on expertise and interests.",
              image:
                "https://th.bing.com/th/id/OIG2.vqWtEhbpkyLyaILYeCnZ?w=1024&h=1024&rs=1&pid=ImgDetMain",
            },
            {
              title: "Blockchain Security",
              description: "Secure and verified interactions.",
              image:
                "https://th.bing.com/th/id/OIG1.3bY4PHHlUF20qUGrnKg1?w=1024&h=1024&rs=1&pid=ImgDetMain",
            },
            {
              title: "Multilingual Support",
              description: "Overcome language barriers.",
              image:
                "https://th.bing.com/th/id/OIG1.T.c4qmT.366gh2.K44Io?pid=ImgGn",
            },
            {
              title: "Video/Audio Calls",
              description: "Real-time mentorship and networking.",
              image:
                "https://th.bing.com/th/id/OIG3.TkMCgq.hc1un7YEafbdQ?pid=ImgGn",
            },
          ].map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                style={{
                  backgroundColor: "#1c2535",
                  backdropFilter: "blur(5px)",
                  borderRadius: "15px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  overflow: "hidden",
                  position: "relative",
                  color: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 30px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0,0,0,0.3)";
                }}
              >
                <CardMedia
                  component="img"
                  image={feature.image}
                  alt={`${feature.title} image`}
                  style={{
                    height: 220,
                    filter: "brightness(0.6)",
                    transition: "filter 0.3s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))",
                  }}
                ></Box>
                <CardContent
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "bold", transition: "color 0.3s ease" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginTop: "10px", color: "#d1d9e6" }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <div style={{ textAlign: "center", marginTop: "60px", marginBottom: "20px" }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleOnClick}
            style={{
              backgroundColor: "#f9a825",
              padding: "12px 36px",
              borderRadius: "40px",
              fontSize: "1.2rem",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              color: "#232F47",
              textTransform: "uppercase",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
            }}
          >
            Join Now
          </Button>
        </div>

        {/* Institutes Section */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#f9a825",
            letterSpacing: "1.5px",
            marginTop: "100px",
          }}
        >
          Institutes you are looking for
        </Typography>
        <Typography
          variant="h6"
          align="center"
          paragraph
          style={{
            marginBottom: "40px",
            opacity: 0.9,
            color: "#ffffff",
            maxWidth: "600px",
            margin: "40px auto",
            lineHeight: "1.8",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
         Match your network based on common interests and projects
        </Typography>
        <Grid container spacing={4}>
          {institutes.map((institute, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                style={{
                  backgroundColor: "#1c2535",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  image={institute.image}
                  alt={institute.name}
                  style={{ height: 150, objectFit: "cover" }}
                />
                <CardContent
                  style={{
                    backgroundColor: "#1c2535",
                    padding: "16px",
                    color: "#f9a825",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "bold" }}
                  >
                    {institute.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Typography
          variant="h6"
          align="center"
          paragraph
          style={{
            marginBottom: "20px",
            opacity: 0.9,
            color: "#ffffff",
            maxWidth: "600px",
            margin: "40px auto",
            lineHeight: "1.8",
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          And Many More...
        </Typography>
    </div>
  );
};

export default LandingPage;
