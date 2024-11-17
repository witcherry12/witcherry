import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Bebidas, Desayunos, Main, Postres, Promos, Waffles } from "../pages";
import {
  Box,
  Card,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { Menu, StepLine, Title } from "../components";
import iceCream from "../assets/icons/iceCream-witcherry.svg";
import topping from "../assets/icons/chocolate-witcherry.svg";
import napolitano from "../assets/napolitan-witcherry.svg";
import conejo from "../assets/conejo-witcherry.svg";

const defaultTheme = createTheme();

export const MainTemplate = () => {
  const { pathname } = useLocation();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box maxWidth="sm" sx={{ display: "flex" }}>
        <CssBaseline />
        <Menu />
        <Container sx={{ mt: 4, mb: 4, width: "80%" }}>
          <Routes>
            <Route path="/waffles" element={<Waffles />} />
            <Route path="/desayunos" element={<Desayunos />} />
            <Route path="/bebidas" element={<Bebidas />} />
            <Route path="/postres" element={<Postres />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/Main" element={<Main/>} />
            <Route path="/*" element={<Navigate to="/witcherry/Home" />} />
          </Routes>
        </Container>
      </Box>

      {pathname === "/menu/waffles" ? (
        <>
          <Fade>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "left",
              }}
            >
              <StepLine />
            </div>
          </Fade>
          <Fade>
            <div style={{ padding: "10px", margin: "10px" }}>
              <Title title={"Extras"} />
              <div>
                <Card className="card-item">
                  <img
                    src={napolitano}
                    alt="napolitano"
                    className="img-card1"
                  />
                  <Grid container>
                    <Grid item xs={2}>
                      <div
                        style={{
                          margin: "10px",
                        }}
                      >
                        <img src={iceCream} alt="helado" />
                      </div>
                    </Grid>
                    <Grid item xs={10}>
                      <h3 className="text-white">Helado</h3>
                      <div>
                        <ul className="text-gray">
                          <li>Chocolate</li>
                          <li>Vainilla</li>
                          <li>Vino tinto con frutos rojos</li>
                          <li>Bombon flameado</li>
                          <li>Nuez de macadamia</li>
                        </ul>
                      </div>
                      <div className="card-footer">
                        <div className="container-price">
                          <p>
                            <sup className="sub-text">$</sup>0.
                            <sup className="sub-text">00</sup>
                          </p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
                <Card className="card-item">
                  <img src={conejo} alt="conejo" className="img-card2" />
                  <Grid container>
                    <Grid item xs={2}>
                      <div
                        style={{
                          margin: "10px",
                        }}
                      >
                        <img src={topping} alt="topping" />
                      </div>
                    </Grid>
                    <Grid item xs={10}>
                      <h3 className="text-white">Topping especial</h3>
                      <div>
                        <ul className="text-gray">
                          <li>Conejo Turin</li>
                          <li>Ferrero</li>
                          <li>Brownie</li>
                        </ul>
                        <div className="card-footer">
                          <div className="container-price">
                            <p>
                              <sup className="sub-text">$</sup>0.
                              <sup className="sub-text">00</sup>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            </div>
          </Fade>
        </>
      ) : null}
    </ThemeProvider>
  );
};
