<template>
  <div class="container mx-auto">
    <div class="px-8">
      <h1 class="text-3xl font-semibold text-center w-2/3 p-4 mt-12 mx-auto">
        Creat Contact
      </h1>
      <div class="w-full flex justify-center">
      <form @submit.prevent="submit" class="space-y-4 w-1/2 py-8">
        <div class="w-full">
            <label class="py-4">Fast Name</label>
            <custom-input :isInput="true"  v-model="fastName"></custom-input>
        </div>
        <div>
            <label class="py-4">Last Name</label>
            <custom-input :isInput="true" v-model="lastName"></custom-input>
        </div>
        <div>
            <label class="py-4">Email</label>
            <custom-input :isInput="true" v-model="email"></custom-input>
        </div>
        <div>
            <label class="py-4">Phone Number</label>
            <custom-input :isInput="true" v-model="phoneNumber"></custom-input>
        </div>
        <button @click="submitData" class="bg-fuchsia-600 p-4 rounded-full text-white text-lg w-32">Save</button>
    </form>
      </div>
    </div>  
  </div>
</template>
<script>
import axios from 'axios';
import CustomInput from '../components/CustomInput.vue';
export default {
    components:{
        CustomInput
    },
    data:() =>{
      return {
        fastName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        
      }
    },
    methods:{
        submitData(){   
            axios.post("https://wild-bush-3209.fly.dev/user",{
                firstName:this.fastName,
                lastName:this.lastName,
                phoneNumber:this.phoneNumber,
                email:this.email
            },{headers:{
              "Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
              "Access-Control-Allow-Origin": "*"
            }});
            this.$router.push({ name: 'contact-list'});
        } 
    },
  }
</script>