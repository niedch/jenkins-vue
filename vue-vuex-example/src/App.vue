<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-another-counter></app-another-counter>
                <hr>
                <app-async-counter></app-async-counter>
                <hr>
                <app-counter-with-payload></app-counter-with-payload>
                <hr>
                <input type="text" v-model="valueFunctionInComputed">
                <p>{{ valueFunctionInComputed }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import AnotherCounter from './components/AnotherCounter.vue';
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AsyncCounter from './components/AsyncCounter.vue';
    import CounterWithPayload from './components/CounterWithPayload.vue';

    export default {
        computed: {
          /** here in the computed property the valueFunctionInComputed is only a getter
            valueFunctionInComputed() {
              return this.$store.getters.valueGetter;
            }
          */

          /** this is how you set up a getter and a setter for 2 way binding for vuex */
          valueFunctionInComputed: {
            get() {
              return this.$store.getters.valueGetter;
            },
            set(value) {
              this.$store.dispatch('updateValue', value);
            }
          }

        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
            appAsyncCounter: AsyncCounter,
            appCounterWithPayload: CounterWithPayload
        }
    }
</script>

