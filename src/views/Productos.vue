<template>
    <div>
      <h1>Consulta de Productos</h1>
      <ul>
        <li v-for="producto in productos" :key="producto.id">
          {{ producto.nombre }} - {{ producto.precio }}
        </li>
      </ul>
    </div>
  </template>

<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        productos: []
      };
    },
    mounted() {
        axios
        .get('http://127.0.0.1:8000/api/clientes')
        .then(responde => (this.productos = response.data.productos))
    },
  };
  </script>