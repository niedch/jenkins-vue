<template>
    <div>
        <button class="btn btn-primary" @click="incrementWithPayload({ by: 100 })">Increment With Payload</button>
        <button class="btn btn-primary" @click="decrementWithPayload({ by: 50 })">Decrement With Payload</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
          ...mapMutations([
            'incrementWithPayload',
            'decrementWithPayload'
          ])
        }
    }
</script>