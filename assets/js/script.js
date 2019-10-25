$( document ).ready(function() {
    let search = "election";
    let limit = 3;
    let beginYear = "2019";
    let endYear = "2019";
    let beginDate = beginYear +"0101";
    let endDate = endYear+"1231";
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +search  +"&begin_date=" +beginDate +"&end_date=" +endDate + "&api-key=4T4JAn6PPSJW7c7RpRNUgAK4qSQQxGio";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then (function(response){

        for (let i =0; i < limit; i++) {
        
        console.log(response.response.docs[i]);

        }


    })




});