<template>
    <p>Please enter 3 letter currency pairs seperated by /, eg: USD/EUR</p>
    <SearchInput :handleSearch="getFxResult" />
    <ResultCard :close="result['4. close']" :symbol="pairs" :open="result['1. open']" :high="result['2. high']"
        :low="result['3. low']" />
</template>
<script>
import SearchInput from "../components/SearchInput.vue";
import ResultCard from "../components/ResultCard.vue";
import axios from 'axios'
export default {
    name: "searchInput",
    components: { SearchInput, ResultCard },
    methods: {
        async getFxResult(symbol, apiKey) {
            //cut symbol into 2 and replace symbol 1 and 2
            let pair1 = symbol.slice(0, 3).toUpperCase()
            let pair2 = symbol.slice(4, 7).toUpperCase()
            await axios.get(`https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${pair1}&to_symbol=${pair2}&apikey=${apiKey}`).then(

                response => {
                    console.log(response)
                    this.result = response.data['Time Series FX (Monthly)']['2022-12-19']
                    this.pairs = response.data['Meta Data']['2. From Symbol'] + '/' + response.data['Meta Data']['3. To Symbol']
                },
            )
        }
    },
    data() {
        return {
            result: {},
            pairs: ''
        }

    }
}
</script>