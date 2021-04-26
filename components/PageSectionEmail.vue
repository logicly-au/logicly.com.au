<template>
<div class="h-full bg-logiclybeige"
>

  <div class="object-contain object-center w-full h-full bg-cover"
  :class="{ 'bg-black bg-opacity-50': overlay}"
  >
    <div class="container h-full mx-auto">
      <div class="grid h-full py-20 grid-cols-15">
        <div class="flex flex-col justify-center col-span-12 col-start-2">
          
                <slot></slot>
              
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "PageSectionEmail",
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
