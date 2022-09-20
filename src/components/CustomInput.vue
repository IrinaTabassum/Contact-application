<template>
<!------------------------------------------    input component ------------------------------------------------->
  <input v-if="isInput" 
  :class="inputClass" 
  :name="inputName" 
  :placeholder="inputPlaceholder"  
  :type="inputType" 
  class="w-full py-4 px-2 mt-2 border border-fuchsia-600 rounded-md focus:outline-none" 
  :value="modelValue"
  @input="(e)=>$emit('update:modelValue', e.target.value)"/>
</template>
<script>
export default {
    name:'customInput',
    props: {
      isInput: Boolean,
      inputClass :  [String, Array],
      inputPlaceholder: String,
      inputName: String,
      inputType: String,
      modelValue:String,
    },
 
  methods:{
    
  }
};
</script>