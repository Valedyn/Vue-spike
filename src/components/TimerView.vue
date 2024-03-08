<script setup>
import {computed, watch, ref} from "vue"

const props = defineProps({
    name: String,
    birthday: String
});

let birthDate = new Date(props.birthday)
let birthDateCurrentYear = birthDate

let todayDate = new Date()

birthDateCurrentYear.setUTCFullYear(todayDate.getUTCFullYear())
let todayBirthday = false;
// check if the birthdate was before today
if(birthDateCurrentYear.getMonth() < todayDate.getMonth()){
   
    birthDateCurrentYear.setUTCFullYear((todayDate.getUTCFullYear().valueOf()+1)) 
}else if(birthDateCurrentYear.getMonth() == todayDate.getMonth()){
    if(birthDateCurrentYear.getDay() < todayDate.getDay){
        birthDateCurrentYear.setUTCFullYear((todayDate.getUTCFullYear().valueOf()+1))
    }else if(birthDateCurrentYear.getDay() == todayDate.getDay()){
        todayBirthday = true;
    }
}
//console.log("wa: " + (todayDate.getUTCFullYear().valueOf()+1))
//console.log(birthDateCurrentYear)
let millisecondsUntilBirthday = birthDateCurrentYear - todayDate
let daysUntilBirthday = Math.round(millisecondsUntilBirthday/ (1000*60*60*24))
//console.log(secondsUntilBirthday)
let timer = ref(daysUntilBirthday)
// if the day changes, the website is updated.
watch(timer, async (newTime, oldTime) => {
   if(newTime < 0){
       todayBirthday = true;
   }else{
        setTimeout(() => {
            timer.value--;
        }, 1000)
   }
})

</script>

<template>
    <div id="main">
        <h2>{{props.name}}</h2>
        <p v-if="todayBirthday">Today is {{props.name}}'s birthday!</p>
        <p v-else>Days left: {{ timer }}!</p>
        <p>Their birthday is on {{ new Date(props.birthday).toLocaleDateString() }}!</p>

    </div>

</template>

<style scoped>

</style>