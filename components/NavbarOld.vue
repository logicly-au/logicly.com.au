<template>
  <nav style="padding:1rem;" class="text-sm">
  <!-- TODO Change this to class-based padding along with logo -->
      <NuxtLink to="/">home</NuxtLink>

  <div class="relative inline-block dropdown">
    <button class="inline-flex items-center px-1">
      <NuxtLink to="/aboutus">about us</NuxtLink>
     <!--  <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> -->
    </button>
    <ul class="absolute hidden pt-1 text-gray-700 dropdown-menu">
      <li class=""><NuxtLink to="/ourapproach" class="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" href="#">
      our approach
      </NuxtLink></li>
      <li class=""><NuxtLink to="/ourteam" class="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" href="#">
      our team
      </NuxtLink></li>
      <li class=""><NuxtLink to="/oursecurity" class="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" href="#">
      our security
      </NuxtLink></li>
      <li class=""><NuxtLink to="/ourculture" class="block px-4 py-2 whitespace-no-wrap bg-gray-200 hover:bg-gray-400" href="#">
      our culture
      </NuxtLink></li>

    </ul>
  </div>



      <NuxtLink to="/whowehelp" class="px-1">who we help</NuxtLink>
      <NuxtLink to="/whatwedo" class="px-1">what we do</NuxtLink>
      <NuxtLink to="/howwework" class="px-1">how we work</NuxtLink>
      <NuxtLink to="/projects" class="px-1">projects</NuxtLink>
      <NuxtLink to="/insights" class="px-1">insights</NuxtLink>
      <!-- TODO change link back to contact us -->
      <NuxtLink to="/contactus">contact us</NuxtLink>
  </nav>
</template>

<script>
// import dropdown from 'vue-dropdowns';
// export default {
//   data() {
//     return {
      
//       arrayOfObjects: [
//           {id: 1, name: 'about us'},
//           {id: 2, name: 'our approach'},
//           {id: 3, name: 'our team'},
//           {id: 3, name: 'our security'},
//           {id: 3, name: 'our culture'},
//         ],
//       object: {
//         name: 'About',
//       }
//     }
//   },

//   components: {
//       'dropdown': dropdown,
//   },

//   methods: {
//     methodToRunOnSelect(payload) {
//       this.object = payload;
//     }
//   }
// }
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}


.nuxt-link-exact-active {
    font-weight: bold;
}

.my-dropdown-toggle {
  border-radius: 5px;

  ::v-deep .dropdown-toggle {
    color: tomato;
    font-size: 25px;
    font-weight: 800;
  }

  ::v-deep .dropdown-toggle-placeholder {
    color: #c4c4c4;
  }
}
</style>