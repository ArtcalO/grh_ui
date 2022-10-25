<template>
  <div>
    <router-view v-if="connected"/>
    <button v-if="!connected" @click="login">Veuillez vous connecter</button>
  </div>
</template>

<script>

export default {
  data(){
    return{
      connected:false
    }
  },
  watch:{
    "connected":{
      deep:true,
      handler(new_val){
        if(new_val)
          localStorage.setItem("connected",JSON.stringify(new_val))
        else
          localStorage.removeItem("connected")
      }
    }
  },
  methods:{
    login(){
      this.connected=true
      alert("Connected")
    }
  },
  beforeMount(){
    console.log(this.connected)
  },
  mounted(){
    this.connected = JSON.parse(localStorage.getItem("connected"))
  }
}
</script>

<style>

</style>