<template>
    <SearchInput :handleSearch="getSearchResult" />
    <ResultCard :close="result['4. close']" :symbol="smbl.toUpperCase()" :open="result['1. open']"
        :high="result['2. high']" :low="result['3. low']" />
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
import ResultCard from "../components/ResultCard.vue";
import axios from 'axios'
export default {
    name: "searchInput",
    components: { SearchInput, ResultCard },
    methods: {
        async getSearchResult(symbol, apiKey) {
            await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`).then(
                response => {
                    console.log(response)
                    this.result = response.data['Monthly Time Series']['2022-12-19']
                    this.smbl = response.data['Meta Data']['2. Symbol']

                },
            )

        }
    },
    data() {
        return {
            result: {},
            smbl: ''
        }

    }

}
</script>