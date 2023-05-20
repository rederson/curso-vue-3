import { createStore } from 'vuex';
import counter from "@/store/counter";
import users from "@/store/users";

const store = createStore({

    modules: {
        counter,
        users
    }

});

export default store;