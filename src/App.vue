<template>
  <Nav></Nav>
  <router-view/>
</template>

<script>
import Nav from './components/NavComponent.vue';

export default {
  components: { Nav },
  
}
</script>
