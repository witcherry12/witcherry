import Slider from "react-slick";
import { ItemCarousel, PropsItems } from "./ItemCarousel";
import { useLocation } from "react-router-dom";
import { CardRecomendaciones } from "./CardRecomendaciones";

interface PropsCarousel {
  arrayItems: PropsItems[];
}

export const CarouselDish = ({ arrayItems }: PropsCarousel) => {
  const { pathname } = useLocation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "1px",
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {
        pathname === "/menu/main" ? (
          <Slider {...settings}>
            <CardRecomendaciones />
            <CardRecomendaciones />
          </Slider>
        ) : (
          <Slider {...settings}>
            {arrayItems.map((item, index) => (
              <ItemCarousel
                key={index}
                idPlatillo={item.idPlatillo}
                titulo={item.titulo}
                subtitulo={item.subtitulo}
                img={item.img}
                precio={item.precio}
              />
            ))}
          </Slider>
        )
      }
    </div>
  );
};
