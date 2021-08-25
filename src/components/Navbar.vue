<template>
  <div>
    <div className="custom-navbar">
      <div className="custom-navbarleft">
        <button v-on:click="openNav()" id="custom-navbarbtn">
          ☰
        </button>
        <router-link to="/"><img id="navbar_img" src="/images/logo.png" /></router-link>
       
      </div>
      <div className="custom-navbarcenter">
        <input id="custom-navbarinput" type="text" placeholder="SEARCH" />
      </div>
      <div className="custom-navbarright">
        <p id="navbar_p1">LOG IN</p>
        <p id="navbar_p2">HELP</p>
        <i id="navbar_icon" class="fad fa-shopping-cart"></i>
      </div>
    </div>
    <div id="mySidepanel-Nav" class="sidepanel-Nav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">
        ×
      </a>

      <a style="font-size: large;" href="#">
        <h1>WOMAN</h1>
      </a>
      <a style="font-size: medium;" href="#">
        <p>NEW IN</p>
      </a>
      <a style="font-size: medium;" href="#">
        <p>UNSTICHED COLLECTION</p>
      </a>
      <a style="font-size: medium;" href="#">
        <p>READY TO WEAR</p>
      </a>
      <a style="font-size: small;" href="#">
        <h3>
          <p>VIEW all</p>
        </h3>
      </a>
      <a style="font-size: small;" href="#">
        <p>PRET</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>UNSTICHED</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>SHIRTS</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>TOPS</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>KNITWEAR</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>PANTS</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>BAGS</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>SHOES</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>ACCESSORIES</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      logo: './images/logo.png',
    }
  },
  methods: {
    openNav() {
      document.getElementById('mySidepanel-Nav').style.width = '350px'
    },
    closeNav() {
      document.getElementById('mySidepanel-Nav').style.width = '0'
    },
  },
}
</script>

<style scoped>
.custom-navbar {
  display: flex;
  margin-top: 10px;
}

.custom-navbarleft {
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  flex-wrap: wrap;
}
.custom-navbarleft #custom-navbarbtn {
  margin: 20px;
  font-size: 20px;
  background-color: white;
  outline: none;
  border-bottom-style: none;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
}

.custom-navbarcenter {
  display: flex;
  justify-self: center;
  align-self: center;
  margin-left: 25%;
  flex-wrap: wrap;
}

.custom-navbarcenter #custom-navbarinput {
  padding-bottom: 10px;
  width: 20vw;
  outline: none;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom: 2px solid black;
  text-align: center;
}

.custom-navbarcenter #custom-navbarbtn:focus {
  outline: none;
}

.custom-navbarright {
  display: flex;
  margin-left: 25%;
}
.custom-navbarright #navbar_p1 {
  margin-top: 30px;
}
.custom-navbarright #navbar_p2 {
  margin-top: 30px;
  margin-left: 40px;
}
.custom-navbarright #navbar_icon {
  margin-top: 30px;
  margin-left: 30px;
}
@media screen and (max-width: 768px) {
  #navbar_img {
    display: none;
  }
}
@media screen and (max-width: 1200px) {
  .custom-navbarright {
    margin-left: 10%;
    flex-wrap: wrap;
  }
  #navbar_p2 {
    display: flex;
    flex-grow: inherit;
  }
  #navbar_icon {
    margin-left: 5px;
  }
}

.sidepanel-Nav {
  width: 0;
  position: fixed;
  z-index: 1;
  height: 80%;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidepanel-Nav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidepanel-Nav a:hover {
  color: gray;
}

.sidepanel-Nav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.openbtn-Nav {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn-Nav:hover {
  background-color: #444;
}
</style>
