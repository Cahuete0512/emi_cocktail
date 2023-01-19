<template>
  <div id="demo">
    <div class="containerCocktail">
      <div v-for="cocktail in cocktails.drinks" :key="cocktail" class="cocktail" >
        <!-- <p>{{cocktail.strDrink}}</p>-->
       <a href="DetailCocktail.vue"><img class="image" v-bind:src="cocktail.strDrinkThumb" title="cliquez pour avoir la recette"> </a>


      </div>
    </div>
  </div>
</template>





<!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://unpkg.com/vue@3"></script>-->


/*export default {

}*/
<script>
import axios from 'axios'
const constapiURL=
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";


export default {
  /*name: 'AlcoolCocktails',*/
  components: {},
  data() {
    return {
      cocktails: {},
    };
  },
  created: function () {
    this.fetchDataPromise()
  },
  methods: {
    fetchDataPromise: function () {
     const self = this;
      axios
          .get(constapiURL)
          .then(function (response) {
            console.log(response.data);
            self.cocktails = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
    },
  },

};

</script>

<style lang="css" scoped src="../style/AlcoolCocktailsStyle.css"></style>
