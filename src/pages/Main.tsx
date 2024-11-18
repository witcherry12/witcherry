import { Fade } from "react-awesome-reveal"
import { CarouselDish, Paragraph, PromoCarousel, Title } from "../components"
import { Container } from "@mui/material"
import waffles from "../assets/waffles-witcherry.svg";
import { PropsItems } from "../components/ItemCarousel";


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

export const Main = () => {
    return (
        <>
            <Fade>
                <div>
                    <Title title={"Hola, alma curiosa"} />
                    <Paragraph
                        paragraph={"Nuestras Recomendaciones"}
                        color="grayp-p-400"
                    />
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

                <PromoCarousel />
            </Fade>
        </>
    )
}