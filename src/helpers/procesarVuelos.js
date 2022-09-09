import axios from "axios";

const obtenerVuelosDisponibles = async(origen, destino, fecha) => {
    return await obtenerVuelosDisponiblesAxios(origen, destino, fecha);
}

const obtenerVuelosDisponiblesAxios = async(origen, destino, fecha) => {
    const data = axios.get(`http://localhost:8085/APINomina/V1/vuelos/${origen}/${destino}/${fecha}`).then(r => r.json())
    console.log(data)
    return data
}

export default obtenerVuelosDisponibles