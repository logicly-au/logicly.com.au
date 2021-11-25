<template>
  <div class="w-full h-auto logicly-footer bg-logiclylightgrey text-logiclytextgrey">
    <div class="container mx-auto">
      <footer>
        <div class="grid grid-cols-12">
          <div class="grid grid-cols-12 col-span-10 col-start-2 gap-4 px-6 py-16 text-sm text-left lg:py-24 md:px-0 mobileres">
            <div class="col-span-12 mb-6 lg:col-span-4 lg:mb-0">
              <div class="mb-6 lg:mb-4">
                <NuxtLink to="/" class="self-start">
                  <logo />
                </NuxtLink>
              </div>
              <div>
                <a href="tel:0061393409000" class="block">+61 3 9340 9000</a>
                <a href="mailto:info@logicly.com.au">info@logicly.com.au</a>
                <span class="block">2nd floor, 51 – 55 Johnston Street,</span>
                <span class="block">Fitzroy, Victoria 3065, Australia</span>
                <span class="block">PO Box 1166, Carlton, Victoria 3053, Australia</span>
              </div>
            </div>
            <div class="grid grid-cols-3 col-span-12 text-sm lg:col-span-6 lg:col-start-6 xl:col-span-5 xl:col-start-7">
              <div class="col-span-3 mb-6 lg:col-span-1 lg:mb-0">
                <NuxtLink to="/" class="block hover:underline" exact>home</NuxtLink>
                <NuxtLink to="/whatwedo" class="block hover:underline" exact>what we do</NuxtLink>
                <NuxtLink to="/howwework" class="block hover:underline" exact>how we work</NuxtLink>
                <NuxtLink to="/projects" class="block hover:underline">projects</NuxtLink>
                <NuxtLink to="/insights" class="block hover:underline" exact>insights</NuxtLink>
                <NuxtLink to="/contactus" class="block hover:underline" exact>contact us</NuxtLink>
              </div>
              <!-- TODO Add links for 'Who we help' page sections -->
              <div class="col-span-3 mb-6 lg:col-span-1 lg:mb-0">
                <NuxtLink to="/whowehelp" class="block font-bold hover:underline" exact>who we help</NuxtLink>
                <a href="/whowehelp" class="block hover:underline" exact>researchers</a>
                <a href="/whowehelp" class="block hover:underline" exact>government</a>
                <a href="/whowehelp" class="block hover:underline" exact>non-government</a>
                <a href="/whowehelp" class="block hover:underline" exact>health</a>
                <a href="/whowehelp" class="block hover:underline" exact>corporate</a>
                <a href="/whowehelp" class="block hover:underline" exact>educational</a>
              </div>
              <div class="col-span-3 mb-6 lg:col-span-1 lg:mb-0">
                <NuxtLink to="/about/us" class="block font-bold hover:underline" exact>about</NuxtLink>
                <NuxtLink to="/about/ourapproach" class="block hover:underline" exact>our approach</NuxtLink>
                <NuxtLink to="/about/ourteam" class="block hover:underline" exact>our team</NuxtLink>
                <NuxtLink to="/about/oursecurity" class="block hover:underline" exact>our security</NuxtLink>
                <NuxtLink to="/about/ourculture" class="block hover:underline" exact>our culture</NuxtLink>
              </div>
            </div>

            <div class="grid grid-cols-12 col-span-12">
              <div class="col-span-12 text-sm lg:col-span-5 lg:mt-4">
                <span class="pr-2">Logicly © 2021</span>
                <NuxtLink to="/privacy" class="hover:underline" exact>Privacy policy</NuxtLink>
              </div>
              <div class="grid content-end grid-cols-3 col-span-12 lg:col-span-6 lg:col-start-6 xl:col-span-5 xl:col-start-7">
                <div class="grid grid-cols-3 col-span-1 mt-6 lg:col-start-3 lg:mt-0">
                  <div class="col-span-1"><img src="~/assets/images/Facebook.svg" class="h-5 lg:h-4"></img></div>
                  <div class="col-span-1"><a href="https://www.linkedin.com/company/logiclyaustralia/about/"><img src="~/assets/images/Linkedin.svg" class="h-5 lg:h-4"></img></a></div>
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
