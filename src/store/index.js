import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            user:"Bonjour Store",
        }
    }
})

export default store