<script >
import { computed, ref } from "vue";
import { useMainStore } from "../stores/storePinia";
import ColorPicker from "../components/ColorPicker.vue";
export default {
  name: "App",
  setup() {
  const main = useMainStore();

    let categories = computed(() => main.categorieSee);
    const mycategorie = ref([]);
    const AddCategorie = () => {
      if (mycategorie.value != "") {
        main.categorieAdd(mycategorie.value);
        mycategorie.value = [];
      }
    };

    let prios = computed(() => main.prioSee);
    const myprio = ref([]);

    let todos = computed(() => main.todoSee);
    const mytodo = ref({
      title: "",
      text: "",
      categorie: "",
      date: "",
      done: false,
    });
    const AddTodo = () => {
      if (mytodo.value != "") {
        main.todoAdd(mytodo.value);
        mytodo.value = {};
        console.log(todos.value);
      }
    };
    return {
      prios,
      myprio,
      todos,
      mytodo,
      AddTodo,
      todoDelete: main.todoDelete,
      categories,
      mycategorie,
      AddCategorie,
      params: computed(()=>main.getParams)
    };
  },
  components:{
    ColorPicker
  },
  data() {
    return {
      timestamp :[],
      options : [
        {text:'Urgent', value:'1' },
        {text:'A faire', value:'2' },
        {text:'Pas urgent', value:'3' },
      ]
    };
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1 < 10
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        "-" +
        (today.getDate() < 10 ? "0" + today.getDate() : today.getDate());
      this.timestamp = date;
    },
    setCurentColor(color){
      this.color = color
      this.$emit("setColor", color);
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
};
</script>

<template>
  <div class="split left">
    <div class="centered">
    <h1>Création d'une tache</h1>
    <input type="title" v-model="mytodo.title" placeholder="Titre"/>
    <input type="text" v-model="mytodo.text" placeholder="Texte"/>
    <select  v-model="mytodo.categorie">
      <option hidden selected value="">Choisissez une categorie</option>
      <option v-for="(categorie, index) in categories" :key="index">
        {{ categorie }}
      </option>
    </select>
    <input type="text" v-model="mycategorie" placeholder="Créer nouvelle categorie"/>
    <button @click="AddCategorie">Ajouter une categorie</button>

    <input type="date" :min="timestamp" v-model="mytodo.date" />

    <select v-model="mytodo.prio">
      <option hidden selected value="">Choisissez une urgence</option>
      <option v-for="(option, index) in options" :key="index">
        {{ option.text }}
      </option>
    </select>
    <br />
    <button @click="AddTodo">Créer le Todo</button>
    </div>

    <div :style='`background-color: ${params.color}; `' class="split right">
        
      <div class="centered d-flex:center">
        
        <div class="centered">
          <h1>Choisis la couleur de la bordure</h1>
          <ColorPicker @setColor="setCurentColor" /> 
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.azer{
  border: #111 solid;
}
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  overflow-x: hidden;
}
.left {
  left: 0;
  background-color: #111;
}
.right {
  right: 0;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>