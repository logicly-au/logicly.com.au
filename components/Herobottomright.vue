i <template>
  <div class="object-contain object-center w-full bg-cover h-128":style="{ backgroundImage: `url(${backgroundUrl})` }">

    <div class="grid grid-rows-5 grid-cols-8 w-full h-full">
     <div class="row-start-4 row-span-2 col-start-5 col-span-4 md:col-start-5 md:col-span-3 2xl:col-start-5 2xl:col-span-2">
       <h1 class="text-white text-xl lg:text-2xl font-extrabold px-4 pt-4">{{ heading }}</h1>
     </div>
   </div>

 </div>
</div>

  </div>


</template>

<script>
  export default {
    name: "HeroBottomRight",
    props: {
      heading: String,
      backgroundUrl: String,
    },
  };
</script>

<style scoped>
  .h-128 {
    height:32rem;
  }

.bg-overlay {
    background-color: rgba(248, 247, 216, 0.7);
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
