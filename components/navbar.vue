<template>
  <header>
    <div class="wrap">
      <div id="hamburger" v-on:click="display_menu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id="menu">
        <li><a>Menu 1</a></li>
        <li class="drop"><a v-on:click="display_drop_menu()">Menu 2 dropdown <i class="icon-arrow"></i></a>
          <ul class="drop_menu">
            <a>Sub menu 1</a>
            <a>Sub menu 2</a>
            <a>Sub menu 3</a>
          </ul>
        </li>
        <li class="drop"><a v-on:click="display_drop_menu()">Menu 3 dropdown  <i class="icon-arrow"></i></a>
          <ul class="drop_menu">
            <a>Sub menu 1</a>
            <a>Sub menu 2</a>
            <a>Sub menu 3</a>
          </ul>
        </li>
        <li><a>Menu 4</a></li>
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
  created() {
    let vm = this;

    window.onscroll = function() {
      if(!document.getElementById("loader")){
        vm.close_all_menu();
        var header = document.getElementsByTagName("header")[0];
        if(Math.abs(vm.last_scroll - this.scrollY) <= 5) return;
        (this.scrollY < vm.last_scroll) ? header.style.top = "0" : header.style.top = "-" + header.clientHeight + "px" ;
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
      var lis = document.getElementById("menu").getElementsByTagName("li");
      Array.from(lis).forEach(function(e){
        e.style.marginTop = 0;
      });
      var drop_menus = document.getElementsByClassName("drop_menu");
      Array.from(drop_menus).forEach(function(e){
        e.classList.remove("display");
      });
    },
    display_menu(){
      var body = document.getElementsByTagName("body")[0];
      (!body.classList.contains("display_menu")) ? body.classList.add("display_menu") : body.classList.remove("display_menu");
    },
    display_drop_menu() {
      var drop_menu = event.target.parentElement.getElementsByClassName("drop_menu")[0];
      var drop_menus = document.getElementsByClassName("drop_menu");

      Array.from(drop_menus).forEach(function(e){
        if(e != drop_menu){
          e.classList.remove("display");
        }
      });
      var lis = document.getElementById("menu").getElementsByTagName("li");
      Array.from(lis).forEach(function(e){
        e.style.marginTop = 0;
      });
      (!drop_menu.classList.contains("display")) ? drop_menu.classList.add("display") : drop_menu.classList.remove("display");
      if(window.innerWidth < 660 && drop_menu.classList.contains("display")) {
        event.target.parentElement.nextSibling.nextSibling.style.marginTop = drop_menu.clientHeight + "px";
      }
    },
    loaded(){
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      console.log('t');
      (this.load) ? this.load = false : this.load = true;
    }
  }
};


</script>

<style scoped>

.icon-arrow {
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441        L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
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
  font-size: 14px;
  font-family: "Roboto", sans-serif;
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
  padding: 10px 0;
  background-color: #ffffff;
  position: fixed;
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
  align-items: flex-end;
  justify-content: space-between;
}

header img {
  width: 100px;
}

header #menu {
  display: flex;
  flex-direction: row;
}

header #menu li {
  position: relative;
  user-select: none;
  margin-left: 20px;
}
header #menu li i {
  width: 12px;
  height: 12px;
  background-color: #3E3A37;
}
header #menu li a {
  color: #3E3A37;
  cursor: pointer;
  font-size: 1.15em;
  border: none;
  border-bottom: 2px solid #ffffff;
  transition: 0.15s;
  background: none;
}
header #menu li a:hover {
  border-bottom-color: #41B883;
  color: #41B883;
}
header #menu li a:hover i {
  background-color: #41B883;
}

header .drop_menu {
  position: absolute;
  display: block;
  top: 149%;
  transform: scaleY(0);
  width: auto;
  transform-origin: top;
  background-color: #ffffff;
  transition: 0.25s;
  padding-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
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
  left: 3%;
  top: 30px;
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
  width: 12px;
}
header #hamburger span:nth-child(2) {
  width: 24px;
}
header #hamburger span:nth-child(3) {
  width: 12px;
}

.display_menu header #hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(2px, 1px);
}
.display_menu header #hamburger span:nth-child(2) {
  transform: rotate(-45deg);
}
.display_menu header #hamburger span:nth-child(3) {
  transform: rotate(45deg) translate(6px, -9px);
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

@media screen and (max-width: 660px) {
  body {
    padding-top: 70px;
  }

  header .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }

  header img {
    width: 50px;
  }

  header #hamburger {
    display: block;
  }

  header #menu {
    width: 100%;
    display: block;
    height: 0;
    transform-origin: 50% 0;
    transition: 0.33s ease;
    flex-direction: column;
  }

  .display_menu header #menu {
    height: calc(100vh - 64px);
  }
  .display_menu header #menu li {
    height: calc((100vh - 113px)/8);
    border-bottom: 1px solid #DAD9D7;
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
    line-height: calc((100vh - 113px)/8);
    padding-left: 20px;
    border: none;
    height: 100%;
    width: 100%;
    display: block;
  }
  header #menu li a:hover {
    color: #ffffff;
    background-color: #41B883;
  }
  header #menu li a:hover i {
    background-color: #ffffff;
  }
  header #menu li i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #3E3A37;
  }

  header .drop_menu {
    top: calc((100vh - 113px)/8);
    box-shadow: none;
    left: 0;
    padding-bottom: 0;
    width: 100%;
  }
  header .drop_menu a {
    width: 100%;
    padding: 0 !important;
    padding-left: 40px !important;
    margin: 0;
    border-bottom: 1px solid #DAD9D7 !important;
  }
}
@media screen and (max-width: 660px) and (max-height: 500px) {
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

</style>
