$( document ).ready(function() {
    let search = "election";
    let limit = 3;
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +search  + "&api-key=4T4JAn6PPSJW7c7RpRNUgAK4qSQQxGio";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then (function(response){

        for (let i =0; i < limit; i++) {
        
        console.log(response.response.docs[i]);

        }


    })




});