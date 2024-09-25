<template>
    <section class="menu" id="menu">
        <div class="heading">
            <span>Menu</span>
            <h2>Tasty menu of the week</h2>
        </div>
        <div class="menu-container">
            <!-- Box 1 -->
            <div class="box">
                <div class="box-img">
                    <img src="assets/img/spicy.jpg" alt="">
                </div>
                <h2>spicy </h2>
                <h3>Tasty Food</h3>
                <span>$12.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
            <!-- Box 2 -->
            <div class="box">
                <div class="box-img">
                    <img src="assets/img/food-dish.png" alt="">
                </div>
                <h2>delicious meal</h2>
                <h3>Tasty Food</h3>
                <span>$12.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
            <!-- Box 3 -->
            <div class="box">
                <div class="box-img">
        <img src="assets/img/vegetable-food.png" alt="">
                </div>
                <h2>vegetarian dish</h2>
                <h3>Tasty Food</h3>
                <span>$12.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'blog-app',
}
</script>
<style>
/* Add this in your style section or in a separate CSS file */

.menu {
  padding: 20px;
  background-color: #f8f9fa;
}

.heading {
  text-align: center;
  margin-bottom: 20px;
}

.heading span {
  display: block;
  font-size: 1.5em;
  color: #333;
}

.heading h2 {
  font-size: 2em;
  color: #555;
}

.menu-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.box {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background-color: #fff;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.box-img img {
  max-width: 100%;
  border-radius: 4px;
}

.box h2 {
  font-size: 1.5em;
  color: #333;
  margin: 10px 0;
}

.box h3 {
  font-size: 1.2em;
  color: #777;
}

.box span {
  display: block;
  font-size: 1.2em;
  color: #000;
  margin: 10px 0;
}

.box i {
  font-size: 1.5em;
  color: #007bff;
  cursor: pointer;
}

</style>