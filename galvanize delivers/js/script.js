$( document ).ready(function() {
    
    var total = 0;
    var arr =[0];
    $( ".card" ).on( "click", function() {
        event.preventDefault();
        var food = $(this).find('h4').text();
        var price = $(this).find('p').text();
        $( "#log" ).prepend(
            `<li class="left"><h4>` + food + `</h4></li>`+
            `<li class="right"><h5 class="right">`+ price +`</h5></li></br>`
        );
        $('h5:first').each(function() {
            total += Number($(this).text());
        });
        var tax = total*0.15;
        tot = tax + total;
     

        $( "#totalCost" ).html(Math.round(total));
        $( "#tax" ).html(Math.round(tax));
        $( "#tot" ).html(Math.round(tot));
       
    });
    $( "#submit" ).on( "click", function() {
        event.preventDefault();
        var name = $( "#exampleInputEmail1" ).val();
        var phone = $( "#phone" ).val();
        var address = $( "#address" ).val();
        alert("Thank "+name+ " your total is");
    });
    
});


