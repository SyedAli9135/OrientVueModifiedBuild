<template>
  <div className="footer">
    <div className="footer-content1">
      <h1>JOIN OUR NEWSLETTER</h1>
      <input type="text" placeholder="Enter your email here" />
    </div>

    <div className="icons">
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-youtube-square"></i>
    </div>
    <div className="footer_content">
      <p>CUSTOMER SUPPORT</p>
      <p>GET TO KNOW US</p>
      <p>LET US HELP YOU</p>
      <p>ORIENT BUISNESS</p>
    </div>
    <div className="footer_content1">
      <p>PRIVACY POLICY</p>
      <p>TERMS OF USE</p>
    </div>
  </div>
  <div className="icons">
    <div className="iconsright">
      <img src="/images/easypaisa.jpg" alt="" />
      <img src="/images/2cc.jpg" alt="" />
      <img src="/images/visa.jpg" alt="" />
      <img src="/images/mastercard.jpg" alt="" />
      <img src="/images/keenu.jpg" alt="" />
      <img src="/images/unionpay.jpgi" alt="" />
    </div>
    <div className="iconsLeft">
      <img src="/images/android.png" alt="" />
      <img src="/images/iphone.png" alt="" />
    </div>
  </div>
  <div className="copyright">
    <p>© 2020 Orient Textiles.Inc All Rights Reserved</p>
  </div>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
.footer {
  padding: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.footer-content1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.footer-content1 h1 {
  font-size: 35px;
}
.footer-content1 input[type='text'] {
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid black;
  width: 25vw;
}
.icons {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 10px;
  color: black;
}
.icons i {
  margin-left: 5px;
}
.footer_content {
  padding-top: 30px;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  font-size: 15px;
}
.footer_content p {
  margin: 20px;
}
.footer_content1 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  font-size: 15px;
}
.footer_content1 p {
  margin: 20px;
}
.iconsright {
  margin-right: 50%;
}
.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
