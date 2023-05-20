import {createStore} from 'vuex';

const store = createStore({
    
    state:{
        count: 0
    },
    actions:{
        increment(state, payload){
            state.commit('increment'); // abstrai da mutations
        }
    },
    mutations:{
        increment(state,payload){
            state.count+=payload;
        }
    },
    getters:{
        getCounter(state){
            return 'O total do count é '+state.count;
        }
    }


});

export default store;