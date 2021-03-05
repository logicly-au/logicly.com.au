<template>
  <nav style="padding:1rem" class="text-sm">
  <!-- TODO Change this to class-based padding along with logo -->
      <NuxtLink to="/">home</NuxtLink>
<!--
      <dropdown class="my-dropdown-toggle"
          :options="arrayOfObjects" 
          :selected="object" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean">
      </dropdown>
-->
      <NuxtLink to="/aboutus">about us</NuxtLink>
      <NuxtLink to="/ourapproach">our approach</NuxtLink>
      <NuxtLink to="/ourteam">our team</NuxtLink>
      <NuxtLink to="/oursecurity">our security</NuxtLink>
      <NuxtLink to="/ourculture">our culture</NuxtLink>
      <NuxtLink to="/whowehelp">who we help</NuxtLink>
      <NuxtLink to="/whatwedo">what we do</NuxtLink>
      <NuxtLink to="/howwework">how we work</NuxtLink>
      <NuxtLink to="/projects">projects</NuxtLink>
      <NuxtLink to="/insights">insights</NuxtLink>
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