import { Container } from "@mui/material";
import { CarouselDish, Paragraph, Subtitle, Title } from "../components";
import { PropsItems } from "../components/ItemCarousel";
import waffles from "../assets/waffles-witcherry.svg";
import { Fade } from "react-awesome-reveal";

const itemCarousel1: PropsItems[] = [
  {
    idPlatillo: 1,
    titulo: "Caramelonions",
    subtitulo: "Especias",
    precio: "125.00",
    img: waffles,
  },
  {
    idPlatillo: 2,
    titulo: "Sangre de Bufalo",
    subtitulo: "Tiras de pollo",
    precio: "195.00",
    img: waffles,
  },
  {
    idPlatillo: 3,
    titulo: "Wafsandwich",
    subtitulo: "Jamon y queso",
    precio: "125.00",
    img: waffles,
  },
  {
    idPlatillo: 4,
    titulo: "Americano",
    subtitulo: "Huevo, tocino, maple",
    precio: "175.00",
    img: waffles,
  },
  {
    idPlatillo: 5,
    titulo: "Hoguera",
    subtitulo: "Pollo frito, jarabe de maple",
    precio: "195.00",
    img: waffles,
  },
];

const itemCarousel2: PropsItems[] = [
  {
    idPlatillo: 6,
    titulo: "Chocobanana",
    subtitulo: "Nutella y Platano",
    precio: "170.00",
    img: waffles,
  },
  {
    idPlatillo: 7,
    titulo: "Bosque Rojo",
    subtitulo: "Frutos Rojos",
    precio: "170.00",
    img: waffles,
  },
  {
    idPlatillo: 8,
    titulo: "Tentacion de Eva",
    subtitulo: "Manzana",
    precio: "160.00",
    img: waffles,
  },
  {
    idPlatillo: 9,
    titulo: "Sombre Lunar",
    subtitulo: "Browni de Cocolate",
    precio: "195.00",
    img: waffles,
  },
];

export const Waffles = () => {
  return (
    <>
      <Fade>
        <div>
          <Title title={"Especialidades"} />
          <Paragraph
            paragraph={"Nuestras Recomendaciones"}
            color="grayp-p-400"
          />
          <Subtitle subtitle={"Cristales de mar"} />
        </div>

        <Container
          sx={{
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <CarouselDish arrayItems={itemCarousel1} />
        </Container>

        <div>
          <Subtitle subtitle={"Dulces Encantados"} />
        </div>

        <Container
          sx={{
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <CarouselDish arrayItems={itemCarousel2} />
        </Container>

        <div
          style={{
            marginTop: "30px",
            width: "100%",
          }}
        >
          <Title title={"Crea tu magica combinaciónes"} />
          <Paragraph
            paragraph={
              "Elige un ingrediente en cada paso, para armar una deliciosa combinación"
            }
            color="grayp-p-400"
          />
        </div>
      </Fade>
    </>
  );
};
