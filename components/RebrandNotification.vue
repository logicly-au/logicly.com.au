<template>
  <div v-if="show">
    We rebrand
    <button @click="show = false">x</button>
  </div>
</template>

<script>
export default {
  name: "RebrandNotification",

  data() {
    return { show: true };
  },

  created() {
    const storageKey = 'stratdatrebrandseen';

    if (localStorage.getItem(storageKey)) {
      this.show = false;
    } else {
      localStorage.setItem(storageKey, true);
    }
  }
}
</script>

<style scoped>
</style>
