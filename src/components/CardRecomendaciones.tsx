//import { Divider } from "@mui/material"
import { Title } from "./Title"
import { Paragraph } from "./Paragraph"
import imgWaffle  from "../assets/waffles-witcherry.svg"
import "./carousel.css";


export const CardRecomendaciones = () => {
    // revisar page detail
    return (
        <div className="card-detail">

            <div className="card-header">
                <Title title="texto" />
                <Paragraph paragraph="subtitulo"color="gray-p" />
            </div>
            <div
                style={{
                    marginTop: "35px",
                    marginBottom: "50px",
                }}
                className="img-card"
            >
                <img src={imgWaffle} alt="platillo" />
            </div>
            <div className="container-ingredients">
                <div>
                    <ul className="gray-p list-detail">
                        ingedientes
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
                        50.
                        <sup className="sub-text">00</sup>
                    </p>
                </div>
            </div>
        </div>
    )
}