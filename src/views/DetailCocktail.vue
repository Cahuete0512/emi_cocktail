<template>
  <div class="card">
    <div v-if="cocktail.strDrinkThumb" class="cocktailPicture">
      <img v-bind:src="cocktail.strDrinkThumb" alt="photo du cocktail">
    </div>
    <div class="container">
      <div v-if="cocktail.strDrink" class="title">
        <div>Cocktails {{ cocktail.strDrink.toUpperCase() }}</div>
      </div>&nbsp;
      <div class="date" v-if="cocktail.dateModified">
        {{ cocktail.dateModified }}
      </div>&nbsp;
      <div class="content">
        <div class="ingredient">
          <h3> Ingrédients : </h3>
          <ul>
            <li class="ingredient" v-if="cocktail.strMeasure1 || cocktail.strIngredient1">
              {{ `${cocktail.strMeasure1} ${cocktail.strIngredient1}` }}
            </li>
            <br/>
            <li class="ingredient" v-if="cocktail.strMeasure2 || cocktail.strIngredient2">
              {{ `${cocktail.strMeasure2} ${cocktail.strIngredient2}` }}
            </li>
            <br/>
            <li class="ingredient" v-if="cocktail.strMeasure3 || cocktail.strIngredient3">
              {{ `${cocktail.strMeasure3} ${cocktail.strIngredient3}` }}
            </li>
            <br/>
            <li class="ingredient" v-if="cocktail.strMeasure4 || cocktail.strIngredient4">
              {{ `${cocktail.strMeasure4} ${cocktail.strIngredient4}` }}
            </li>
            <br/>
          </ul>
        </div>&nbsp;
        <div class="instructions">
          <h3> Instructions : </h3>
          <ol>
            <li>
              {{ cocktail.strInstructions }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

const apiURL =
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  export default {
    components: {},
    props: ['id'],
    data() {
      return {
        cocktail: {}
      };
    },
    created: function () {
      this.fetchDataAsync();
    },
    methods: {
      fetchDataAsync: async function () {
        try {
          const response = await axios.get(apiURL + this.id)
          console.log(response.data)
          console.log(this.$route.query.id)
          this.cocktail = response.data.drinks[0]
        } catch (error) {
          console.log(error);
        }
      },
    },
};
</script>

<style lang="css" scoped src="../style/RandomStyle.css"></style>