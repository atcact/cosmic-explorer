$(window).load(function () {

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    var init = function () {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function () {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    var setView = function (view) { universe.removeClass().addClass(view); };
    var popup = $("#popup");

    $("#toggle-data").click(function (e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function (e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function (e) {
        clickPlanet(this, e);
    }); 

    $("#solar-system a").click(function (e) {
        clickPlanet(this, e);
    });

  
    $(".set-zoom").click(function () { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function () { setView("scale-stretched set-speed"); });
    $(".set-size").click(function () { setView("scale-s set-size"); });
    $(".set-distance").click(function () { setView("scale-d set-distance"); });

    init();

    function clickPlanet(element, e) {
        var planet = $(element).attr("name");
        console.log("Clicked on planet:", planet);
        solarsys.removeClass().addClass(planet);
        $(element).parent().find('a').removeClass('active');
        $(element).addClass('active');
        // e.stopPropagation();
        $("#popup h2").text("Information about " + planet);
        popup.show();
        e.preventDefault();
        

    };

    // function closePopup() {
    //     console.log("Closing popup");
    //     popup.hide();
    // }

    // popup.find(".popup-btn").on("click", function (e) {
    //     e.stopPropagation(); // Prevent propagation to the background elements
    //     closePopup();
    // });

    $("#closePopup").click(function() {
        console.log("Closing popup");
        popup.hide();
    });

    // popup.find("#closePopup").on("click", closePopup);

    // function openPopup(planet){
    //     return(<h1>
    //         {planet}
    //     </h1>);
    // }

    //function
    // name of planet
    // planet speed, other things
    // close button
    // 


    

});