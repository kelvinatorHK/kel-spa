<template>
  <div>
    <ns-header></ns-header>
    <nuxt />
    <ns-footer></ns-footer>
  </div>
</template>

<style>
    html, body {
        overscroll-behavior: none;
        /* TODO: why is this not working in common-transition-styles? */
        margin: 0;
    }
    .container{
        margin: 40px auto 0;
    }
    @media (min-width: 1024px) {
        .container{
            width: 994px;
        }
    }
    @media (min-width: 1440px) {
        .container{
            width: 1410px;
        }
    }
</style>