$( document ).ready(function() {
    let search = "";
    let limit = 1;
    let beginYear = "";
    let endYear = "";
    //let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +search  +"&begin_date=" +beginDate +"&end_date=" +endDate + "&api-key=4T4JAn6PPSJW7c7RpRNUgAK4qSQQxGio";

    function articleSearch () {const queryParams ={
        q: search,
        "api-key": "4T4JAn6PPSJW7c7RpRNUgAK4qSQQxGio"
    };

    if (beginYear != "") {
        queryParams.begin_date = beginYear +"0101";
    }

    if (endYear !== "") {
        queryParams.end_date = endYear +"1231";
    }

    const paramString = $.param(queryParams);

    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + paramString;

    console.log(queryURL);

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then (function(response){

        for (let i =0; i < limit; i++) {
        
        console.log(response.response.docs[i].headline.main);

        }


    })}

    $("button").on("click", function (){

        event.preventDefault();
        articleSearch();

        search = $("#search").val().trim();
        limit = parseInt($("#limit").val());
        beginYear = $("#beginYear").val();
        endYear = $("#endYear").val();
       


    });




});