<template>
  <div>
     <ColorPicker  @changePickerColorBen="setColor" :color="color"/> 
  </div> 
</template>


<script>
import { ColorPicker } from 'vue3-ts-picker'
import {defineComponent,ref} from 'vue'  
import { useMainStore } from "../stores/storePinia";

export default defineComponent({
  name: 'picker', 
  setup() {
      const color = ref("#ccc")
      const main = useMainStore();

      const setColor = (color) => {
        main.changeColor(color)
      }

      return {
          setColor,
          color
      }
    },
    // methods:{
    //     setColor(color){
    //         this.$emit("setColor", color);
    //     }
    // }
})
</script>

<style scoped>
</style>