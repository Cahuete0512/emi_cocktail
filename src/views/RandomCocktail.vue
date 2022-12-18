<template>
    <div id="apiCocktail">
      <div v-if="cocktail.strDrink">
        <h1 class="title">Cocktails {{ cocktail.strDrink.toUpperCase() }}</h1>
      </div>&nbsp;
      <div id="mesure">
        <h3> Ingrédients : </h3>
        <ul>
          <li v-if="cocktail.strMeasure1 || cocktail.strIngredient1">
            {{ `${cocktail.strMeasure1} ${cocktail.strIngredient1}` }}
          </li>
          <li v-if="cocktail.strMeasure2 || cocktail.strIngredient2">
            {{ `${cocktail.strMeasure2} ${cocktail.strIngredient2}` }}
          </li>
          <li v-if="cocktail.strMeasure3 || cocktail.strIngredient3">
            {{ `${cocktail.strMeasure3} ${cocktail.strIngredient3}` }}
          </li>
          <li v-if="cocktail.strMeasure4 || cocktail.strIngredient4">
            {{ `${cocktail.strMeasure4} ${cocktail.strIngredient4}` }}
          </li>
        </ul>
      </div>
      <div v-if="cocktail.strDrinkThumb" class="cocktailPicture">
        <img v-bind:src="cocktail.strDrinkThumb">
      </div>
      <div id="instructions">
        <h3> Instructions : </h3>
        <ol>
          <li v-if="cocktail.strInstructions">
            {{ cocktail.strInstructions }}
          </li>

          <li v-if="cocktail.strInstructionsDE">
            {{ cocktail.strInstructionsDE }}
          </li>

          <li v-if="cocktail.strInstructionsIT">
            {{ cocktail.strInstructionsIT }}
          </li>
        </ol>
      </div>
    </div>
</template>

<script>

import axios from 'axios'


const apiURL =
    "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export default {
  components: {
  },
  data() {
    return {
      cocktail: {},
    };
  },
  // permet de lancer des traitements au chargement de l’application (ou à la création du composant)
  created: function () {
    this.fetchDataAsync()
  },
  methods: {
    fetchDataAsync: async function () {
      try {
        const response = await axios.get(apiURL)
        console.log(response.data)
        // TODO : faire traitement pour ne récupérer que les données non null
        if(response.data.drinks[0] !== null) {
          this.cocktail = response.data.drinks[0]
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
