import { createStore } from "vuex";

const store = createStore({
    state:{
        count: 0
    },
    mutations:{
        increment(state,payload){
            state.count++;
        }
    },
    actions:{
        increment(state,payload){
            state.commit('increment');
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