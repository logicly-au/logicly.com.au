<template>
    <div class="w-full bg-logiclylightgrey">
        <div class="container mx-auto">
            <div class="grid h-full grid-cols-4 grid-rows-3">
                <div class="grid self-center col-span-2 col-start-2 row-start-2">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PageSection"
};
</script>

<style scoped>
</style>
