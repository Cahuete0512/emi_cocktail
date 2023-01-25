<template>
  <div id="app">
    <div class="nav">
      <input type="checkbox" id="nav-check">
      <div class="nav-header">
        <div class="nav-logo">
          <img id="logo" src="@/assets/appLogo.png" alt="EMI-Cocktail logo">
        </div>
      </div>

      <div class="nav-links">
        <ul class="navigation">
          <li>
            <Router-link class="link" :to="{name: 'RandomCocktail'}" text="Accueil"></Router-link>
          </li>
          <li>
            <Router-link class="link" :to="{name: 'AlcoolCocktails'}" text="Cocktails avec alcool"></Router-link>
          </li>
          <li>
            <p class="link" @click="toggleNav()">Langue</p>
            <div class="langue" :class="{hidden: isActive === false}">
            <ul :class="{hidden: isActive === false}">
              <a href="#" class="link" :class="{orange: activeLanguage === 'french'}" v-on:click="selectLanguage('french')">Français</a>
              </ul>
              <ul :class="{hidden: isActive === false}">
                <a href="#" class="link" :class="{orange: activeLanguage === 'english'}" v-on:click="selectLanguage('english')">English</a>
              </ul>
              <ul :class="{hidden: isActive === false}">
                <a href="#" class="link" :class="{orange: activeLanguage === 'german'}" v-on:click="selectLanguage('german')">Deutsch</a>
              </ul>
              <ul :class="{hidden: isActive === false}">
                <a href="#" class="link" :class="{orange: activeLanguage === 'italian'}" v-on:click="selectLanguage('italian')">Italiano</a>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      activeLanguage : "english",
    }
  },
  methods: {
    toggleNav () {
      this.isActive = !this.isActive
    },
    selectLanguage (language){
      this.activeLanguage = language;
      this.$emit('language-select', language)
    }
  },
};
</script>

