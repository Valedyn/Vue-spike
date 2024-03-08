<script setup>
import {computed } from "vue"
const props = defineProps({
  mode: String
});


let mode = props.mode;
console.log(mode)
//do global variables exist? using that might be a better idea than this,,,
console.log(typeof mode)
if(typeof mode == "undefined"){
  let localStorageMode = localStorage.getItem("mode")
  console.log(localStorageMode)
  mode = localStorageMode == null ? "default" : localStorageMode
}else{
  localStorage.setItem("mode", mode)
}

console.log(mode)

let jsonObject;
let localStorageModeCSS = "./css/default.css";

fetch("./mode.json").then((response) => response.json()).then(data => {
  jsonObject = data

  for(let modeObject of jsonObject.modes){
    if(mode == modeObject.mode){
      localStorageModeCSS = modeObject.cssfile
      localStorage.setItem("modeCSS", localStorageModeCSS)

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = localStorageModeCSS;
      document.head.appendChild(link);
      break;
    }
  }
}
)

let blue = computed(() => mode == "blue")

</script>

<template>
    <main id="app">
      
        <div id="grid">
    
          <div id="left">
    
          </div>
    
          <div id="center">
            <p v-if="blue">Background is blue!</p>
            <p v-else>Background is not blue!</p>
          </div>
    
         <div id="right">
    
         </div>
         
        </div>
    
    </main>
    
    </template>
    
    <style>
    body {
        margin: 0;
        padding: 0;
        
    }
    </style>
    <style scoped>
    
    #grid{
      display: grid;
      grid-template-columns: 200px 1fr 200px;
      height: 100vh;
    }

    
    </style>
    