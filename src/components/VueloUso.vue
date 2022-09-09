<template>
  <input v-model="origen" type="text"/>
  <input v-model="destino" type="text"/>
  <input v-model="fecha" type="text"/>
  
  <button @click="consultar">Buscar Vuelos Disponibles</button>


</template>

<script>
import { obtenerVuelosDisponibles } from "../helpers/procesarVuelos.js"

export default {
    data() {
        return {
        origen: null,
        destino: null,
        fecha: null,
        listaVuelos: null
        }
    },
    methods: {
        async consultar() {
            const vuelos = await obtenerVuelosDisponibles(this.origen, this.destino, this.fecha);
            this.listaVuelos = vuelos
            console.log(vuelos)
        }
    }
};

</script>
