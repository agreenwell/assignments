var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var pokemonList = data.objects[0].pokemon;
        var pokeItems = data.items;
        for (var i = 0; i < pokemonList.length; i++) {
        
        document.getElementById("pokemon").innerHTML += `<h3>${pokemonList[i].name}</h3>`;
        }
    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");
xhr.send();
