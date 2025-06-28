<template>
  <header>
    <div class="wrap">
      <div id="hamburger" v-on:click="display_menu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NuxtLink to="/" class="self-start"><logo /></NuxtLink>
      <nav id="menu">
        <li><NuxtLink to="/" exact v-on:click.native="display_menu(true);close_all_menu()" class="hover:underline">home</NuxtLink></li>
        <li class="drop">
          <a v-on:click="display_drop_menu($event)" class="cursor-pointer" :class="{ 'nuxt-link-exact-active': aboutActive }">
            about
          </a>
          <i class="cursor-pointer chevron-down" @click="display_drop_menu()"></i>
          <ul class="drop_menu">
            <NuxtLink to="/about/us" class="hover:underline" v-on:click.native="display_menu(true);close_all_menu()">about us</NuxtLink>
            <NuxtLink to="/about/ourapproach" class="hover:underline" v-on:click.native="display_menu(true);close_all_menu()">our approach</NuxtLink>
            <NuxtLink to="/about/ourteam" class="hover:underline" v-on:click.native="display_menu(true);close_all_menu()">our team</NuxtLink>
            <NuxtLink to="/about/oursecurity" class="hover:underline" v-on:click.native="display_menu(true);close_all_menu()">our security</NuxtLink>
            <NuxtLink to="/about/ourculture" class="hover:underline" v-on:click.native="display_menu(true);close_all_menu()">our culture</NuxtLink>
            <NuxtLink to="/about/whylogicly" class="hover:underline" v-on:click.native="display_menu(true);close_all_menu()">why logicly</NuxtLink>
          </ul>
        </li>
        <li class="drop">
          <a v-on:click="display_drop_menu($event)" class="cursor-pointer" :class="{ 'nuxt-link-exact-active': whowehelpActive }">
            who we help
          </a>
          <i class="cursor-pointer chevron-down" @click="display_drop_menu($event)"></i>
          <ul class="drop_menu">
            <NuxtLink to="/whowehelp" class="hover:underline" v-on:click.native="display_menu(true);close_all_menu()">who we help</NuxtLink>
            <NuxtLink to="/research" class="hover:underline" v-on:click.native="display_menu(true);close_all_menu()">researchers</NuxtLink>
          </ul>
        </li>
        <li><NuxtLink to="/whatwedo" v-on:click.native="display_menu(true);close_all_menu()" class="hover:underline">what we do</NuxtLink></li>
        <li><NuxtLink to="/howwework" v-on:click.native="display_menu(true);close_all_menu()" class="hover:underline">how we work</NuxtLink></li>
        <li><NuxtLink to="/projects" v-on:click.native="display_menu(true);close_all_menu()" class="hover:underline" :class="{ 'nuxt-link-exact-active' : $route.path.startsWith('/projects') }">projects</NuxtLink></li>
        <li><NuxtLink to="/insights" v-on:click.native="display_menu(true);close_all_menu()" class="hover:underline">insights</NuxtLink></li>
        <li><NuxtLink to="/contactus" v-on:click.native="display_menu(true);close_all_menu()" class="hover:underline">contact us</NuxtLink></li>
      </nav>
    </div>
  </header>
</template>

<script>
var last_scroll = 0;

export default {
  data() {
    return {
      load: false,
      last_scroll: 0,
    };
  },
  computed: {
    aboutActive() {
      return this.$route.path.startsWith('/about/');
    },
    whowehelpActive() {
      return this.$route.path.startsWith('/whowehelp') || this.$route.path.startsWith('/research');
    },
  },
  created() {
    let vm = this;

    window.onscroll = function() {
      if(!document.getElementById("loader")){
        vm.close_all_menu();
        var header = document.getElementsByTagName("header")[0];
        if(Math.abs(vm.last_scroll - this.scrollY) <= 5) return;

        // If small keep the top menu sticky.
        if (window.innerWidth < 1024) {
          header.style.top = "0";
        } else {
          (this.scrollY < vm.last_scroll) ? header.style.top = "0" : header.style.top = "-" + header.clientHeight + "px" ;
        }

        vm.last_scroll = this.scrollY;
      }
    }

    window.addEventListener("resize", function(event) {
      vm.close_all_menu();
      document.getElementsByTagName("body")[0].classList.remove("display_menu");
    });
  },
  methods: {
    close_all_menu() {
      const lis = document.getElementById("menu").getElementsByTagName("li");
      Array.from(lis).forEach((e) => {
        e.style.marginTop = 0;
      });

      const dropMenus = document.getElementsByClassName("drop_menu");
      Array.from(dropMenus).forEach((e) => {
        e.classList.remove("display");
      });

      const chevrons = document.querySelectorAll(".chevron-down");
      Array.from(chevrons).forEach((icon) => {
        icon.classList.remove("rotateme"); // Ensure chevrons reset to down
      });
    },
    display_menu(delay) {
      var body = document.getElementsByTagName("body")[0];
      const fn = () => (!body.classList.contains("display_menu")) ? body.classList.add("display_menu") : body.classList.remove("display_menu");

      /*
        This just adds a slight delay, so your selection can be seen before the menu closes.
        If no args are passed to this function, happens instantly instead.
      */
      delay == true ? setTimeout(fn, 200) : fn();
    },
    display_drop_menu(event) {
      if (!event || !event.currentTarget) {
        console.error("Event or event.currentTarget is undefined.");
        return;
      }

      // Identify the parent <li> element
      const currentDrop = event.currentTarget.closest("li");
      if (!currentDrop) {
        console.error("Unable to find the parent <li> for the clicked dropdown.");
        return;
      }

      // Get the dropdown menu and chevron inside the current <li>
      const dropMenu = currentDrop.querySelector(".drop_menu");
      const chevron = currentDrop.querySelector(".chevron-down");

      // Close other dropdowns
      document.querySelectorAll(".drop_menu").forEach((menu) => {
        if (menu !== dropMenu) menu.classList.remove("display");
      });
      document.querySelectorAll(".chevron-down").forEach((icon) => {
        if (icon !== chevron) icon.classList.remove("rotateme");
      });

      // Toggle the current dropdown
      if (dropMenu) {
        const isOpen = dropMenu.classList.toggle("display");
        if (chevron) {
          chevron.classList.toggle("rotateme", isOpen); // Add `rotateme` only if open
        }
      }

      // Adjust margin for mobile view
      if (window.innerWidth < 1024) {
        document.querySelectorAll(".drop_menu.display").forEach((menu) => {
          const parentLi = menu.closest("li");
          const nextLi = parentLi.nextElementSibling;
          if (nextLi) nextLi.style.marginTop = `${menu.clientHeight}px`;
        });
        if (!dropMenu.classList.contains("display") && currentDrop.nextElementSibling) {
          currentDrop.nextElementSibling.style.marginTop = "0";
        }
      }
    },
    loaded(){
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      (this.load) ? this.load = false : this.load = true;
    }
  }
};


</script>

<style scoped>

header {
  /* This is to fix the transparent overlay overlapping the header on scroll */
  z-index: 1000!important;
}

/* Previosly used for mobile dropdown but exchangedfor chevron-down*/
.icon-plus {
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M12 6v6m0 0v6m0-6h6m-6 0H6' /></svg>");
}

.chevron-down {
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='0' d='M19 9l-7 7-7-7' /></svg>");
}

.rotateme {
transform: rotate(-180deg);
}

i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
/*   font-size: 14px; */
/*   font-family: "Roboto", sans-serif; */
}

* {
  box-sizing: border-box;
}

body {
  background-color: #41B883;
  padding-top: 113px;
  overflow-x: hidden;
}
body.display_menu {
  overflow-y: hidden;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

.wrap {
  max-width: 1024px;
  min-width: 320px;
}

header {
  display: flex;
  z-index: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #ffffff;
  position: sticky;
  width: 100%;
  top: 0;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.33s;
}

header .wrap {
  padding: 0 2%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header img {
  width: 150px;
}

header #menu {
  display: flex;
  flex-direction: row;
  font-size: 0.85rem;
}

header #menu li {
  position: relative;
  user-select: none;
  margin-left: 20px;
  font-weight: 300;
}
header #menu li i {
  width: 30px;
  height: 30px;
  background-color: #3E3A37;
}

/*
header #menu li a {
  color: #3E3A37;
  cursor: pointer;
  font-size: 1.15em;
  border: none;
  border-bottom: 2px solid #ffffff;
  transition: 0.15s;
  background: none;
}
*/

header #menu li a:hover {
  border-bottom-color: none;
}

header .drop_menu {
  border-bottom:none!important;
  position: absolute;
  display: block;
  top: 149%;
  transform: scaleY(0);
  width: auto;
  transform-origin: top;
  background-color: #F6F5F1;
  font-size: 0.9rem;
  transition: 0.25s;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 5
}

header .drop_menu a {
  margin-left: 20px;
  display: block;
  transition: 0.45s;
  opacity: 0;
  margin-right: 20px;
  padding: 10px 0 0 0;
}

header .drop_menu.display {
  transform: scaleY(1);
}
header .drop_menu.display a {
  opacity: 1;
}

header #hamburger {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 5%;
  top: 40px;
  display: none;
  transform: translateY(-50%);
}

header #hamburger span {
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #3E3A37;
  display: block;
  transition: 0.33s;
}
header #hamburger span:nth-child(1) {
  width: 24px;
}
header #hamburger span:nth-child(2) {
  width: 24px;
}
header #hamburger span:nth-child(3) {
  width: 24px;
}

.display_menu header #hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.display_menu header #hamburger span:nth-child(2) {
  transform: rotate(-45deg);
}
.display_menu header #hamburger span:nth-child(3) {
  transform: rotate(45deg) translate(-3px, -5px);
}

#background {
  content: "";
  display: block;
  width: 100vw;
  height: 200vh;
  padding: 5%;
  background-color: #41B883;
}
#background h3 {
  margin: 0;
  margin-bottom: 1%;
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
}
#background h3 i {
  width: 13px;
  height: 20px;
  background-color: #ffffff;
}
#background button {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1.3em;
  border: none;
  background-color: #435466;
  color: #ffffff;
}

#loader {
  display: block;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  margin-left: -25px;
  margin-top: -25px;
  animation: adjust-hue 1s infinite linear;
}
#loader span {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  border-width: 0px 0px 10px 10px;
  border-style: solid;
  border-color: transparent;
}
#loader span:nth-child(0) {
  border-left-color: #41B883;
}
#loader span:nth-child(1) {
  transform: rotate(-40deg);
  border-left-color: #41B883;
}
#loader span:nth-child(2) {
  transform: rotate(-80deg);
  border-left-color: #41B883;
}
#loader span:nth-child(3) {
  transform: rotate(-130deg);
  border-left-color: #435466;
}
#loader span:nth-child(4) {
  transform: rotate(-170deg);
  border-left-color: #435466;
}
#loader span:nth-child(5) {
  transform: rotate(-210deg);
  border-left-color: #435466;
}
#loader span:nth-child(6) {
  transform: rotate(-250deg);
  border-left-color: #3E3A37;
}
#loader span:nth-child(7) {
  transform: rotate(-280deg);
  border-left-color: #3E3A37;
}
#loader span:nth-child(8) {
  transform: rotate(-320deg);
  border-left-color: #3E3A37;
}
#loader span:nth-child(9) {
  transform: rotate(-360deg);
  border-left-color: #41B883;
}

@keyframes adjust-hue {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

#overlay {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #3E3A37;
  opacity: 0.5;
}

@media screen and (max-width: 1024px) {
  body {
    padding-top: 70px;
  }

  header {
    padding-bottom: 0px;
  }

  header .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }

  header img {
    width: 170px;
    padding-left: 30px;
  }

  header #hamburger {
    display: block;
  }

  header #menu {
    width: 100%;
    height: 0;
    display: block;
    background-color: #F6F5F1;
    color: #3c3c3b;
    transform-origin: 50% 0;
    transition: 0.33s ease;
    flex-direction: column;
    font-size: 1rem;
  }

  .display_menu header #menu {
    height: auto;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  .display_menu header #menu li {
    height: 2.5rem;
    border-bottom: none;
    transition: 0.25s ease;
    opacity: 1;
    display: block;
  }

  header #menu li {
    height: 0;
    opacity: 0;
    margin-left: 0;
    transition: 0.25s ease;
  }

  header #menu li a {
    left: 0;
    line-height: auto;
    padding-left: 30px;
    border: none;
    height: 100%;
    width: 100%;
    display: block;
  }

  header #menu li a:hover {
    color: #5A5A59;
    font-weight: 600;
  }

  header #menu li a:hover i {
    background-color: #5A5A59;
  }

  header #menu li i {
    position: absolute;
    right: 35px;
    top: 50%;
    transform: translateY(-85%);
    background-color: #3c3c3b;
  }

  header .drop_menu {
    top: 25px;
    height: auto;
    box-shadow: none;
    left: 0;
    padding-bottom: 0;
    width: 100%;
    background-color: #F6F5F1;
    font-size: 0.9rem;
  }
  header .drop_menu a {
    width: 100%;
    padding: 0 !important;
    padding-left: 40px !important;
    margin: 6px;
    border-bottom: none;
  }

  .nuxt-link-exact-active {
    color: #E94E1B;
    font-weight: 600;
  }
}

@media screen and (max-width: 1024px) and (max-height: 500px) {
  .display_menu header {
    max-height: 100vh;
    overflow-y: scroll;
  }

  .display_menu header #menu li {
    height: calc((100vh - 113px)/4);
  }

  header #menu li a {
    line-height: calc((100vh - 113px)/4);
  }

  header .drop_menu {
    top: calc((100vh - 113px)/4);
  }
}

i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

@media screen and (min-width: 1024px) {
  header #menu li i {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  header {
    padding-top: 30px;
  }

  i {
    vertical-align: top;
  }


  header .drop_menu {
    margin-top: 23px;
    margin-left: -20px;
    width: 140px;
  }

  header .drop_menu a {
    font-size: 0.85rem;
    margin: 0px;
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #B0B1B1;
  }

  header .drop_menu .nuxt-link-active {
    color: #E94E1B;
    font-weight: 600;
  }
}

.nuxt-link-exact-active {
  font-weight: 600;
  color:#E94E1B;
}
</style>
