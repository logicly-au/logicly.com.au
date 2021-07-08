<template>
  <div v-if="show" class="flex">
    <!-- <h1>Why is Strategic Data now called Logicly? We do have <a href="/linkhere">a good reason</a></h1> -->
    <div class="flex-auto">
      <h1 class="py-3 text-center">Strategic Data is now called Logicly</h1>
    </div>
    <button class="flex-initial pr-3 text-xl text-logiclyorange" @click="show = false">&#10005;</button>
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
