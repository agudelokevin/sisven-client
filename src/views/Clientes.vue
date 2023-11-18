<template>
    <div>
      <h1>Consulta de Clientes</h1>
      <ul>
        <li v-for="cliente in clientes" :key="cliente.id">
          {{ cliente.nombre }} - {{ cliente.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        clientes: []
      };
    },
    mounted() {
        axios
        .get('http://127.0.0.1:8000/api/clientes')
        .then(responde => (this.clientes = response.data.clientes))
    },
  };
  </script>
  