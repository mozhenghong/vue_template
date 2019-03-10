<template>
  <div class="home">
    <h1> this is home page</h1>
    <button @click="skip('about')">go to next</button>
    <button @click="skip('more')">go to more</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    console.log("this", this);
  },
  methods: {
    skip(path) {
      this.$router.push({ path: `/${path}`});
    }
  }
};
</script>
