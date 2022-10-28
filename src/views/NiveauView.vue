<template>
    <div>
        <AjouterNiveau  v-if="modal_niveau"></AjouterNiveau>
        <button @click="ajouterNiveau">Ajouter Niveau</button>
      <h1>Liste de niveaux</h1>
      <table>
          <thead>
              <th>Nom</th>
              <th>Pods</th>
          </thead>
          <tbody>
              <tr v-for="(niveau,i) in $store.state.list_niveau" :key="i">
                  <td>{{niveau.nom}}</td>
                  <td>{{niveau.poid}}</td>
              </tr>
          </tbody>
      </table>
    </div>
  </template>
  
  <script>
import axios from "axios"
import AjouterNiveau from '@/components/AjouterNiveau.vue';
  export default {
    data(){
        return{
            modal_niveau:false,
        }
    },
    mounted(){
        this.fetchNiveau()
    },  
    methods:{
        ajouterNiveau(){
            this.modal_niveau=!this.modal_niveau
        },
        handlerNiveauEmited(e){
            this.list_niveaux.push(e)
            this.modal_niveau=false
        },
        fetchNiveau(){
            axios.get("http://127.0.0.1:8000/api/niveau/")
            .then((response)=>{
                this.$store.state.list_niveau=response.data.results
            }).catch((error)=>{
                console.log(error)
            })
        }
    }, 
    components: { AjouterNiveau }
}
  </script>
  
  <style>
  
  </style>