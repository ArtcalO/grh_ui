<template>
  <div>
    <NiveauView></NiveauView>
  </div>
</template>

<script>
import NiveauView from './views/NiveauView.vue';

export default {
    components: { NiveauView },
    mounted(){
      console.log(this.$store.state.user)
    }
}
</script>

<style>

</style>