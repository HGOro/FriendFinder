$(document).ready(function(){

    $("#submit").on("click", function(event){
        /*
        ids:
        name
        photo
        question1-question10
        submit
        */
       var userData = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: []
     }

       $("select").each(function() {
           if($(this).val() !== ""){
             userData.scores.push($(this).val());
           }
        });

        if(userData.name.length > 0 && userData.photo.length > 0 && userData.scores.length === 10){

                 //console.log(userData);
            console.log("loading");
            $.post("/api/friends", userData, function(match){
                //console.log(match.photo);
                $(".modal-body").empty();
                //matchModal - modal-body
                //text
                //image & name
                var header = $("<h3>").text("Your match is...");
                var img = $("<img>").attr("src", match.photo).attr("alt", "best match")
                var name = $("<p>").text(match.name);
            
                $(".modal-body").append(header, img, name);
                $("#matchModal").modal("show");
            
                //console.log(response)
            });
        }else {
            $(".modal-body").empty();
            var error = $('<h2>').text('Check your inputs an try again');
            $(".modal-body").append(error);
            $("#matchModal").modal("show");
            return
        }

        
    })

})
