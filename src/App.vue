<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <body class="text-center">
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Yara</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Bem-vindo!</h1>
        <p class="lead">Essa é a versão Vue do template “Cover”.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Começar</a>
        </p>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Template adaptado de <a href="https://getbootstrap.com/">Bootstrap</a>.</p>
        </div>
      </footer>
    </div>
  </body>
</template>
