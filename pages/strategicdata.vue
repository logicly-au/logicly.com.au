<template>
<div class="grid h-screen grid-cols-3 grid-rows-3">
    <div class="col-span-1 col-start-2 row-span-1 row-start-2">
    <img src="~/assets/images/sd_to_logicly.gif" class="object-cover w-full h-full" />
    </div>
    <div class="col-span-1 col-start-2 row-span-1 row-start-3">
    <h1 class="text-5xl">Strategic Data is now called Logicly.</h1> This page will redirect to our new website in [countdown]. If it doesn't automatically redirect click [here].
    </div>
</div>
</template>

<script>
export default {
    layout: 'splashpage',
    created() {
        setTimeout( () => this.$router.push({ path: '/'}), 5000);
    }
}
</script>

<style>

</style>
