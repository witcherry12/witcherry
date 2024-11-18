import { Card } from "@mui/material";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";
import "./carousel.css";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { splicePrecio } from "../utils/splicePrecio";

export interface PropsItems {
  idPlatillo: number;
  titulo: string;
  subtitulo: string;
  img?: string;
  precio: string;
}

export const ItemCarousel = ({
  idPlatillo,
  titulo,
  subtitulo,
  img,
  precio,
}: PropsItems) => {
  let splitPrecio: string[] = [];
  const navigate = useNavigate();
  const handleClickDetail = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`/menu/platillo/${idPlatillo}`);
  };

  splitPrecio = splicePrecio(precio);

  return (
    <div onClick={handleClickDetail}>
      <Card
        sx={{
          backgroundColor: "#1A1B1D",
          padding: "16px",
          boxShadow: "0px 0.1px 3.1px 0px #611C16",
          borderRadius: "18px"
        }}
      >
        <div className="card-header">
          <Title title={titulo} />
          <Paragraph paragraph={subtitulo} color="gray-p" />
        </div>
        <div className="img-card">
          <img src={img} alt="img1" />
        </div>
        <div className="card-footer">
          <div className="container-price">
            <p>
              <sup className="sub-text">$</sup>
              {splitPrecio[0]}.<sup className="sub-text">{splitPrecio[1]}</sup>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
