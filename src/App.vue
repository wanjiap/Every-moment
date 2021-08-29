<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
#app,html,body{
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
a{
  color: black;
}
li{
  list-style: none;
}
</style>
