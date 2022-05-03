import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ColorPicker } from 'vue3-ts-picker'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "vue3-ts-picker/dist/vue3-ts-picker.css"

const app = createApp(App)

app.component('ColorPicker', ColorPicker)
app.use(createPinia())
app.use(router)

app.mount('#app')

