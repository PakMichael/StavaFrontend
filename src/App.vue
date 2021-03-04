<template>
  <div id="app">
    <Landing/>
  </div>
</template>

<script>
import Landing from './pages/landing'

export default {
  name: 'App',
  components: {
    Landing
  }
}
</script>

<style>
* {
    margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  scrollbar-width: thin;
}
</style>
