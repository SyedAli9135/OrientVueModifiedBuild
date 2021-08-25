<template>
  <div>
    <div className="header2">
      <hr />
      <div className="header2__content1">
        <p id="header2_p1">VIEW</p>
       <router-link to="productpage2modified"> <p id="header2_p2">
          2
        </p> </router-link>
        <p id="header2_p3">
          <strong>4</strong>
        </p>
        <p id="header2_p4">|</p>
        <p v-on:click="openNav1()" id="header2_p5">
          +FILTERS
        </p>
      </div>
      <div className="header2__content2">
        <h1>SHOP THE LATEST TRENDS WITH ORIENT NEW IN COLLECTION</h1>
        <p>
          Shop the latest clothing trends with our weekly edit of what's new in
          online at Orient. From our latest Women Collection and TRF lines, we
          have
          <br />
          dresses,jeans,shoes,bags and more to suit every column and every
          occassion. EXplore the latest fashion trends here and now with us.
        </p>
      </div>
      <div className="header2__content3">
        <a id="header2_a1" href="#">
          <strong>UNSTICHED</strong>
        </a>
        <a id="header2_a2" href="#">
          <strong>PRET</strong>
        </a>
        <a id="header2_a3" href="#">
          <strong>EMBROIDERED</strong>
        </a>
      </div>
    </div>
    <div id="mySidepanel-header1" class="sidepanel-header1">
      <a
        style="font-size: small;"
        href="javascript:void(0)"
        class="closebtn"
        v-on:click="closeNav1()"
      >
        CLEAR
      </a>
      <a style="font-size: medium;" href="#">
        <h3>SIZE</h3>
      </a>
      <a style="font-size: small;" href="#">
        <p>EU 32/ US 0</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>EU 34/ US 2</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>EU 36 / US 4</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>+ VIEW MORE</p>
      </a>
      <a style="font-size: medium;" href="#">
        <h3>
          <p>COLOUR</p>
        </h3>
      </a>
      <a style="font-size: small;" href="#">
        <p>BEIGE</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>BLACK</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>BLUE</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>+ VIEW MORE</p>
      </a>
      <a style="font-size: medium;" href="#">
        <h3>COLLECTION</h3>
      </a>
      <a style="font-size: small;" href="#">
        <p>BASIC</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>TRF</p>
      </a>
      <a style="font-size: small;" href="#">
        <p>WOMAN</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: <Header1 />,
  methods: {
    openNav1() {
      document.getElementById('mySidepanel-header1').style.width = '250px'
    },
    closeNav1() {
      document.getElementById('mySidepanel-header1').style.width = '0'
    },
  },
}
</script>
<style scoped>
.header2__content1 {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  margin-left: 20px;
}
.header2__content1 #header2_p1 {
  margin-right: 10px;
}
.header2__content1 #header2_p2 {
  margin-right: 10px;
}
.header2__content1 #header2_p3 {
  margin-right: 10px;
}
.header2__content1 #header2_p4 {
  margin-right: 10px;
}
.header2__content1 #header2_p5 {
  margin-right: 10px;
}
.header2__content2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 15px;
}
.header2__content3 {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header2__content3 #header2_a1,
.header2__content3 #header2_a2,
.header2__content3 #header2_a3 {
  margin: 10px;
  color: black;
}
.sidepanel-header1 {
  width: 0;
  position: fixed;
  z-index: 1;
  height: 70%;
  top: 110px;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidepanel-header1 a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidepanel-header1 a:hover {
  color: gray;
}

.sidepanel-header1 .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}
</style>
