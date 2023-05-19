import {reactive, onMounted} from 'vue';
import http from '@/services/http';

export function useUsers(){

    const users = reactive({'users':[]})

    onMounted( async () => {
        console.log('onMounted no composable');
        users['users'] = await getUsers()
    })

    async function getUsers() {
        try {
            
            const {data} = await http.get('api/users');
            return data;

        } catch (error) {
            console.log(error.respose.data);
        }
    }

    return {users};

};