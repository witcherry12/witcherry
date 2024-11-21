import { Fade } from "react-awesome-reveal";
import { Paragraph, Subtitle, Title } from "../components";
import { Card, CardContent, Container, Grid } from "@mui/material";
import santaClara from "../assets/santa_clara.svg";

export const Bebidas = () => {
  return (
    <>
      <Fade>
        <div>
          <Title title={"Elixirs"} />
          <Paragraph
            paragraph={"De todo tipo calientes, frias y frappe."}
            color="grayp-p-400"
          />
          <Subtitle subtitle={"Especialidades"} />
        </div>
        <Container
          sx={{
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <Card sx={{
            backgroundColor: "#1A1B1D",
            padding: "16px",
            boxShadow: "0px 0.1px 3.1px 0px #611C16",
            borderRadius: "18px"
          }}>
            <div className="card-header">
              <Title title={"Calientes"} />
            </div>
            <CardContent>
              <ul className="lista-tarjeta">
                <li >
                  <div className="item-tarjeta">
                    <p className="p-white">Cafe de caldero</p>
                    <div className="container-price-sm">
                      <p>
                        <sup className="sub-text-sm">$</sup>
                        50.<sup className="sub-text-sm">00</sup>
                      </p>
                    </div>

                  </div>
                </li>
                <li>
                  <div className="item-tarjeta">
                    <p className="p-white">Chocolate</p>
                    <div className="container-price-sm">
                      <p>
                        <sup className="sub-text-sm">$</sup>
                        50.<sup className="sub-text-sm">00</sup>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-tarjeta">
                    <p className="p-white">Chocolate con Malvaviscos</p>
                    <div className="container-price-sm">
                      <p>
                        <sup className="sub-text-sm">$</sup>
                        50.<sup className="sub-text-sm">00</sup>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul style={{ marginTop: '50px' }} className="lista-tarjeta">
                <li>
                  <div className="item-tarjeta">
                    <p className="p-white">Tizana</p>
                    <div className="container-price-sm">
                      <p>
                        <sup className="sub-text-sm">$</sup>
                        50.<sup className="sub-text-sm">00</sup>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-tarjeta">
                    <p className="p-white">Tés</p>
                    <div className="container-price-sm">
                      <p>
                        <sup className="sub-text-sm">$</sup>
                        50.<sup className="sub-text-sm">00</sup>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-tarjeta">
                    <p className="p-white">Leche</p>
                    <div className="container-price-sm">
                      <p>
                        <sup className="sub-text-sm">$</sup>
                        50.<sup className="sub-text-sm">00</sup>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item-tarjeta">
                    <p className="p-white">Leche de Sabores</p>
                    <div className="container-price-sm">
                      <p>
                        <sup className="sub-text-sm">$</sup>
                        50.<sup className="sub-text-sm">00</sup>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Container>
        <Container
          sx={{
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <Card sx={{
            backgroundColor: "#1A1B1D",
            padding: "16px",
            boxShadow: "0px 0.1px 3.1px 0px #611C16",
            borderRadius: "18px",
            marginTop: "15px"
          }}>
            <div className="card-header">
              <Title title={"Malteadas"} />
            </div>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ul className="lista-tajeta">
                    <li>
                      <p className="p-white">Vainilla</p>
                    </li>
                    <li>
                      <p className="p-white">Chocolate</p>
                    </li>
                    <li>
                      <p className="p-white">Bombon</p>
                    </li>
                    <li>
                      <p className="p-white">Macadamia</p>
                    </li>
                    <li>
                      <p className="p-white">Fresa</p>
                    </li>
                    <li>
                      <p className="p-white">Oreo</p>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <div className="cont-santa">
                    <img src={santaClara} alt="santaClara" />
                  </div>
                </Grid>
              </Grid>

            </CardContent>
            <div className="card-footer">
              <div className="container-price">
                <p>
                  <sup className="sub-text">$</sup>
                  50.<sup className="sub-text">00</sup>
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </Fade>
    </>
  );
};
