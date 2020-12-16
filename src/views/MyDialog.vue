<template>
  <div class="dialog">
    <div class="dialog__inner">
      <h3>My Dialog</h3>
      <p>Content {{welcome}}</p>
      
      <br>
      <a class="btn" @click="close">Close</a>
    </div>
  </div>
</template>

<script>
export default {
   props:['product'],
  methods: {
    close () {
      this.$router.back()
    }
  },
   data() {
        return {
            welcome: 'This is your profile'
        }},
   mounted(){
        if (this.product) {
            this.welcome = this.product    
        }

    }
}
</script>

<style >
.dialog {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(#333, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

 
}
</style>
