import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";

import { Grid, Typography } from "@mui/material";
import step1 from "../assets/steps/step1.svg";
import step2 from "../assets/steps/step2.svg";
import step3 from "../assets/steps/step3.svg";
import step4 from "../assets/steps/step4.svg";
import step5 from "../assets/steps/step5.svg";
import "./stepLine.css";

export const StepLine = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem className="card-item">
        <TimelineSeparator>
          <TimelineDot className="dot-color">
            <img src={step1} alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Elige la base de tu waffle:
          </Typography>
          <Typography>
            <ul className="flex-list text-gray list-solid">
              <li>Vainilla</li>
              <li>Chocolate</li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className="card-item">
        <TimelineSeparator>
          <TimelineDot className="dot-color">
            <img src={step2} alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Selecciona topping 1:
          </Typography>
          <Typography>
            <div>
              <p>Mermeladas</p>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                  <ul className="text-gray list-solid">
                    <li>Frambuesa</li>
                    <li>Fresa</li>
                    <li>Zarzamora</li>
                  
                  </ul>
                </Grid>
                <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                  <ul className="text-gray list-solid">
                  <li>Mora Azul</li>
                  <li>Cereza</li>
                  </ul>
                </Grid>
              </Grid>
            </div>
            <div>
              <p>Otros</p>
              <Grid container spacing={2}>
                <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                  <ul className="text-gray list-solid">
                    <li>Cajeta</li>
                    <li>Nutella</li>
                  </ul>
                </Grid>
                <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                  <ul className="text-gray list-solid">
                    <li>Crema de Cacahuate</li>
                    <li>Queso Crema</li>
                  </ul>
                </Grid>
              </Grid>
            </div>
            <p className="small-gray">
              Pregunta por las mermeladas de temporada
            </p>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className="card-item">
        <TimelineSeparator>
          <TimelineDot className="dot-color">
            <img src={step3} alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Selecciona topping 2:
          </Typography>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                <ul className="text-gray list-solid">
                  <li>Durazno</li>
                  <li>Platano</li>
                  <li>Fresa</li>
                </ul>
              </Grid>
              <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                <ul className="text-gray list-solid">
                  <li>Frambuesa</li>
                  <li>Zarzamora</li>
                  <li>Mora Azul</li>
                </ul>
              </Grid>
            </Grid>
            <p className="small-gray">Pregunta por la fruta de temporada</p>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className="card-item">
        <TimelineSeparator>
          <TimelineDot className="dot-color">
            <img src={step4} alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Elige un jarabe:
          </Typography>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                <ul className="text-gray list-solid">
                  <li>Miel</li>
                  <li>Maple</li>
                  <li>Lechera</li>
                  <li>Chocolate</li>
                </ul>
              </Grid>
              <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                <ul className="text-gray list-solid">
                  <li>Crema Batida</li>
                  <li>Rompope</li>
                  {/* <li>Baileys</li> */}
                  {/* <li>Amaretto</li> */}
                </ul>
              </Grid>
            </Grid>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className="card-item">
        <TimelineSeparator>
          <TimelineDot className="dot-color">
            <img src={step5} alt="number" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Destello de estrellas de estrellas:
          </Typography>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                <ul className="text-gray list-solid">
                  <li>Nuez</li>
                  <li>Almendra</li>
                  <li>Cacahuate</li>
                  <li>Avellana</li>
                  <li>Chispas</li>
                  <li>Arandanos</li>
                  <li>Granola</li>
                </ul>
              </Grid>
              <Grid item xs={6} sx={{ paddingLeft: "5px !important" }}>
                <ul className="text-gray list-solid">
                  <li>Granillo Chocolate</li>
                  <li>Gomitas</li>
                  <li>Malvaviscos</li>
                  <li>Lunetas</li>
                  <li>Amaranto</li>
                  <li>Oreo</li>
                </ul>
              </Grid>
            </Grid>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
