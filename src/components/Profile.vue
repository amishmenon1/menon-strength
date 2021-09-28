<template>
  <div>
    <h1 class="main-title highlight">{{ msg }}</h1>
    <div class="profile profile-pic-1"></div>
    <p class="main-subtext highlight">
      CUSTOM FITNESS SOLUTIONS TO MAKE YOU REACH YOUR GOALS
      <!-- replace this link with Google Forms -->
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    msg: String,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Karantina:wght@700&family=Lobster&display=swap');sub-title text font */

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.highlight {
  background: url("../assets/other/brush-stroke-banner-7.png");
  background-repeat: no-repeat;
  background-size: 100% 95%;
  padding: 8px 0;
}

.main-title{
  padding-top: 10vh;
  font-family: 'Karantina';
  font-size: 8vw;
  color:gainsboro
}

.main-subtext {
  font-family: 'Josefin Sans';
  font-size: 40px;
  color:gainsboro
}

.profile {
  display: inline-block;
  width: 300px;
  height: 300px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.profile-pic-1 {
  background-image: url("../assets/images/menon-strength-profile.jpeg");
}


</style>
