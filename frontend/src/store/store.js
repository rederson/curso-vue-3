import { createStore } from "vuex";
import counter from './counter';
import users from './users';



const store = createStore({
   modules:{
    counter,
    users
   }

});

export default store;