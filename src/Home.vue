<template>
<div>
    <o-carousel>
        <o-carousel-item>
            <router-link :to="{path: '/about'}">To about</router-link>
        </o-carousel-item>
        <o-carousel-item>
            <router-link :to="{path: '/about'}">Also to about</router-link>
        </o-carousel-item>
    </o-carousel>
</div>
</template>

<script>
import Card from './Card.vue'

export default {
    components: {
        Card,
    },
    methods: {
        hello() {
            console.log('hi')
        }
    }
}
</script>
