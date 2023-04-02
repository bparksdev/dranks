////function showDisplay() { 

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if(params.drinkID) {
        getDetails(params.drinkID)
    }

    function getResults(searchTerm, type) {
        uri = type == "1" ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}` : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
        $.ajax({
            url: uri,
            type: "GET",
        })
        .done(function(data) {
            
            $("#card-details").html("").hide();

            var resultHTML = "<div class='row'>";
            for(x=0; x<data.drinks.length; x++) {
                resultHTML += `<div class='col-sm-2'><div class='card' id=${data.drinks[x].idDrink}><div class='card-header detail-link'>${data.drinks[x].strDrink}</div>`;
                resultHTML += `<div class='card-body'><a href='?drinkID=${data.drinks[x].idDrink}'><img src=${data.drinks[x].strDrinkThumb} style="width:100%" /></a></div></div></div>` 
            }
            resultHTML += "</div>"
            console.log(data)

            $("#results").html(resultHTML)
        })
        .fail(function() {

        });
    }

    function getDetails(drinkID) {
        $("#results").html("")

        $.ajax({
            url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`,
            type: "GET",
        })
        .done(function(data) {
            //console.log(data)
            $("#drinkName").html(data.drinks[0].strDrink);
            $("#instructions").html(data.drinks[0].strInstructions);
            $("#picture").prop("src", data.drinks[0].strDrinkThumb)
            $("#glass").html(data.drinks[0].strGlass);
            var ingArray = [];
            for(i=1; i<15; i++) {
                ing = "strIngredient" + i;
                meas = "strMeasure" + i;
                if(data.drinks[0][ing]) {
                    if(data.drinks[0][meas] != null) {
                        ingArray.push(data.drinks[0][meas] + " " + data.drinks[0][ing] + " <br /> ")

                    } else {
                        ingArray.push( data.drinks[0][ing] + " &middot; ")
                    }
                }
            }
            console.log(ingArray)
            $("#ingredients").html(ingArray)
            $("#card-details").show()
        })
        .fail(function() {

        });
}