<template>
<div class="grid h-screen grid-cols-1 grid-rows-3 md:grid-cols-3">
    <div class="col-span-1 row-span-1 md:col-span-1 md:row-start-2 md:col-start-2 md:row-span-1">
    <img src="~/assets/images/logicly_splash_animation_800600.gif" class="object-contain w-full h-full" />
    </div>
    <div class="row-span-1 md:col-span-3 md:row-start-3">
    <div class="text-center">
        <h1 class="text-3xl md:text-5xl text-logiclytextgrey">Strategic Data is now called Logicly.</h1><span class="text-logiclytextgrey">This page will redirect to our new website. If it doesn't automatically redirect click
            <NuxtLink to="/whylogicly"><span class="text-logiclyorange">here</span></NuxtLink>
        </span>
    </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'splashpage',
    created() {
        setTimeout( () => this.$router.push({ path: '/'}), 10000);
    },
head() {
  return {
    title: "Strategic Data is now called Logicly · Logicly"
  };
},
};

</script>

<style>

</style>
