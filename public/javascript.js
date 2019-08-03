$("#submit").on("click",function(e){
    e.preventDefault();

    var newBurger = {
        burger_name : $("#inputdata").val().trim(),
        devoured : 0
    };

    $.ajax("/index", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
    );
})

$(".devoure").on("click",function(e){
    e.preventDefault();
    var idB = $(this).attr('data-id');
   console.log(idB)
    var burgerId = { id : idB };
    


    $.ajax("/index", {
        type: "PUT",
        data: burgerId
      }).then(function() {
          console.log("changed to devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
})