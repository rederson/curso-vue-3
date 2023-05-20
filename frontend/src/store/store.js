import { createStore } from "vuex";

const store = createStore({
    state:{
        count: 0
    },
    mutations:{
        increment(state,payload){
            state.count+=payload;
        }
    },
    actions:{
        increment(state,payload){
            state.commit('increment');
        },
        teste(state,payload){
            console.log('teste');
        }
    },
    getters:{
        // funciona parecido com o computed
        getCounter(state){
            return 'Total count '+state.count;
        }
    }

});

export default store;