<template>
    <b-card class="w-50" border-variant="primary" header="Result" header-bg-variant="primary"
        header-text-variant="white" align="center">
        <div class="d-flex justify-content-around align-items-center">

            <div class="d-flex flex-column">
                <h1>{{ close }}</h1>
                <p class="text-bold">{{ symbol }}</p>
            </div>

            <div class="d-flex flex-column">
                <p>Open:&nbsp;&nbsp;<span>{{ open }}</span> </p>
                <p>Close:&nbsp;&nbsp;<span>{{ close }}</span> </p>
                <p>High:&nbsp;&nbsp;<span>{{ high }}</span> </p>
                <p>Low:&nbsp;&nbsp;<span>{{ low }}</span> </p>
            </div>
        </div>
    </b-card>
</template>

<script>
export default {
    props: ['close', 'symbol', 'open', 'high', 'low']
}
</script>