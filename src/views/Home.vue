<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png"
      style="height: 200px"
    />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
