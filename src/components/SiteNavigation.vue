<template>
  <div>
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs align="left">
          <b-nav-item to="/stocks">STOCKS</b-nav-item>
          <b-nav-item to="/fx">FX</b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card-body>
        <RouterView />
      </b-card-body>
    </b-card>


  </div>


</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

