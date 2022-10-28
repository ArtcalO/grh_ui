<template>
  <div>
    <form @submit.prevent>
        <label for="nom"></label>
        <input type="text" name="nom" id="" v-model="nom">

        <label for="poids"></label>
        <input type="text" name="poids" id="" v-model="poids">

        <button @click="ajouterNiveau">Ajouter</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
data(){
    return{
        nom:"",
        poids:""
    }
},
methods:{
    ajouterNiveau(){
        let data = {"nom":this.nom,"poid":this.poids}
        this.nom=""
        this.poids=""

        axios.post("http://127.0.0.1:8000/api/niveau/",data)
        .then((response)=>{
            this.$store.state.list_niveau.push(response.data)
            alert("Niveau ajoute avec success!")
        }).catch((erro)=>{
            console.log(erro)
        })
    }
}
}
</script>

<style>

</style>