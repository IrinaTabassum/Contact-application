<template>
<div class="container mx-auto">
  <div class="px-8">
    <h1 class="text-3xl font-semibold py-6 text-center">Contuct list</h1>
    <div class="py-4">
      <custom-input :isInput="true" v-model="searchValue" @keyup="getGlobalSearchData" inputType="text" inputClass="py-2" inputPlaceholder="Search by first name"></custom-input>
    </div>
    <div class="w-full">
    <div class="w-full overflow-x-auto">
      <table class="w-full">
        <thead class="text-white bg-fuchsia-600">
          <tr class="">
            <th class="p-3">Name</th>
            <th class="p-3">Email</th>
            <th class="p-3">Phone Number</th>
            <th class="p-3">Actions</th>
          </tr>
        </thead>
        <tbody class="">
          <tr v-for="(data , index) in contuctData" :key="index" class="">
            <td class="border-grey-light border hover:bg-gray-100 p-3">{{data.firstName}} {{data.lastName}}</td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{data.email}}</td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{{data.phoneNumber}}</td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
            <router-link class=" text-green-500 pr-6" :to="{ name: 'edit-contact', params: { id: data.id }}">Edit</router-link>
            <button @click="deleteContuct(data.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
        contuctData:[],
        searchName:[],
        searchValue:'',
        mobilDLen:0,
      }
    },
    methods:{
          getGlobalSearchData(){
            if(this.searchValue!==''){
              let namearr=[];
              let newArray=[];
              for(let i=0; i<this.contuctData.length; i++){
                  namearr = this.contuctData[i].firstName.toLowerCase();
                  if(namearr.search(this.searchValue.toLowerCase())>-1){
                    newArray.push(this.contuctData[i])
                  }
              }
              this.contuctData = newArray;
              
            } else {
                axios.get("https://wild-bush-3209.fly.dev/user").then((response) => {
                    this.contuctData=response.data;   
                })
            }
        },
        deleteContuct(id){
            axios.delete("https://wild-bush-3209.fly.dev/user/" + id).then(() => {
                this.contuctData = this.contuctData.filter(row=>row.id != id);
             })
        },
    },

    mounted(){
      axios.get("https://wild-bush-3209.fly.dev/user", ).then((response) => {
          // console.log(response);
          this.contuctData=response.data;
          this.mobilDLen = this.contuctData.length - 1;
      });
    },
  }
</script>
