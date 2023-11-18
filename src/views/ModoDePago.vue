<template>
    <div>
      <h1>Consulta de Modos de Pago</h1>
      <ul>
        <li v-for="modoPago in modosPago" :key="modoPago.id">
          {{ modoPago.nombre }}
        </li>
      </ul>
    </div>
  </template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      metodopago: []
    };
  },
  mounted() {
      axios
      .get('http://127.0.0.1:8000/metodopago')
      .then(responde => (this.metodopago = response.data.metodopago))
  },
};
</script>