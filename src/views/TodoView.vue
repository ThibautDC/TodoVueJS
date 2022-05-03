<script setup>
import { computed, ref } from "vue";
import { useMainStore } from "../stores/storePinia";
const main = useMainStore();
let todos = computed(() => main.todoSee);
let categories = computed(() => main.categorieSee);
let search = ref("");
let prioo = ref("")
let params = computed(() => main.getParams)
let prios = computed(() => main.prioSee)

</script>
<template>
  <select v-model="search">
    <option hidden selected value class="center">Choisissez une categorie</option>
    <option v-for="(categorie, index) in categories" :key="index" v-bind:value="categorie">{{ categorie }}</option>
  </select>
  <select v-model="prioo">
    <option hidden selected value class="center">Choisissez une priorité</option>
    <option v-for="(prio, index) in prios" :key="index" v-bind:value="prio">{{ prio }}</option>
  </select>
  <button v-if="search" @click="search = ''">clear search</button>
  <button v-if="prioo" @click="prioo = ''">clear prio</button>
  <div v-if="search ==='' && prioo === ''">
    <div style="list-style-type:none" v-for="(todo, index) in todos" :key="index"
      :class="todo.done == true ? 'todo bg-success' : 'todo'" @click="todo.done = !todo.done"
      :style="`border: ${todo.color} solid;`">
      <h2>Titre : {{ todo.title }}</h2>
      <h3>Texte : {{ todo.text }}</h3>
      <h4>Categorie : {{ todo.categorie }}</h4>
      <h5>Date de fin : {{ todo.date }} </h5>
      <h6>Priorité : {{ todo.prio }} </h6>
    </div>
  </div>
  
  <div v-if="search" class="search">
    <h1>Categorie : {{ search }}</h1>
    <ul  v-for="(todo, index) in todos.filter(
        (todo) => todo.categorie === search)" :key="index" :class="todo.done == true ? 'todo bg-success' : 'todo'" @click="todo.done = !todo.done">
      <li>
        <h2>Titre : {{ todo.title }}</h2>
        <h3>Texte : {{ todo.text }}</h3>
        <h4>Date de fin : {{ todo.date }} </h4>
        <h5>Priorité : {{ todo.prio }} </h5>
      </li>
    </ul>
  </div>
  <div v-if="prioo" class="priori">
    <h1>Priorité : {{ prioo }}</h1>
    <ul v-for="(todo, index) in todos.filter(
      (todo) => todo.prio === prioo)" :key="index" :class="todo.done == true ? 'todo bg-success' : 'todo'" @click="todo.done = !todo.done">
      <li>
        <h2>Titre : {{ todo.title }}</h2>
        <h3>Texte : {{ todo.text }}</h3>
        <h4>Categorie : {{ todo.categorie }}</h4>
        <h5>Date de fin : {{ todo.date }} </h5>
      </li>
    </ul>
  </div>
</template>

<style>
.todo {
  cursor: pointer;
  margin-bottom: 20px;
  background-color: #272727;
}
.search{
  background-color:dimgray;
}
.priori{
  background-color:slategray;
}
</style>