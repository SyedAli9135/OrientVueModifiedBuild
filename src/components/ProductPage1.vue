<template>
  <div>
    <Navbar />
    <Header2 />
    <div>
      <div className="productpage1">
        <div v-for="product in products.data" :key="product.id">
          <router-link
            :to="{ name: 'ProductCheckout', params: { id: product.id } }"
          >
            <div style="color: black;" className="productpage1-column">
              <img :src="product.image" style="width: 100%;" />

              <strong>{{ product.title }}</strong>
              <p>
                <strong>{{ product.text }}</strong>
              </p>
              <!-- <div v-for="variant in variants.data" :key="variant.id">
                <div
                  v-if="(productId = variant.url.slice(variant.url.length - 2))"
                >
                  <div v-if="productId[0] === product.id.toString()">
                    <p>{{ variant.price }}</p>
                  </div>
                </div>
              </div> -->
              <p>PKR: 5000</p>
              <div className="productpage1-buttons">
                <button>EN M/ US M</button>

                <button>ADD</button>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from './Navbar.vue'
import Header2 from './Header2.vue'
import Footer from './Footer.vue'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = Vue.createApp()
app.use(VueAxios, axios)
export default {
  name: 'ProductPage1',
  components: {
    Navbar,
    Header2,
    Footer,
  },
  methods: {
    fetchProducts() {
      axios.get('http://127.0.0.1:8000/Products/').then((response) => {
        console.log(response.data)
        this.products = response
      })
    },
    fetchVariants() {
      axios.get('http://127.0.0.1:8000/Variants/').then((response) => {
        console.log(response.data)
        this.variants = response
      })
    },
  },
  created() {
    this.fetchProducts()
    this.fetchVariants()
  },

  data() {
    return {
      variants: null,
      products: [
        {
          id: 1,
          image: '/images/Rectangle55.png',
          title: 'NEW',
          text: 'UNSTICHED 3PC PREMIUM ',
          price: 'PKR 4,990.00',
        },
        {
          id: 2,
          image: '/images/Rectangle56.png',
          title: 'NEW',
          text: 'UNSTICHED 3PC PREMIUM ',
          price: 'PKR 4,990.00',
        },
        {
          id: 3,
          image: '/images/Rectangle63.png',
          title: 'NEW',
          text: 'UNSTICHED 3PC PREMIUM ',
          price: 'PKR 4,990.00',
        },
        {
          id: 4,
          image: '/images/Rectangle64.png',
          title: 'NEW',
          text: 'UNSTICHED 3PC PREMIUM ',
          price: 'PKR 4,990.00',
        },
        {
          id: 5,
          image: '/images/Rectangle63.png',
          title: 'NEW',
          text: 'UNSTICHED 3PC PREMIUM ',
          price: 'PKR 4,990.00',
        },
        {
          id: 6,
          image: '/images/Rectangle64.png',
          title: 'NEW',
          text: 'UNSTICHED 3PC PREMIUM ',
          price: 'PKR 4,990.00',
        },
        {
          id: 7,
          image: '/images/Rectangle63.png',
          title: 'NEW',
          text: 'UNSTICHED 3PC PREMIUM ',
          price: 'PKR 4,990.00',
        },
        {
          id: 8,
          image: '/images/Rectangle64.png',
          title: 'NEW',
          text: 'UNSTICHED 3PC PREMIUM ',
          price: 'PKR 4,990.00',
        },
      ],
    }
  },
}
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.productpage1-column {
  float: left;
  width: 25%;
  padding: 10px;
}
.productpage1-column strong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.productpage1-column p {
  display: flex;
  justify-content: center;
  align-items: center;
}
.productpage1-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Clearfix (clear floats) */
.productpage1::after {
  content: '';
  clear: both;
  display: table;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 768px) {
  .productpage1-column {
    width: 100%;
  }
}
</style>
