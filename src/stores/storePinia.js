import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    todos:[],
    categories:[
      "cat 1",
      "cat 2"
    ],
    param: {color: ''},
    prios:[
      "Urgent",
      "A faire",
      "Pas Urgent"
    ]
  }),
  getters: {
    todoSee(){
      return this.todos
    },
    categorieSee(){
      return this.categories
    },
    prioSee(){
      return this.prios
    },
    getParams(){
      return this.param
    }
  },
  actions: {
    todoAdd(todo){
      todo.color = this.param.color
      this.todos.push(todo)
    },
    changeColor(color){
      this.param.color = color
    },
    todoDelete(index){
      this.todos.splice(index, 1)
    },
    categorieAdd(categorie){
      this.categories.push(categorie)
    }
  }
})