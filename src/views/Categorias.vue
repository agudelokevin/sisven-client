<template>
    <div>
      <h1>Consulta de Categorías</h1>
      <ul>
        <li v-for="categoria in categorias" :key="categoria.id">
          {{ categoria.nombre }}
        </li>
      </ul>
    </div>
  </template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categorias: []
    };
  },
  mounted() {
      axios
      .get('http://127.0.0.1:8000/categorias')
      .then(responde => (this.categorias = response.data.categorias))
  },
};
</script>