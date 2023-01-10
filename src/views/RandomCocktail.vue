<template>

  <fieldset>
    <legend>Selectionnez une langue pour les instructions :</legend>
    <div>
      <input type="radio" id="french" value="french" v-model="cocktail.selectedLangage"/>
      <label for="french">Français</label>
    </div>
    <div>
      <input type="radio" id="english" value="english" v-model="cocktail.selectedLangage"/>
      <label for="english">Anglais</label>
    </div>
    <div>
      <input type="radio" id="german" value="german" v-model="cocktail.selectedLangage"/>
      <label for="german">Allemand</label>
    </div>
    <div>
      <input type="radio" id="italian" value="italian" v-model="cocktail.selectedLangage"/>
      <label for="italian">Italien</label>
    </div>
  </fieldset>
  <div class="card">
    <div v-if="cocktail.strDrinkThumb" class="cocktailPicture">
      <img v-bind:src="cocktail.strDrinkThumb" alt="photo du cocktail">
    </div>
    <div class="container">
      <div v-if="cocktail.strDrink" class="title">
        <h1>Cocktails {{ cocktail.strDrink.toUpperCase() }}</h1>
      </div>&nbsp;
<!--      TODO : Reformat date-->
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
            <!--display of instructions in French-->
            <li v-if="cocktail.selectedLangage === 'french' && cocktail.strInstructionsFR !== null">
              {{ cocktail.strInstructionsFR }}
            </li>
            <!--display of instructions in English-->
            <li v-if="cocktail.selectedLangage === 'english' && cocktail.strInstructions !== null">
              {{ cocktail.strInstructions }}
            </li>
            <!--display of instructions in German-->
            <li v-if="cocktail.selectedLangage === 'german' && cocktail.strInstructionsDE !== null">
              {{ cocktail.strInstructionsDE }}
            </li>
            <!--display of instructions in Italian-->
            <li v-if="cocktail.selectedLangage === 'italian' && cocktail.strInstructionsIT !== null">
              {{ cocktail.strInstructionsIT }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment';

const apiURL =
    "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export default {
  components: {},
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
        if (response.data.drinks[0] !== null && response.data.drinks[0] !== undefined) {
          this.cocktail = response.data.drinks[0]
          this.cocktail.selectedLangage = "english";
        }
      } catch (error) {
        console.log(error);
      }
    },
    dateReformat(value) {
      return moment(value).format("DD-MM-YYYY");
    }
  },
};
</script>
