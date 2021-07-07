<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg navbar-dark" id="mainNav">
      <div class="container px-4 px-lg-5">
        <g-link class="navbar-brand" 
        :to="{ name: 'home' }">
          <g-image class="logo" src="/img/deer.png"/>
        </g-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto py-4 py-lg-0">
            <li class="nav-item">
              <g-link
                class="nav-link px-lg-3 py-3 py-lg-4"
                :to="{ name: 'home' }"
                exact
                >Home</g-link
              >
            </li>        
            <li class="nav-item">
              <g-link class="nav-link px-lg-3 py-3 py-lg-4" to="/contact"
                >Contact Me
              </g-link>
            </li>
              
          </ul>
        </div>
      </div>
    </nav>
    <slot />
    <!-- Footer-->
    <footer class="border-top">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <ul class="list-inline text-center">

              <li class="list-inline-item">
                <a href="https://github.com/2267303589" target="_blank">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div class="small text-center text-muted fst-italic">
              Copyright &copy; Your Website 2021
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
