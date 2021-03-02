i <template>
    <div class="w-full" 
    :class="{ 'bg-logiclylightgrey': altrow, 'bg-white': !altrow }"
    >
      <div class="container py-8 mx-auto">
        <div class="grid h-64 grid-rows-3 grid-cols-15">
          <div class="flex justify-center row-span-1 row-start-1 col-span-15">
            <img class="h-32" :src="iconurl" />
          </div>
          <div class="row-span-1 row-start-3 text-center col-span-15">
            <h1 class="text-xl font-bold">{{ heading }}</h1>
            <h2 class="text-md">{{ subheading }}</h2>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Hero",

  // This is how you define all the attributes passed to the component
  // backgroundUrl becomes background-url when used as html attribute
  props: {
    heading: String,
    subheading: String,
    iconurl: String,
    altrow: Boolean
  },
};
</script>

<style scoped>
</style>