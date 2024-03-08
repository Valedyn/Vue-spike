<script setup>
import { ref } from "vue"
import { addCSSToHeader } from "../../updateCSS"
import TimerView from "../TimerView.vue";
let birthdays = ref([])
fetch("birthdays.json").then((value) => value.json()).then(json => {
    for(let jsonElement of json.birthdays){
        birthdays.value.push(jsonElement)
    }
})
addCSSToHeader()
</script>

<template>
    <div id="main">

    <p v-for="(jsonElement, index) in birthdays">
        <TimerView :name="jsonElement.name" :birthday="jsonElement.date">
            
        </TimerView>
    </p>
    
    </div>
</template>