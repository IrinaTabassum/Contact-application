<template>
<div class=" text-fuchsia-700 bg-fuchsia-100 shadow-lg">
  <div class="container mx-auto py-6">
   <nav class="flex flex-wrap px-4 md:px-8 items-center">
    <div class="sm:w-1/3 w-2/3 text-2xl font-semibold">
      <router-link v-if="creat" @click="creat=false" class="bg-fuchsia-600 p-4 rounded-full text-white text-lg " to="/newContact">Creat New Contuct</router-link>
      <router-link v-else @click="creat=true" class="bg-fuchsia-600 p-4 rounded-full text-white text-lg " to="/">Back To Home Page</router-link>
    </div>
    <div class="sm:block hidden sm:w-2/3 w-1/3 text-right text-xl font-semibold sm:space-x-4">
      <router-link class="" to="/" @click="creat=true">Home</router-link> 
      <router-link @click="creat=true" class="" :to="{name: 'contact-list'}">Contact List </router-link>
    </div>
  </nav>
  </div>
</div>
  
</template>

<script>
export default {
  name:"NaveComponent",
  data:()=>{
    return{
      creat : true,
    };
  },
}
</script>

