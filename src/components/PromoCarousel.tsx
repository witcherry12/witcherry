import Slider from "react-slick"
import { Title } from "./Title";

type Props = {}

export const PromoCarousel = (props: Props) => {

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
        <>

            <div className="container-promo">

                <Slider {...settings}>
                    <div className="item-promo">
                        <Title title={"Promo 1"} />
                    </div>
                    <div className="item-promo">
                        <Title title={"Promo 2"} />
                    </div>
                    <div className="item-promo">
                        <Title title={"Promo 3 "} />
                    </div>
                </Slider>
            </div>
        </>
    )
}