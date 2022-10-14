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
              <tr v-for="(niveau,i) in list_niveaux" :key="i">
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
            list_niveaux:[]
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
                this.list_niveaux=response.data.results
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