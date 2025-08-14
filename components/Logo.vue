<template>
  <img :class="['logoimg', sizeClass]" src="~/assets/images/0_Logicly_Logo.svg" alt="Logicly logo"/>
</template>

<script setup>
defineProps({
  sizeClass: {
    type: String,
    default: 'h-8'
  },
});
</script>

<style scoped>
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>