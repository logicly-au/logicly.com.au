<template>
  <div class="w-full h-auto logicly-footer bg-logiclylightgrey text-logiclytextgrey">
    <div class="container mx-auto">
      <footer>
        <div class="grid grid-cols-12">
          <div class="grid grid-cols-12 col-span-10 col-start-2 gap-4 px-6 py-16 text-sm text-left lg:py-24 md:px-0 mobileres">
            <div class="col-span-12 grid grid-cols-6 mb-2 lg:mb-5">
              <div class="col-span-6 mx-0 text-logiclytextgrey">
                <p class="text-md font-medium">
                  Logicly acknowledges the Traditional Owners of Country throughout Australia. <br>We pay our respects to Elders, past and present.
                </p>
              </div>
            </div>
            <div class="col-span-12 mb-6 lg:col-span-4 lg:mb-0">
              <div class="mb-6 lg:mb-4 flex items-end space-x-8">
                <NuxtLink to="/" class="">
                  <logo sizeClass="h-10 p-0" />
                </NuxtLink>                
              </div>
              <div>
                <a href="tel:0061393409000" class="block">+61 3 9340 9000</a>
                <a href="mailto:info@logicly.com.au">info@logicly.com.au</a>
                <span class="block">2nd floor, 51 – 55 Johnston Street,</span>
                <span class="block">Fitzroy, Victoria 3065, Australia</span>
                <span class="block">PO Box 1166, Carlton, Victoria 3053, Australia</span>
                <div class="mt-2">
                  <a href="https://www.linkedin.com/company/logiclyaustralia/about/">
                    <img src="~/assets/images/Linkedin.svg" class="h-5 lg:h-4" alt="Linkedin logo">
                  </a>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-3 col-span-12 text-sm lg:col-span-6 lg:col-start-6 xl:col-span-5 xl:col-start-7 lg:mt-4">
              <div class="col-span-3 mb-6 lg:col-span-1 lg:mb-0">
                <NuxtLink to="/" class="block hover:underline" exact>home</NuxtLink>
                <NuxtLink to="/whatwedo" class="block hover:underline" exact>what we do</NuxtLink>
                <NuxtLink to="/howwework" class="block hover:underline" exact>how we work</NuxtLink>
                <NuxtLink to="/projects" class="block hover:underline">projects</NuxtLink>
                <NuxtLink to="/insights" class="block hover:underline" exact>insights</NuxtLink>
                <NuxtLink to="/contactus" class="block hover:underline" exact>contact us</NuxtLink>
              </div>
              <div class="col-span-3 mb-6 lg:col-span-1 lg:mb-0">
                <NuxtLink to="/whowehelp" class="block font-bold hover:underline" exact>who we help</NuxtLink>
                <NuxtLink to="/whowehelp#researchers" class="block hover:underline" exact>researchers</NuxtLink>
                <NuxtLink to="/whowehelp#government" class="block hover:underline" exact>government</NuxtLink>
                <NuxtLink to="/whowehelp#non-government" class="block hover:underline" exact>non-government</NuxtLink>
                <NuxtLink to="/whowehelp#health" class="block hover:underline" exact>health</NuxtLink>
                <NuxtLink to="/whowehelp#corporate" class="block hover:underline" exact>corporate</NuxtLink>
                <NuxtLink to="/whowehelp#education" class="block hover:underline" exact>educational</NuxtLink>
              </div>
              <div class="col-span-3 mb-6 lg:col-span-1 lg:mb-0">
                <NuxtLink to="/about/us" class="block font-bold hover:underline" exact>about</NuxtLink>
                <NuxtLink to="/about/ourapproach" class="block hover:underline" exact>our approach</NuxtLink>
                <NuxtLink to="/about/ourteam" class="block hover:underline" exact>our team</NuxtLink>
                <NuxtLink to="/about/oursecurity" class="block hover:underline" exact>our security</NuxtLink>
                <NuxtLink to="/about/ourculture" class="block hover:underline" exact>our culture</NuxtLink>
              </div>
            </div>

            <div class="col-span-12 flex flex-col sm:flex-row justify-between items-start sm:items-end">
              <div class="text-sm">
                <span class="pr-2">Logicly © {{ copyrightYear }}</span>
                <NuxtLink to="/privacy" class="hover:underline pr-2" exact>Privacy policy</NuxtLink>
                <a href="/accessibility" class="hover:underline">Accessibility</a>
              </div>
              <a href="https://bcorporation.com.au/">
                <img src="~/assets/images/B-Corp-Logo-Black-RGB.png" class="h-[72px] w-auto mt-6 sm:mt-0" alt="Certified B Corporation logo">
              </a>
            </div>            
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      copyrightYear() {
        return new Date().getFullYear();
      }
    },

    mounted() {
      this.$el.querySelectorAll('a[href*="#"]').forEach(link => {
        link.addEventListener('click', e => {
          const href = link.getAttribute('href');
          if (!href) return;

          const url = new URL(href, window.location.origin);
          const id = url.hash.slice(1);
          if (!id) return;

          const path = url.pathname.replace(/\/$/, '') || '/';
          const current = window.location.pathname.replace(/\/$/, '') || '/';
          const isWhoWeHelp = path.includes('whowehelp');

          if (!isWhoWeHelp) return;

          if (path === current) {
            e.preventDefault();
            history.pushState(null, '', `#${id}`);
            window.dispatchEvent(new CustomEvent('openAccordion', { detail: { id } }));
          } else {
            sessionStorage.setItem('openAccordionId', id);
            if (this.$router) {
              e.preventDefault();
              this.$router.push({ path, hash: `#${id}` }).catch(() => (window.location.href = href));
            }
          }
        });
      });
    }
  };
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
