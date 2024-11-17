import dish  from  '../assets/waffles-witcherry.svg'

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
        name: 'Caramelonions',
        tipo: 'Salado',
        img:dish,
        precio:'125.00',
        ingredientes: 'Queso Manchego | cebolla caramelizada',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:2,
        name: 'Sangre de Bufalo',
        tipo: 'Salado',
        img:dish,
        precio:'195.00',
        ingredientes: 'Fajitas de pollo con bufalo | Dip queso philadelphia con jalapeño | Moras Azules',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:3,
        name: 'Wafsandwish',
        tipo: 'Salado',
        img:dish,
        precio:'125.00',
        ingredientes: 'Jamon | Queso Manchego',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:4,
        name: 'Americano',
        tipo: 'Salado',
        img:dish,
        precio:'195.00',
        ingredientes: 'Huevo | Tocino | Miel maple | Frutos rojos',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:5,
        name: 'Hoguera',
        tipo: 'Salado',
        img:dish,
        precio:'195.00',
        ingredientes: 'Pollo Frito | Miel de Maple',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:6,
        name: 'Chocobanana',
        tipo: 'Dulce',
        img:dish,
        precio:'170.00',
        ingredientes: 'Nutela | Platano | Almendra | Conejito | Helado de Vainilla | Jarabe de Chocolate',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:7,
        name: 'Bosque Rojo',
        tipo: 'Dulce',
        img:dish,
        precio:'170.00',
        ingredientes: 'Frutos rojos | Miel de maple | Helado de s´mores',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:8,
        name: 'Tentacion de Eva',
        tipo: 'Dulce',
        img:dish,
        precio:'160.00',
        ingredientes: 'Manzana Caramelizada | Granillo de nuez | Caramelo liquido | Helado de macadamia',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    {
        id:9,
        name: 'Sombra lunar',
        tipo: 'Dulce',
        img:dish,
        precio:'195.00',
        ingredientes: 'Wafle de chocolate | Brownie | Zarzamoras | jarabe de chocolate | Helado de vino y frutos rojos',
        recomendaciones: ['Cafe', 'Malteada', 'frape']
    },
    
]