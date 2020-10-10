<template>
    <div>
<v-color-picker
  dot-size="25"
  swatches-max-height="200"
></v-color-picker>    
  <v-time-picker
  format="ampm"
></v-time-picker>
<v-date-picker v-model="picker">        
    </v-date-picker>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>