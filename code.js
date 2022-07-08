$(document).ready(() => {
    const sendRequest = (type) => {
        const url = `http://numbersapi.com/random/${type}?json`

        $.get(url, function(response) {
            $("#fact-header").text("Number: " + response.number);
            $("#fact-text").text(response.text);
        })
    }

    $("#button1").click(function (e){
        sendRequest("trivia")
    })
    $("#button2").click(function (e){
        sendRequest("math")
    })
    $("#button3").click(function (e){
        sendRequest("year")
    })
})