<template>
  <div>
    <input
      type="text"
      v-model="recherche"
      v-on:keyup="$emit('change', $event.target.value)"
    />
    <p>Recherche effectuée :{{ recherche }}</p>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: String,
  },
  data() {
    return {
      recherche: "",
    };
  },
};
</script>