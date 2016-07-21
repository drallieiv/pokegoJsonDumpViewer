VIEWER = {

  data: null,


  load: function(rawData){
    rawData = rawData.replace("Response dictionary:", "");
    this.data = JSON.parse(rawData);

    // items
    var items = this.data.responses.GET_INVENTORY.inventory_delta.inventory_items;

    // Extract Pokemon List
    this.pokemons = [];

    for (var i=0; i < items.length; i++){
      var item = items[i];
      if(item.inventory_item_data.pokemon !== undefined && item.inventory_item_data.pokemon.is_egg !== true){
        var pokemon = item.inventory_item_data.pokemon;
        this.computeInfo(pokemon);
        this.pokemons.push(pokemon);
      }
    }
  },

  computeInfo: function(pokemon){
    pokemon.nameFr = this.namesFr[pokemon.pokemon_id];
    pokemon.individual_defense = pokemon.individual_defense || 0;
    pokemon.individual_attack = pokemon.individual_attack || 0;
    pokemon.individual_stamina = pokemon.individual_stamina || 0;
    pokemon.ivPct = Math.floor(100 * (pokemon.individual_defense + pokemon.individual_attack + pokemon.individual_stamina) / 45);

    pokemon.ivPctRate = (pokemon.ivPct > 90) ? "best" : (pokemon.ivPct > 80) ? "good" : "bof";
  },

  getPokemons: function(){
    return {"pokemon" : this.pokemons};
  },

  // Sort By CP then ID
  sortPokemon: function(){

    var byCP = function(a,b){
      if (a.cp < b.cp){
          return -1;
      }

      if (a.cp > b.cp){
        return 1;
      }
      return 0;
    }

    var byPokemonId = function(a,b){
      if (a.pokemon_id < b.pokemon_id){
          return -1;
      }

      if (a.pokemon_id > b.pokemon_id){
        return 1;
      }
      return 0;
    }

    this.pokemons = this.pokemons.sort(byCP);
    this.pokemons = this.pokemons.sort(byPokemonId);
  },

  namesFr: [
    "missingo",
    "Bulbizarre",
    "Herbizarre",
    "Florizarre",
    "Salamèche",
    "Reptincel",
    "Dracaufeu",
    "Carapuce",
    "Carabaffe",
    "Tortank",
    "Chenipan",
    "Chrysacier",
    "Papilusion",
    "Aspicot",
    "Coconfort",
    "Dardargnan",
    "Roucool",
    "Roucoups",
    "Roucarnage",
    "Rattata",
    "Rattatac",
    "Piafabec",
    "Rapasdepic",
    "Abo",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sabelette",
    "Sablaireau",
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen",
    "Nidoran♂",
    "Nidorino",
    "Nidoking",
    "Mélofée",
    "Mélodelfe",
    "Goupix",
    "Feunard",
    "Rondoudou",
    "Grodoudou",
    "Nosferapti",
    "Nosferalto",
    "Mystherbe",
    "Ortide",
    "Rafflésia",
    "Paras",
    "Parasect",
    "Mimitoss",
    "Aéromite",
    "Taupiqueur",
    "Triopikeur",
    "Miaouss",
    "Persian",
    "Psykokwak",
    "Akwakwak",
    "Férosinge",
    "Colossinge",
    "Caninos",
    "Arcanin",
    "Ptitard",
    "Têtarte",
    "Tartard",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machoc",
    "Machopeur",
    "Mackogneur",
    "Chétiflor",
    "Boustiflor",
    "Empiflor",
    "Tentacool",
    "Tentacruel",
    "Racaillou",
    "Gravalanch",
    "Grolem",
    "Ponyta",
    "Galopa",
    "Ramoloss",
    "Flagadoss",
    "Magnéti",
    "Magnéton",
    "Canarticho",
    "Doduo",
    "Dodrio",
    "Otaria",
    "Lamantine",
    "Tadmorv",
    "Grotadmorv",
    "Kokiyas",
    "Crustabri",
    "Fantominus",
    "Spectrum",
    "Ectoplasma",
    "Onix",
    "Soporifik",
    "Hypnomade",
    "Krabby",
    "Krabboss",
    "Voltorbe",
    "Électrode",
    "Nœunœuf",
    "Noadkoko",
    "Osselait",
    "Ossatueur",
    "Kicklee",
    "Tygnon",
    "Excelangue",
    "Smogo",
    "Smogogo",
    "Rhinocorne",
    "Rhinoféros",
    "Leveinard",
    "Saquedeneu",
    "Kangourex",
    "Hypotrempe",
    "Hypocéan",
    "Poissirène",
    "Poissoroy",
    "Stari",
    "Staross",
    "M. Mime",
    "Insécateur",
    "Lippoutou",
    "Élektek",
    "Magmar",
    "Scarabrute",
    "Tauros",
    "Magicarpe",
    "Léviator",
    "Lokhlass",
    "Métamorph",
    "Évoli",
    "Aquali",
    "Voltali",
    "Pyroli",
    "Porygon",
    "Amonita",
    "Amonistar",
    "Kabuto",
    "Kabutops",
    "Ptéra",
    "Ronflex",
    "Artikodin",
    "Électhor",
    "Sulfura",
    "Minidraco",
    "Draco",
    "Dracolosse",
    "Mewtwo",
    "Mew",
  ],
}
