<template>
  <div class="more">
    <h1>This is more page</h1>
    <button @click="skip('/')">go to home</button>
    <button @click="skip('/about')">go to about</button>
  </div>
</template>
<script>
export default {
  name: 'More',
  methods: {
    skip(path) {
      this.$router.push({path})
    }
  }
}
</script>
