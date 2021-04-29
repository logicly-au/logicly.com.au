<template>
<div class="h-full"
:class="{ 'bg-logiclylightgrey': altrow , '!bg-logiclylightgrey': normal }"
>

  <div class="object-contain object-center w-full h-full bg-cover"
  :class="{ 'bg-black bg-opacity-50': overlay}"
  >
    <div class="container h-full mx-auto">
      <div class="grid h-full py-20 grid-cols-12 md:grid-cols-15 px-6 md:px-0">
        <div class="flex flex-col justify-center col-span-10 col-start-2 md:col-span-9 md:col-start-4">
            <slot></slot>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "PageSection",
  props: {
    altrow: Boolean,
    normal: Boolean,
    overlay: Boolean,
    nooverlay: Boolean,
    black: Boolean,
    noblack: Boolean,
  }
};
</script>

<style scoped>
</style>
