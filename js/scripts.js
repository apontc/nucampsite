//<!--Can also be $(document).ready(function(){           
        
//});-->

    $(function() {
        $(".carousel").carousel( {interval: 2000} );
        $("#carouselButton").click(function(){          //changed from $("#carouselPause").click(function(){//
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {           //$(".carousel").carousel("pause"); });//
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
            }
            else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
            }
        });
        // $("#carouselPlay").click(function(){
        //     $(".carousel").carousel("cycle");
        // });
    });
