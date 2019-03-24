<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as types from '../store/types';

  export default {
    computed: {
      ...mapGetters([
        'stringCounter'
      ]),
      /** since we use the key-value pairs to map the function we have to use an object here */
      ...mapGetters({
        'doubleCounter': types.doubleCounter
      })
    }
  }
</script>
