<template>
  <div id="app">
    <div class="nav">
      <input type="checkbox" id="nav-check">
      <div class="nav-header">
        <div class="nav-logo">
          <img id="logo" src="@/assets/appLogo.png" alt="EMI-Cocktail logo">
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <ul class="navigation">
          <li>
            <Router-link class="link" :to="{name: 'RandomCocktail'}" text="Accueil"></Router-link>
          </li>
          <li>
            <Router-link class="link" :to="{name: 'AlcoolCocktails'}" text="Cocktails avec alcool"></Router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

