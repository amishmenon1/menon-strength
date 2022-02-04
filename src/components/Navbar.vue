<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand nav-main-title" :href="publicPath"
        >MENON STRENGTH</a
      >
      <button
        class="custom-toggler navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon custom-toggler"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Me</router-link>
          </li>
          <li>&nbsp;&nbsp;</li>
          <li class="nav-item">
            <router-link class="nav-link" to="/reviews">Reviews</router-link>
          </li>
          <li>&nbsp;&nbsp;</li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gallery">Gallery</router-link>
          </li>
          <li>&nbsp;&nbsp;</li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pricing">Pricing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/start-training"
              >Start Training</router-link
            >
          </li>
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="nav-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
          <!-- <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li> -->
        </ul>
        <!-- <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="search btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return {
      publicPath: "/menon-strength/",
    };
  },
};
</script>

<style>
nav {
  background-color: #000000;
}

nav a {
  /* color: #00ff00; */
  color: gainsboro;
  font-weight: normal;
  font-size: larger;
}

#navbarSupportedContent a {
  /* color: #00ff00; */
  color: gainsboro;
  font-weight: normal;
  font-size: larger;
}

button.search {
  /* color: #00ff00; */
  color: gainsboro;
  font-weight: normal;
  font-size: larger;
}

ul.nav-dropdown {
  background: #000000;
}

nav li:hover {
  background: gray;
}

nav a.dropdown-item:hover {
  background: gray;
}

.nav-main-title {
  padding-top: 0.3125rem !important;
  font-family: "Karantina";
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 255, 55, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler .navbar-toggler {
  border-color: rgb(0, 255, 55);
}

/* need styles for disabled links */
</style>
