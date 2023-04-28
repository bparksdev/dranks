// const axios = require('axios');
// const url = require('url');
// const querystring = require('querystring');

// const urlParams = new URLSearchParams(url.parse(process.argv[2]).query);
// const params = Object.fromEntries(urlParams.entries());

// if(params.drinkID) {
//     getDetails(params.drinkID);
// }

// function getResults(searchTerm, type) {
//     const uri = type === "1" ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}` : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
//     axios.get(uri)
//         .then(response => {
//             let data = response.data;

//             let resultHTML = "<div class='row'>";
//             for(let x=0; x<data.drinks.length; x++) {
//                 resultHTML += `<div class='col-sm-2'><div class='card' id=${data.drinks[x].idDrink}><div class='card-header detail-link'>${data.drinks[x].strDrink}</div>`;
//                 resultHTML += `<div class='card-body'><a href='?drinkID=${data.drinks[x].idDrink}'><img src=${data.drinks[x].strDrinkThumb} style="width:100%" /></a></div></div></div>` 
//             }
//             resultHTML += "</div>"
//             //console.log(data)

//             $("#results").html(resultHTML)
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// function getDetails(drinkID) {
//     $("#results").html("");

//     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`)
//         .then(response => {
//             let data = response.data;

//             $("#drinkName").html(data.drinks[0].strDrink);
//             $("#instructions").html(data.drinks[0].strInstructions);
//             $("#picture").prop("src", data.drinks[0].strDrinkThumb)
//             $("#glass").html(data.drinks[0].strGlass);
//             let ingArray = [];
//             for(let i=1; i<15; i++) {
//                 let ing = "strIngredient" + i;
//                 let meas = "strMeasure" + i;
//                 if(data.drinks[0][ing]) {
//                     if(data.drinks[0][meas] != null) {
//                         ingArray.push(data.drinks[0][meas] + " " + data.drinks[0][ing] + " <br /> ")

//                     } else {
//                         ingArray.push( data.drinks[0][ing] + " &middot; ")
//                     }
//                 }
//             }
//             //console.log(ingArray)
//             $("#ingredients").html(ingArray)
//             $("#card-details").show()
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

new Vue({
    el: "#app",
    data: {
        results: null,
        byName: "",
        byIngredient: ""
    },
    methods:{
        getResults() {
            let teamworkUserID = '';

            if( event.target !== undefined) {
                teamworkUserID = event.target.value;
            };
            alert("here");
            console.log(this.byName);

            // let payload = {
            //     params: {
            //         'responsible-party-ids': teamworkUserID,
            //         'sort': 'duedateDESC'
            //     },
            //     headers: {
            //         'content-type': 'application/json',
            //         'Authorization': 'Basic ' + apiKey
            //     }
            // };

            // axios
            //     .get('https://meetingplay.teamwork.com/tasks.json', payload )
            //     .then(res => {
            //         this.tasks = res.data["todo-items"];
            //     })
        }
    }
});
