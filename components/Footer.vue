<template>
  <div class="w-full h-auto logicly-footer bg-logiclylightgrey text-logiclytextgrey">
    <div class="container mx-auto">
      <footer>
        <div class="grid grid-cols-12">
          <div class="grid grid-cols-12 col-span-10 col-start-2 gap-4 text-sm text-left py-16 lg:py-24 px-6 md:px-0 mobileres">
            <div class="col-span-12 lg:col-span-4 mb-6 lg:mb-0">
              <div class="mb-6 lg:mb-4">
                <NuxtLink to="/" class="self-start">
                  <logo />
                </NuxtLink>
              </div>
              <div>
                <a href="tel:0061393409000" class="block">+61 3 9340 9000</a>
                <a href="mailto:info@strategicdata.com.au">info@strategicdata.com.au</a>
                <span class="block">2nd floor, 51 – 55 Johnston Street,</span>
                <span class="block">Fitzroy, Victoria 3065, Australia</span>
                <span class="block">PO Box 1166, Carlton, Victoria 3053, Australia</span>
              </div>
            </div>
            <div class="grid grid-cols-3 col-span-12 lg:col-span-6 lg:col-start-6 xl:col-span-5 xl:col-start-7 text-sm">
              <div class="col-span-3 lg:col-span-1 mb-6 lg:mb-0">
                <NuxtLink to="/" class="block" exact>Home</NuxtLink>
                <a href="/whowehelp" class="block" exact>Who we help</a>
                <NuxtLink to="/whatwedo" class="block" exact>What we do</NuxtLink>
                <NuxtLink to="/howwework" class="block" exact>How we work</NuxtLink>
                <NuxtLink to="/projects" class="block">Projects</NuxtLink>
                <NuxtLink to="/insights" class="block" exact>Insights</NuxtLink>
                <NuxtLink to="/contactus" class="block" exact>Contact us</NuxtLink>
              </div>
              <!-- TODO Add links for 'Who we help' page sections -->
              <div class="col-span-3 lg:col-span-1 mb-6 lg:mb-0">
                <NuxtLink to="/whowehelp" class="block font-bold" exact>Who we help</NuxtLink>
                <a href="/whowehelp" class="block" exact>Researchers</a>
                <a href="/whowehelp" class="block" exact>Government</a>
                <a href="/whowehelp" class="block" exact>Non-government</a>
                <a href="/whowehelp" class="block" exact>Health</a>
                <a href="/whowehelp" class="block" exact>Corporate</a>
                <a href="/whowehelp" class="block" exact>Educational</a>
              </div>
              <div class="col-span-3 lg:col-span-1 mb-6 lg:mb-0">
                <NuxtLink to="/aboutus" class="block font-bold" exact>About</NuxtLink>
                <NuxtLink to="/ourapproach" class="block" exact>Our approach</NuxtLink>
                <NuxtLink to="/ourteam" class="block" exact>Our team</NuxtLink>
                <NuxtLink to="/oursecurity" class="block" exact>Our security</NuxtLink>
                <NuxtLink to="/ourculture" class="block" exact>Our culture</NuxtLink>
              </div>
            </div>

            <div class="col-span-12 grid grid-cols-12">
              <div class="col-span-12 lg:col-span-5 text-sm lg:mt-4">
                <span class="pr-2">Logicly © 2021</span>
                <NuxtLink to="/privacy" exact>Privacy Policy</NuxtLink>
              </div>
              <div class="col-span-12 lg:col-span-6 lg:col-start-6 xl:col-span-5 xl:col-start-7 grid grid-cols-3 content-end hidden">
                <div class="col-span-1 lg:col-start-3 grid grid-cols-3 mt-6 lg:mt-0">
                  <div class="col-span-1"><img src="~/assets/images/Facebook.svg" class="h-5 lg:h-4"></img></div>
                  <div class="col-span-1"><img src="~/assets/images/Linkedin.svg" class="h-5 lg:h-4"></img></div>
                  <div class="col-span-1"><img src="~/assets/images/Twitter.svg" class="h-5 lg:h-4"></img></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.nuxt-link-active {
  color: #E94E1B;
  font-weight: bold;
}

@media only screen and (max-width: 500px) {
  .mobileres {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

</style>
