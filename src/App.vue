<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'nested.one' }">Nested One</router-link> |
      <router-link :to="{ name: 'nested.two' }">Nested Two (with children)</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
   
    font-weight: bold;
    color: #2c3e50;
    
  
}
.btn {
  border: none;
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  cursor: pointer;
 
}
</style>