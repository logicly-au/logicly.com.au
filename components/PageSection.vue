<template>
<div
:class="{ 'bg-logiclylightgrey': alt , '!bg-logiclylightgrey': normal }"
>

  <div class="object-contain object-center w-full h-64 bg-cover">
    <div class="container mx-auto">
      <div class="grid h-64 grid-rows-3 grid-cols-15">
        <div class="row-start-2 text-center col-span-15">
          <div>
          
            <slot></slot>

          </div>
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
    alt: Boolean,
    normal: Boolean,
  }
};
</script>

<style scoped>
</style>
