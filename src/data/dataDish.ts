import waffleCebolla from "../assets/paltillos/cebolla.svg"
import waffleBufalo from "../assets/paltillos/tender.svg"
import waffleSandwish from "../assets/paltillos/sandwish.svg"
import waffleBruja from "../assets/paltillos/breakfast.svg"
import waffleMaple from "../assets/paltillos/maple.svg"
import waffleChocoBanana from "../assets/paltillos/chocoBanana.svg"
import waffleFrutosRojos from "../assets/paltillos/frutosRojos.svg"
import waffleManzana from "../assets/paltillos/manzana.svg"
import waffleBrownie from "../assets/paltillos/brownie.svg"

export interface propsDish {
    id: number,
    name: string,
    tipo:string,
    img:string,
    precio:string
    ingredientes: string, 
    recomendaciones:string[]
}


export const dishElements: propsDish[] = [
    {
        id:1,
        name: 'Cebolla Encantada',
        tipo: 'Salado',
        img:waffleCebolla,
        precio:'125.00',
        ingredientes: 'Queso Manchego | cebolla caramelizada',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:2,
        name: 'Espectro Picante',
        tipo: 'Salado',
        img:waffleBufalo,
        precio:'195.00',
        ingredientes: 'Fajitas de pollo con bufalo | Dip queso philadelphia con jalapeño | Moras Azules',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:3,
        name: 'Wafsandwish',
        tipo: 'Salado',
        img:waffleSandwish,
        precio:'125.00',
        ingredientes: 'Jamon | Queso Manchego',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:4,
        name: 'Receta de la Bruja',
        tipo: 'Salado',
        img:waffleBruja,
        precio:'195.00',
        ingredientes: 'Huevo | Tocino | Miel maple | Frutos rojos',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:5,
        name: 'Poción de Maple ',
        tipo: 'Salado',
        img:waffleMaple,
        precio:'195.00',
        ingredientes: 'Pollo Frito | Miel de Maple',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:6,
        name: 'Delirio de Conejo',
        tipo: 'Dulce',
        img:waffleChocoBanana,
        precio:'170.00',
        ingredientes: 'Nutela | Platano | Almendra | Conejito | Helado de Vainilla | Jarabe de Chocolate',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:7,
        name: 'Bosque Rojo',
        tipo: 'Dulce',
        img:waffleFrutosRojos,
        precio:'170.00',
        ingredientes: 'Frutos rojos | Miel de maple | Helado de s´mores',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:8,
        name: 'Manzana Mística',
        tipo: 'Dulce',
        img: waffleManzana,
        precio:'160.00',
        ingredientes: 'Manzana Caramelizada | Granillo de nuez | Caramelo liquido | Helado de macadamia',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:9,
        name: 'Media Noche',
        tipo: 'Dulce',
        img:waffleBrownie,
        precio:'195.00',
        ingredientes: 'Wafle de chocolate | Brownie | Zarzamoras | jarabe de chocolate | Helado de vino y frutos rojos',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    
]