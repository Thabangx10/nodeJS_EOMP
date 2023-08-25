<template>
  <div class="homepage">
    <div class="hero-section">
      <h1>Welcome to Our Online Store</h1>
      <p>Discover the finest products and meet our amazing users.</p>
    </div>

    <div class="cta-section">
      <router-link to="/product" class="cta-button">
        <div class="cta-content">
          <img
            src="https://i.postimg.cc/d0BBymHG/26224860-6p7b3uo8vmyuap6a3b3zhb3i-Extra-Large.webp"
            alt="Products"
          />
          <h2>Explore Our Products</h2>
        </div>
      </router-link>

      <router-link to="/users" class="cta-button">
        <div class="cta-content">
          <img
            src="https://i.postimg.cc/GhLbPcmY/1690085156876.jpg"
            alt="Users"
          />
          <h2>Meet Our Users</h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add your scoped styles for the homepage here */

.homepage {
  text-align: center;
}

.hero-section {
  background: url("https://i.postimg.cc/cJ9FzBR0/360-F-162476658-Zo-IJ9-RKaoch0e-TLQck8yx-QMEu-Ls-Pk-Q19.jpg") center/cover no-repeat;
  padding: 100px 0;
  color: #fff;
}

.hero-section h1 {
  font-size: 3rem;
}

.hero-section p {
  font-size: 1.5rem;
  margin-top: 20px;
}

.cta-section {
  display: flex;
  justify-content: space-around;
  margin: 50px auto;
}

.cta-button {
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.cta-button:hover {
  transform: scale(1.05);
}

.cta-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-content img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.cta-content h2 {
  font-size: 1.5rem;
  margin-top: 10px;
}
</style>
