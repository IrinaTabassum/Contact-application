<template>
<div class="backfround-ing min-h-screen flex justify-center">
  <div class=" bg-fuchsia-600 opacity-60 p-12 rounded-xl font-semibold w-full">
    <h1 class="text-6xl text-center text-yellow-100">Welcome To Contact Saving Application</h1>
  </div>
</div>
</template>
<script>
export default {
  name: 'HeroComp',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.backfround-ing{
  background-image: url('../assets/home.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>