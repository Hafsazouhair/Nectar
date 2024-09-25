<template>
    <nav>
      <div class="top">
        <div class="container flex justify-between">
          <div class="contact flex items-center">
            <img src="/icons/phone.svg" alt="">
            <div>
              <h5>Call US: (+84) 123 456 789</h5>
              <h6>E-mail : support@nectar.com</h6>
            </div>
          </div>
          <div class="branding">
            <img src="https://images-platform.99static.com/w-JCWZZ-e68g1zPuM4Hbzm99SiY=/193x185:1017x1009/fit-in/99designs-contests-attachments/96/96495/attachment_96495923" alt="" width="120" height="90">
          </div>
          <div class="time flex items-center">
            <img src="/icons/clock.svg" alt="">
            <div>
              <h5>Working Hours:</h5>
              <h6>Mon - Sat (8.00am - 12.00am)</h6>
            </div>
          </div>
        </div>
      </div>
    
      <div class="navbar magic-shadow">
        <div class="container flex justify-center">
          <a href="#" class="active"> <router-link to="/">Home</router-link></a>
        <router-link to="/aboutus">About us</router-link>
         <router-link to="/dishes">Dishes</router-link>
        <router-link to="/Blog" >Blog</router-link>
          <a href="#">Shop</a>
          <a href="#">Services</a>
          <a href="#">Gallery</a>
          <router-link to="/contact" >Contact us</router-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
 name: 'HelloWorld',
}
</script>