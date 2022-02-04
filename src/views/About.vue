<template>
  <div class="row">
    <div class="col-md-12">
      <div>
        <h1 class="aboutme-header">Meet Amish</h1>
        <div class="profile profile-pic-2"></div>
      </div>
      <div class="row highlight centered-div white-text text-align-left">
        <p class="highlight">
          UPDATE - due to health and safety concerns during the pandemic, I am
          only offering online sessions. These are monthly sessions ($120 per
          month) for which I offer:
        </p>
        <ol>
          <li>Custom programs specific to your fitness goal</li>
          <li>Reference videos for accuracy &amp; form</li>
          <li>Weekly updates based on your progress</li>
          <li>Unlimited Q&amp;A on health/fitness info</li>
          <li>Video based feedback</li>
        </ol>
        <p class="highlight">
          I'm a competitive powerlifter, former competitive tennis player,
          recreational bodybuilder, health &amp; fitness enthusiast, and online
          personal trainer.
        </p>
        <p class="highlight">
          Unlike other personal trainers, I will treat your fitness goals as if
          they are my own. Having placed 1st and 2nd in my last 2 powerlifting
          competitions, I've spent years learning from mistakes and correcting
          issues to further my fitness career. I am also grateful to have
          trained with some of the top powerlifters in the world. I will use
          everything I've learned and combine it with new research to ensure
          that you too can achieve your goals safely and properly.
        </p>

        <p class="highlight">
          Although I specialize in strength training, I love working with all
          types of clients - people looking to lose weight, get toned, improve
          their form, learn new exercises, or simply feel better about
          themselves. Whatever it is you need, I'll work hard with you to
          achieve it.
        </p>

        <p class="highlight">
          For those interested, here are my strength numbers:
        </p>
        <ul>
          <li>Bodyweight: 140lbs / 63.5kg</li>
          <li>Squat: 315lbs / 142kg</li>
          <li>Bench: 260lbs / 118kg</li>
          <li>Deadlift: 470lbs / 213kg</li>
          <li>WILKS: 384.46</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {},
};
</script>

<style scoped>
.aboutme-header {
  font-family: "Karantina";
  font-size: 8vw;
  color: gainsboro;
}

.centered-div {
  /* border: 5px solid #ffff00; */
  width: 50%;
  left: 50%;
  position: absolute;
  margin-right: -50%;
  transform: translate(-50%);
}

.random-corners {
  border-radius: 60% 40% 40% 20%;
}

.black-translucent-bg {
  background-color: #000000;
  opacity: 70%;
}

.white-text {
  color: white;
  font-weight: bold;
}

.text-align-left {
  text-align: left;
}

.highlight {
  background: url("../assets/other/brush-stroke-banner-7.png");
  background-repeat: no-repeat;
  background-size: 100% 95%;
  padding: 8px 0;
}

.profile {
  display: inline-block;
  width: 300px;
  height: 300px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* background-size: 154.33px 279.66px; */
}
.boat-profile {
  background-image: url("../assets/images/boat-profile.png");
}

.profile-pic-2 {
  background-image: url("../assets/images/gallery/7.png");
}
</style>
