<template>
  <div>
    <Navbar />
    <div>
      <hr />
      <div className="product_checkout">
        <div className="images">
          <img :src="product.image" alt="" />

          <img :src="images.attachment1" alt="" />
          <img :src="images.attachment2" alt="" />
        </div>
        <div className="product_checkout_content">
          <div className="product_checkout_innerContent">
            <h3 v-if="product.text != null" id="h3">{{ product.text }}</h3>
            <p id="p1">VIEW</p>
            <p id="p2">2</p>
            <p id="p3">4</p>
            <p id="p3">|</p>
            <p onClick="{openNav1}" href="#" id="p5">
              +FILTERS
            </p>
          </div>

          <p v-if="variants.price != null">PKR:{{ variants.price }}</p>
          <div className="readmore">
            <a href="#">
              <strong>READ MORE</strong>
            </a>
          </div>

          <hr />
          <div className="product_checkout_content1">
            <p>
              <strong>SKU:</strong>
              NRP-048 BLACK
            </p>
          </div>
          <div className="size">
            <p>
              <strong>SIZE</strong>
            </p>
          </div>

          <div
            v-if="variants.size != null"
            className="product_checkout_buttons"
          >
            <!-- <button id="btn1">XS</button>
            <button id="btn2">S</button>
            <button id="btn3">M</button>
            <button id="btn3">L</button>
            <button id="btn4">XL</button> -->
            <button id="btn1">{{ variants.size }}</button>
          </div>
          <div className="product_checkout_buttons2">
            <button id="checkout_btn1">BUY NOW</button>
            <button id="checkout_btn2">ADD TO CART</button>
          </div>
          <div className="product_checkout_icons">
            <p>Share</p>
            <i id="checkout_icon1" class="fab fa-facebook"></i>
            <i id="checkout_icon2" class="fab fa-whatsapp"></i>
          </div>
          <div className="product_checkout_icons2">
            <p>
              <i id="icon1" class="fas fa-chevron-right"></i>
              Shipping and Returns
            </p>

            <p>
              <i id="icon2" class="fas fa-chevron-right"></i>
              Size Guide
            </p>
          </div>
        </div>
      </div>
      <div id="mySidepanel1" class="sidepanel1">
        <a style="font-size: small;" href="javascript:void(0)" class="closebtn">
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
    <SimilarItems />
    <Footer />
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import SimilarItems from './SimilarItems.vue'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = Vue.createApp()
app.use(VueAxios, axios)
export default {
  name: 'ProductCheckout',
  data() {
    return {
      product: null,
      variants: null,
      images: null,
      id: null,
    }
  },
  components: {
    Navbar,
    Footer,
    SimilarItems,
  },

  created() {
    this.fetchProduct()
    this.getId()
    this.fetchVariants()
    this.fetchAttachments()
  },
  methods: {
    getId() {
      this.id = this.$route.params.id
      console.log(this.id)
    },
    fetchProduct() {
      this.id = this.$route.params.id
      try {
        axios
          .get(`http://127.0.0.1:8000/Products/${this.id}/`)
          .then((response) => {
            // console.log(response.data)
            this.product = response.data
            console.log('product:', this.product)
          })
      } catch (error) {
        console.log(error)
      }
    },
    fetchVariants() {
      this.id = this.$route.params.id
      try {
        axios.get(`http://127.0.0.1:8000/Variants/${this.id}/`).then((res) => {
          this.variants = res.data
        })
      } catch (error) {
        console.log(error)
      }
    },
    fetchAttachments() {
      this.id = this.$route.params.id
      try {
        axios.get(`http://127.0.0.1:8000/Images/${this.id}/`).then((res) => {
          this.images = res.data
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style scoped>
.product_checkout {
  display: flex;

  justify-content: flex-start;
  align-items: flex-start;
}
.product_checkout_content {
  margin-top: 30px;
}

.product_checkout_innerContent {
  display: flex;
  flex-direction: row;
}

.product_checkout_innerContent #h3 {
  margin-right: 20%;
}
.product_checkout_innerContent #p2 {
  margin-left: 10px;
}
.product_checkout_innerContent #p3 {
  margin-left: 10px;
}
.product_checkout_innerContent #p4 {
  margin-left: 10px;
}
.product_checkout_innerContent #p5 {
  margin-left: 10px;
  text-decoration: none;
}
.product_checkout_content a {
  color: black;
  font-size: 15px;
}
.images {
  width: 40%;
  display: flex;
  margin-left: 10%;

  flex-direction: column;
}
.images img {
  width: 90%;
}
.product_checkout_content1 {
  margin-top: 30px;
}
.readmore {
  margin-top: 30px;
}
.size {
  margin-top: 30px;
}
.product_checkout_buttons {
  margin-top: 30px;
  display: flex;
}
.product_checkout_buttons #btn1 {
  margin-right: 10px;
}
.product_checkout_buttons #btn2 {
  margin-right: 10px;
}
.product_checkout_buttons #btn3 {
  margin-right: 10px;
}
.product_checkout_buttons #btn4 {
  margin-right: 10px;
}
.product_checkout_buttons #btn5 {
  margin-right: 10px;
}
.product_checkout_buttons2 {
  margin-top: 30px;
}
.product_checkout_buttons2 #checkout_btn1 {
  flex-direction: row;
  margin-right: 20px;
  width: 50%;
  background: black;
  color: white;
  padding-bottom: 10px;
}
.product_checkout_buttons2 #checkout_btn2 {
  width: 30%;
  padding-bottom: 10px;
  background: white;
}
.product_checkout_icons {
  display: flex;
  margin-top: 30px;
}
.product_checkout_icons #checkout_icon1 {
  margin-left: 20px;
}
.product_checkout_icons #checkout_icon2 {
  margin-left: 20px;
}
.product_checkout_icons2 #icon1 {
  margin-right: 10px;
}
.product_checkout_icons2 #icon2 {
  margin-right: 10px;
}
@media only screen and (max-width: 768px) {
  .images_content {
    font-size: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .product_checkout_innerContent #p1 {
    margin-left: 20%;
  }
}
@media only screen and (max-width: 1400px) {
  .images_content {
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .product_checkout_innerContent #p1 {
    margin-left: 10px;
  }
}
@media only screen and (max-width: 1405px) {
  .product_checkout_innerContent #p1 {
    margin-left: 0;
  }
  .images_content {
    font-size: 12px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

.sidepanel1 {
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

.sidepanel1 a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidepanel1 a:hover {
  color: gray;
}

.sidepanel1 .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}
</style>
