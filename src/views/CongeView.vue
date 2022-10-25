<template>
    <div>
        <h1>Bonjour conge</h1>
        <AjouterConge :propParent="conge"/>
    </div>
</template>

<script>
import AjouterConge from '@/components/AjouterConge.vue';
export default {
    data(){
        return {
            conge:"Variable dans conge"
        }
    },
    components:{
        AjouterConge
    }
}
</script>

<style>

</style>