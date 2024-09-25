<template>
  <header class="topbar">
    <div class="container flex justify-between items-center">
      <div class="icons">
        <a href="#"><img src="/icons/facebook.svg" alt="Facebook"></a>
        <a href="#"><img src="/icons/twitter.svg" alt="Twitter"></a>
        <a href="#"><img src="/icons/google.svg" alt="Google"></a>
        <a href="#"><img src="/icons/instagram.svg" alt="Instagram"></a>
        <a href="#"><img src="/icons/search.svg" alt="Search"></a>
      </div>
      <div class="auth flex items-center">
        <!-- Display Login and Register links if not authenticated -->
        <div v-if="!isAuthenticated">
          <img src="/icons/user-icon.svg" alt="User Icon">
          <router-link to="/Login">Log in</router-link>
          <span class="divider">|</span>
          <img src="/icons/edit.svg" alt="Register Icon">
          <router-link to="/Register">Register Now</router-link>
        </div>
        <!-- Display User Info and Logout button if authenticated -->
        <div v-else>
          <img src="/icons/user-icon.svg" alt="User Icon">
          <span>{{ userName }}</span>
          <button @click="logout">Logout</button>
        </div>
        <span class="divider">|</span>
        <div>
          <img src="/icons/cart.svg" alt="Cart">
          <a href="#">0 Items - ($0.00)</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header-app',
  data() {
    return {
      isAuthenticated: false,
      userName: '' // The name of the authenticated user
    }
  },
  created() {
    this.checkAuthentication();
  },
  watch: {
    $route() {
      this.checkAuthentication();
    }
  },
  methods: {
    checkAuthentication() {
      // Check if user is authenticated by looking in local storage
      const user = localStorage.getItem('user');
      if (user) {
        try {
          const parsedUser = JSON.parse(user);
          this.isAuthenticated = true;
          this.userName = parsedUser.name || 'User'; // Ensure name property is handled
        } catch (error) {
          console.error('Error parsing user data:', error); // Handle JSON parsing errors
          this.isAuthenticated = false;
          this.userName = '';
        }
      } else {
        this.isAuthenticated = false;
        this.userName = '';
      }
    },
    logout() {
      // Handle logout
      localStorage.removeItem('user'); // Remove user data from local storage
      this.isAuthenticated = false; // Update authentication status
      this.userName = ''; // Clear the username
      this.$router.push('/Login'); // Redirect to login page
    }
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
