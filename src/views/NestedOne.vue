<template>
  <div class="about">
    <h1>This is the Nested One page {{product}}</h1>
    <router-link :to="{ name: 'nested.dialog', params:{product} }" class="btn" >Open Dialog</router-link>
  </div>
</template>
<script>
export default {
      data() {
        return {
            product: 'Salam Necesen',
            }
            }
}
</script>>
