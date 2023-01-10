<template>
  <div id="demo">
    <div class="containerCocktail">
      <div v-for="cocktail in cocktails.drinks" :key="cocktail" class="cocktail" >
        <!-- <p>{{cocktail.strDrink}}</p>-->
        <img class="image" v-bind:src="cocktail.strDrinkThumb" title="cliquez pour avoir la recette">


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

<style>
#demo {
  font-family: "Helvetica", Arial, sans-serif;
}
.containerCocktail {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border-radius: 200px;
}

.image{
  width: 500px;
  height: 500px;
 /* border-radius: 50%;*/
  margin: 50px;
}
.image:hover{
  filter: grayscale(100%);
}
</style>