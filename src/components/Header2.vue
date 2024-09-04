<template>
    <nav>
      <div class="top">
        <div class="container flex justify-between">
          <div class="contact flex items-center">
            <img src="/icons/phone.svg" alt="">
            <div>
              <h5>Call US: (+84) 123 456 789</h5>
              <h6>E-mail : support@freshmeal.com</h6>
            </div>
          </div>
          <div class="branding">
            <img src="/icons/logo.svg" alt="">
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
          <a href="#" class="active">Home</a>
          <a href="#">About us</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
          <a href="#">Services</a>
          <a href="#">Gallery</a>
          <a href="#">Contact us</a>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
 name: 'HelloWorld',
}
</script>