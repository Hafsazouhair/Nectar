<template>
  <section class="top-dishes">
    <div class="container">
      <h1 class="section-heading">Top products</h1>
      <div class="slider">
        <button class="slider-btn prev-btn" @click="scrollLeft">
          <img src="/icons/pre.svg" alt="Previous">
        </button>
        <button class="slider-btn next-btn" @click="scrollRight">
          <img src="/icons/next.svg" alt="Next">
        </button>
        <div class="food-slider">
          <div class="food-card magic-shadow-sm">
            <div class="product-image flex items-center justify-center">
              <img src="/images/plate-1.png" alt="Summer Salad">
            </div>
            <hr>
            <div>
              <h2 class="text-center">Summer Salad</h2>
              <div class="stars flex justify-center items-center">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
              </div>
              <div class="price text-center">
                $1.25
              </div>
              <div class="flex justify-center">
                <button>
                  <img src="/icons/cart-2.svg" alt="Cart">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
          <!-- Repeat food-card div for each product -->
          <div class="food-card magic-shadow-sm">
            <div class="product-image flex items-center justify-center">
              <img src="/images/plate-2.png" alt="Russian Salad">
            </div>
            <hr>
            <div>
              <h2 class="text-center">Russian Salad</h2>
              <div class="stars flex justify-center items-center">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
              </div>
              <div class="price text-center">
                $1.25
              </div>
              <div class="flex justify-center">
                <button>
                  <img src="/icons/cart-2.svg" alt="Cart">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
          <div class="food-card magic-shadow-sm">
            <div class="product-image flex items-center justify-center">
              <img src="/images/plate-3.png" alt="Greek Salad">
            </div>
            <hr>
            <div>
              <h2 class="text-center">Greek Salad</h2>
              <div class="stars flex justify-center items-center">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
              </div>
              <div class="price text-center">
                $1.25
              </div>
              <div class="flex justify-center">
                <button>
                  <img src="/icons/cart-2.svg" alt="Cart">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
          <div class="food-card magic-shadow-sm">
            <div class="product-image flex items-center justify-center">
              <img src="/images/plate-4.png" alt="Cottage Pie">
            </div>
            <hr>
            <div>
              <h2 class="text-center">Cottage Pie</h2>
              <div class="stars flex justify-center items-center">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/start-filled.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
                <img src="/icons/star-grey.svg" alt="Star">
              </div>
              <div class="price text-center">
                $1.25
              </div>
              <div class="flex justify-center">
                <button>
                  <img src="/icons/cart-2.svg" alt="Cart">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center btn-wrapper">
        <button class="btn btn-secondary">View More</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductApp',
  methods: {
    scrollLeft() {
      const slider = this.$el.querySelector('.food-slider');
      slider.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust the scroll amount as needed
    },
    scrollRight() {
      const slider = this.$el.querySelector('.food-slider');
      slider.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust the scroll amount as needed
    },
  },
}
</script>

<style scoped>
.top-products {
  padding: 20px;
}

.slider {
  position: relative;
  overflow: hidden;
}

.food-slider {
  display: flex;
  overflow-x: auto;
  padding: 10px;
  gap: 10px; /* Adjust the gap between cards as needed */
}

.food-card {
  flex: 0 0 auto; /* Ensure each card is only as wide as its content */
  width: 300px; /* Adjust the width as needed */
  position: relative; /* Allows for positioning the card */
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.food-card .product-image img {
  max-width: 100%; /* Ensure images fit within their container */
}

.btn-wrapper {
  margin-top: 20px;
}

.btn-secondary {
  background-color: #333; /* Adjust styles as needed */
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
