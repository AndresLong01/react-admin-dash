import axios from "axios"

export default {
  searchPoke: function () {
    return axios.get("https://pokeapi.co/api/v2/pokemon/mewtwo")
  }
}