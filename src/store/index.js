import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            user:"Bonjour Store",
            conge:"Bonjour conge store",
            list_niveau:[]
        }
    }
})

export default store