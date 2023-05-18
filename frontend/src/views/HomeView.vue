<template>
<CurrencyInput type="text" v-model="dolar" placeholder="Dolar" :options="{currency: 'USD'}" />
<hr>
<ul>
  <li>{{ dolarTodayValue }}</li>
    <li>{{ dolarToReaisValue }}</li>
</ul>
</template>

<script>
import format from '../services/format';
import http from '../services/http';
import CurrencyInput from '@/components/CurrencyInput.vue';
export default {
  components: {
    CurrencyInput
  },
  data() {
    return {
      dolar: 0,
      dolarToday:0,
      dolarToReais:0,
    }
  },

  async mounted(){
    try {
      const dolarToday = await this.getDolar();
      this.dolarToday =  dolarToday['high'];
    } catch (error) {
      console.log(error.response.data);
    }

  },


  methods:{
    async getDolar(type = 'USDBRL'){
      const {data} = await http.get('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const typeCurrency = type.split('-').join();
      return data[typeCurrency];
    }
  },

  computed:{
    dolarToReaisValue(){
      return `O valor em reais de ${format(this.dolar,'en-US','USD')} é de: ${format(this.dolarToReais,'pt-BR','BRL')} `;
    },

    dolarTodayValue(){
      return `O dolar hoje está em: ${format(this.dolarToday,'en-US','USD')}`;
      }
  },

  watch:{
    dolar(value){

      this.dolarToReais = value*this.dolarToday;
    }
  }

}

</script>

<style >

</style>
