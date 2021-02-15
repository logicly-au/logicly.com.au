<template>
<nav style="padding:1rem" class="text-sm">
<!-- TODO Change this to class-based padding along with logo -->
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLink to="/whowehelp">who we help</NuxtLink>
    <NuxtLink to="/howwework">how we work</NuxtLink>
    <NuxtLink to="/projects">projects</NuxtLink>
    <NuxtLink to="/insights">insights</NuxtLink>
    <!-- TODO change link back to contact us -->
    <NuxtLink to="/sample">contact us</NuxtLink>
    
</nav>
</template>

<script>
export default {}
</script>

<style scoped>
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>