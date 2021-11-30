<template>
  <div v-if="show" class="flex">
    <div class="flex-auto">
      <h1 class="py-3 text-center rebrand-notification">Strategic Data is now called Logicly. <NuxtLink to="about/whylogicly">Find out why!</nuxtlink></h1>
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
.rebrand-notification a {
  color:#E6332A!important;
  font-weight: 400;
  text-decoration: none;
}

.rebrand-notification a:hover {
  text-decoration: underline;
}

.rebrand-notification a:visited {
  color:#A83914!important;
}
</style>
