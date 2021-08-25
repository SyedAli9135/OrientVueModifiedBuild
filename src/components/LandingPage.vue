<template>
  <!-- Navbar  -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
    <button
      class="openbtn"
      v-on:mouseenter="openNav()"
      v-on:mouseleave="closeNav()"
    >
      ☰
    </button>
    <router-link to="/" class="navbar-brand" href="#">
      <img class="orient" src="/images/logo.png" />
    </router-link>
    <router-link to="/productpage1">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </router-link>
    <div class="nav navbar-nav navbar-center">
      <input type="text" placeholder="SEARCH" />
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="mx-auto"></div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white" href="page2modifiedfinal.html">
            LOG IN
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="page2modifiedfinal.html">HELP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">
            <i class="fal fa-shopping-cart"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="banner-area">
    <div
      style="
        position: fixed;
        left: 20px;
        top: 50%;
        color: #eee;
        font-weight: 500;
      "
      class="left-arrow"
    >
      <a
        style="text-decoration: none; color: whitesmoke;"
        href="page2modifiedfinal.html"
      >
        KIDS WEAR
      </a>
    </div>
    <div
      style="
        position: fixed;
        right: 20px;
        top: 50%;
        color: #eee;
        font-weight: 500;
      "
      class="right-arrow"
    >
      <a
        style="text-decoration: none; color: whitesmoke;"
        href="page2modifiedfinal.html"
      >
        UNSTICHED
      </a>
    </div>
    <div
      style="position: absolute; left: 50%; bottom: 20px; color: whitesmoke;"
      class="bottom-arrow"
    >
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="content-area">
      <div class="content">
        <h1><strong>NEW IN</strong></h1>

        <p>
          SELECTED PIECES WITH NEW PICTURES CURATED FOR YOU. 2020 WOMEN
          <br />
          COLLECTIONS SELECTED PIECES WITH NEW
        </p>

        <router-link to="/productpage1">
          <button class="btn" style="text-decoration: none; color: whitesmoke;">
            VIEW
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <div class="banner-area0">
    <div
      style="
        position: fixed;
        left: 20px;
        top: 50%;
        color: #eee;
        font-weight: 500;
      "
      class="left-arrow"
    >
      <a
        style="text-decoration: none; color: whitesmoke;"
        href="page2modifiedfinal.html"
      >
        KIDS WEAR
      </a>
    </div>
    <div
      style="
        position: fixed;
        right: 20px;
        top: 50%;
        color: #eee;
        font-weight: 500;
      "
      class="right-arrow"
    >
      <a
        style="text-decoration: none; color: whitesmoke;"
        href="page2modifiedfinal.html"
      >
        UNSTICHED
      </a>
    </div>
    <div
      style="position: absolute; left: 50%; bottom: 20px; color: whitesmoke;"
      class="bottom-arrow"
    >
      <i class="fas fa-chevron-down"></i>
    </div>

    <div class="content-area">
      <div class="content">
        <h1><strong>EMBROIDERED</strong></h1>

        <p>
          SELECTED PIECES WITH NEW PICTURES CURATED FOR YOU. 2020 WOMEN
          <br />
          COLLECTIONS SELECTED PIECES WITH NEW
        </p>

        <router-link to="/productpage1">
          <button class="btn" style="text-decoration: none; color: whitesmoke;">
            VIEW
          </button>
        </router-link>
      </div>
    </div>
  </div>

  <div class="banner-area1">
    <div
      style="position: absolute; left: 50%; bottom: 20px; color: whitesmoke;"
      class="bottom-arrow"
    >
      <i class="fas fa-chevron-down"></i>
    </div>
    <div
      style="
        position: fixed;
        left: 20px;
        top: 50%;
        color: #eee;
        font-weight: 500;
      "
      class="left-arrow"
    >
      <a
        style="text-decoration: none; color: whitesmoke;"
        href="page2modifiedfinal.html"
      >
        KIDS WEAR
      </a>
    </div>
    <div
      style="
        position: fixed;
        right: 20px;
        top: 50%;
        color: #eee;
        font-weight: 500;
      "
      class="right-arrow"
    >
      <a
        style="text-decoration: none; color: whitesmoke;"
        href="page2modifiedfinal.html"
      >
        UNSTICHED
      </a>
    </div>
    <div class="content-area">
      <div class="content">
        <h1><strong>COLLECTION</strong></h1>
        <p>
          SELECTED PIECES WITH NEW PICTURES CURATED FOR YOU. 2020 WOMEN
          <br />
          COLLECTIONS SELECTED PIECES WITH NEW
        </p>

        <router-link to="/productpage1">
          <button class="btn" style="text-decoration: none; color: whitesmoke;">
            VIEW
          </button>
        </router-link>
      </div>
    </div>
  </div>

  <div class="banner-area2">
    <div
      style="position: absolute; left: 50%; bottom: 20px; color: whitesmoke;"
      class="bottom-arrow"
    >
      <i class="fas fa-chevron-down"></i>
    </div>
    <div
      style="
        position: fixed;
        left: 20px;
        top: 50%;
        color: #eee;
        font-weight: 500;
      "
      class="left-arrow"
    >
      <a
        style="text-decoration: none; color: whitesmoke;"
        href="page2modifiedfinal.html"
      >
        KIDS WEAR
      </a>
    </div>
    <div
      style="
        position: fixed;
        right: 20px;
        top: 50%;
        color: #eee;
        font-weight: 500;
      "
      class="right-arrow"
    >
      <a
        style="text-decoration: none; color: whitesmoke;"
        href="page2modifiedfinal.html"
      >
        UNSTICHED
      </a>
    </div>
    <div class="content-area">
      <div class="content">
        <h1><strong>JOIN LIFE</strong></h1>

        <p>
          SELECTED PIECES WITH NEW PICTURES CURATED FOR YOU.
          <br />
          2020 WOMEN COLLECTIONS
          <br />
          SELECTED PIECES WITH NEW PICTURE CURRATED FOR YOU
        </p>

        <router-link to="/productpage1">
          <button class="btn" style="text-decoration: none; color: whitesmoke;">
            VIEW
          </button>
        </router-link>
      </div>
    </div>
  </div>

  <!--main area-->

  <Footer />

  <div id="mySidepanel" class="sidepanel">
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
    <a style="font-size: medium;" href="#">
      <p>PRET</p>
    </a>
    <a style="font-size: medium;" href="#">
      <p>UNSTICHED</p>
    </a>
    <a style="font-size: medium;" href="#">
      <p>SHIRTS</p>
    </a>
    <a style="font-size: medium;" href="#">
      <p>TOPS</p>
    </a>
    <a style="font-size: medium;" href="#">
      <p>KNITWEAR</p>
    </a>
    <a style="font-size: medium;" href="#">
      <p>PANTS</p>
    </a>
    <a style="font-size: medium;" href="#">
      <p>BAGS</p>
    </a>
    <a style="font-size: medium;" href="#">
      <p>SHOES</p>
    </a>
    <a style="font-size: medium;" href="#">
      <p>ACCESSORIES</p>
    </a>
  </div>
</template>
<script>
import Footer from './Footer.vue'
export default {
  name: 'LandingPage',
  components: {
    Footer,
  },
  methods: {
    openNav() {
      document.getElementById('mySidepanel').style.width = '350px'
    },
    closeNav() {
      document.getElementById('mySidepanel').style.width = '0'
    },
  },
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.footer {
  overflow: hidden;
}

.col-xs-3 > input {
  outline: none;
}

input[type='text'] {
  border: none;
  border-bottom: 2px solid black;
  padding: 12px 15px;
  background: transparent;
  width: 20vw;
  box-sizing: border-box;
  display: flex;
  text-align: center;
}

body {
  background: #eee;
  font-family: sans-serif;
}

.banner-area {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/Rectangle48.jpg');
  background-size: cover;
}

.banner-area0 {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/Rectangle49.jpg');
  background-size: cover;
}

@media only screen and (max-width: 768px) {
  .banner-area {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('/images/Rectangle48-modified.png');
    background-size: cover;
  }

  .banner-area0 {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('/images/Rectangle49-modified.png');
    background-size: cover;
  }

  .banner-area1 {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('/images/Rectangle50-modified.png');
    background-size: cover;
  }

  .banner-area2 {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('/images/Rectangle51-modified.png') !important;

    background-size: cover;
  }
}

.banner-area1 {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/Rectangle50.jpg');
  background-size: cover;
}

.banner-area2 {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/Rectangle51.jpg');

  background-size: cover;
}

.content-area {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
}

.content h1 {
  font-size: 70px;
  color: #fff;
}

.content p {
  font-size: 10px;
  color: #ddd;
}

.content .btn {
  border: 1px solid whitesmoke;
  outline: none;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 40px;
  border-radius: 2px;
  border-color: whitesmoke;
  color: #eee;
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
}

/* main area */

.container {
  width: 100%;
  margin: 20px auto;
  padding: 10px;
}

.container .box {
  width: 100%;
  padding: 50px;
  background: #fff;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px -3px rgba(0, 0, 0, 0.1);
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: whitesmoke;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

.input[type='text'] {
  background-color: transparent;
  outline: none;
  border-bottom: 2px solid black;
}
.sidepanel {
  width: 0;
  position: fixed;
  z-index: 999;
  height: 100%;
  top: 0;
  left: 0;
  background-color: whitesmoke;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 100px;
  font-size: small;
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidepanel a:hover {
  color: #f1f1f1;
}

.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: transparent;
}

.navbar-nav.navbar-center {
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
}

.navbar-nav.navbar-center > label {
  float: left;
  color: whitesmoke;
}

.navbar-brand {
  margin-right: 60%;
}

@media only screen and (max-width: 700px) {
  .orient {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  .content h1 {
    font-size: 35px;
  }
}
</style>
