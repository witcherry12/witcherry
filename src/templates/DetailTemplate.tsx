import {
  AppBar,
  Box,
  createTheme,
  Divider,
  IconButton,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { dishElements, propsDish } from "../data/dataDish";
import arrow from "../assets/icons/arrow-witcherry.svg";
import "./templates.css";
import { splicePrecio } from "../utils/splicePrecio";
import { Fade } from "react-awesome-reveal";

const defaultTheme = createTheme();
export const DetailTemplate = () => {
  let precioSplit: string[] = [];
  const { id } = useParams();
  const navigate = useNavigate();

  const { name, tipo, ingredientes, img, recomendaciones, precio }: propsDish =
    dishElements.find((platillo) => platillo.id == parseInt(id!))!;

  precioSplit = splicePrecio(precio);

  const handleClickArrow = () => {
    navigate("/menu/waffles", { replace: true });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <AppBar className="menu-detail" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClickArrow}
            >
              <img src={arrow} alt="arrow" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Fade>
        <Box>
          <div className="card-detail">
            <p style={{ textAlign: "center" }} className="title-red">
              Waffles
            </p>
            <div style={{ textAlign: "center" }}>
              <h1 className="title-big">{name}</h1>
              <p className="subtitle-red">{tipo}</p>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "35px",
                marginBottom: "50px",
              }}
            >
              <img src={img} alt="platillo" />
            </div>
            <div className="container-ingredients">
              <div>
                <ul className="gray-p list-detail">
                  {ingredientes}
                </ul>
              </div>
              <div style={{ marginTop: "35px" }}>
                <p className="small-gray-100">Recomendación</p>
                <ul className="small-gray-100 list-detail">
                  {recomendaciones.map((recomendacion, index) => (
                    <li style={{ display: "flex" }} key={index}>
                      <div>{recomendacion}</div>
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          background: "#CACACA",
                          marginRight: "5px",
                          marginLeft: "5px",
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="card-footer"
              style={{ marginTop: "30px", marginBottom: "20px" }}
            >
              <div className="container-price">
                <p>
                  <sup className="sub-text">$</sup>
                  {precioSplit[0]}.
                  <sup className="sub-text">{precioSplit[1]}</sup>
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Fade>
    </ThemeProvider>
  );
};
