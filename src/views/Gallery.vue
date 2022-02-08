<template>
  <div class="row scroll">
    <div class="col-md-12">
      <div class="grid">
        <img v-for="image in images" :key="image.url" v-bind:src="image.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.importAll(require.context("../assets/images/gallery", true, /\.png$/));

    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      const lightbox = document.createElement("div");
      lightbox.id = "lightbox";
      document.body.appendChild(lightbox);
      const imageElements = document.querySelectorAll("img");
      imageElements.forEach((image) => {
        image.addEventListener("click", (e) => {
          console.log(e);
          lightbox.classList.add("active");
          const img = document.createElement("img");
          img.src = image.src;
          while (lightbox.hasChildNodes()) {
            lightbox.removeChild(lightbox.firstChild);
          }
          lightbox.appendChild(img);
        });
      });

      lightbox.addEventListener("click", (e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        lightbox.classList.remove("active");
      });
    });
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ url: r(key), pathShort: key })
      );
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center;
  align-content: center;
  grid-gap: 10px;
  height: 95vh;
  cursor: pointer;
  overflow-y: scroll;
  background-color: #000000;
  padding-top: 30vh;
}

.grid img {
  width: auto;
  height: 200px;
}

#lightbox {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
}

#lightbox.active {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
