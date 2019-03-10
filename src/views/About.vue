<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="skip('/')">go to home</button>
    <button @click="skip('/more')">go to more</button>
  </div>
</template>
<script>
export default {
  name: 'About',
  methods: {
    skip(path) {
      this.$router.push({path})
    }
  }
}
</script>

