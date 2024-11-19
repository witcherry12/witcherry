import { Container } from "@mui/material";
import { CarouselDish, Paragraph, Subtitle, Title } from "../components";
import { PropsItems } from "../components/ItemCarousel";
import waffleCebolla from "../assets/paltillos/cebolla.svg"
import waffleBufalo from "../assets/paltillos/tender.svg"
import waffleSandwish from "../assets/paltillos/sandwish.svg"
import waffleBruja from "../assets/paltillos/breakfast.svg"
import waffleMaple from "../assets/paltillos/maple.svg"
import waffleChocoBanana from "../assets/paltillos/chocoBanana.svg"
import waffleFrutosRojos from "../assets/paltillos/frutosRojos.svg"
import waffleManzana from "../assets/paltillos/manzana.svg"
import waffleBrownie from "../assets/paltillos/brownie.svg"

import { Fade } from "react-awesome-reveal";

const itemCarousel1: PropsItems[] = [
  {
    idPlatillo: 1,
    titulo: "Cebolla Encantada",
    subtitulo: "Especias",
    precio: "125.00",
    img: waffleCebolla,
  },
  {
    idPlatillo: 2,
    titulo: "Espectro Picante",
    subtitulo: "Tiras de pollo",
    precio: "195.00",
    img: waffleBufalo,
  },
  {
    idPlatillo: 3,
    titulo: "Wafsandwich",
    subtitulo: "Jamon y queso",
    precio: "125.00",
    img: waffleSandwish,
  },
  {
    idPlatillo: 4,
    titulo: "Receta de la Bruja",
    subtitulo: "Huevo, tocino, maple",
    precio: "175.00",
    img: waffleBruja,
  },
  {
    idPlatillo: 5,
    titulo: "Pocion de Maple",
    subtitulo: "Pollo frito, jarabe de maple",
    precio: "195.00",
    img: waffleMaple,
  },
];

const itemCarousel2: PropsItems[] = [
  {
    idPlatillo: 6,
    titulo: "Delirio de Conejo",
    subtitulo: "Nutella y Platano",
    precio: "170.00",
    img: waffleChocoBanana,
  },
  {
    idPlatillo: 7,
    titulo: "Bosque Rojo",
    subtitulo: "Frutos Rojos",
    precio: "170.00",
    img: waffleFrutosRojos,
  },
  {
    idPlatillo: 8,
    titulo: "Manzana Mística",
    subtitulo: "Manzana",
    precio: "160.00",
    img: waffleManzana,
  },
  {
    idPlatillo: 9,
    titulo: "Media Noche",
    subtitulo: "Browni de Cocolate",
    precio: "195.00",
    img: waffleBrownie,
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
