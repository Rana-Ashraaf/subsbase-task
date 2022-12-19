<template>
    <div class="mb-4">
        <b-form-group label="Enter symbol/currency pairs" label-for="text">
            <b-form-input v-model="symbol" id="text" type="text" placeholder="enter" required></b-form-input>
        </b-form-group>
        <b-button @click="handleSearch(symbol, apiKey)" variant="primary">Submit</b-button>

    </div>
</template>
<script>

const apiKey = 'Y5924EHNCBD6TQRJ'

export default {
    name: 'searchInput',
    props: {
        handleSearch: { type: Function },
    },

    data() {
        return {
            symbol: ''
        }
    },
}


</script>

