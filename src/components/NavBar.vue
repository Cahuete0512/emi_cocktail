<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo">EMI-Cocktail</div>
      <div id="menu">
        <Router-link to = "/" text="Accueil"></Router-link>
        <Router-link to = "/alcoolCocktails" text="Cocktails avec alcool"></Router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
