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

    var setView = function (view) { universe.removeClass().addClass(view)};
    var popup = $("#popup");

    // Define an array of texts for each planet
    var planetTexts = {
        mercury: ["Mercury is the closest planet to the Sun in our solar system.",
            "It has extreme temperature variations, with scorching hot temperatures during the day and freezing cold temperatures at night.",
            "Despite its proximity to the Sun, Mercury does not have a significant atmosphere to trap heat."],
        venus:["Venus is often called Earth's sister planet due to its similar size and mass.", 
        "It has a thick atmosphere primarily composed of carbon dioxide, creating a runaway greenhouse effect and making it the hottest planet in our solar system."
        , "Venus rotates on its axis very slowly, taking longer to complete one rotation than it does to orbit the Sun"
        ], 
        earth: ["Earth is the only known planet to support life.", "It has a diverse range of ecosystems, climates, and landforms.", "Earth's atmosphere contains approximately 21% oxygen, crucial for sustaining life as we know it"], 
        mars: ["Mars is often called the Red Planet due to the iron oxide on its surface, giving it a reddish appearance", "It has the tallest volcano and the deepest canyon in our solar system, Olympus Mons and Valles Marineris, respectively.", "Scientists have found evidence suggesting that liquid water may have existed on Mars in the past"
        ],
        jupiter: ["Jupiter is the largest planet in our solar system and has a strong magnetic field", "It has a prominent feature called the Great Red Spot, a massive storm that has been raging for at least 350 years", "Jupiter has a large number of moons, with the four largest known as the Galilean moons: Io, Europa, Ganymede, and Callisto."], 
        saturn: ["Saturn is famous for its stunning ring system, composed of ice and rock particles.", "It is the least dense of all the planets, and if you could find a bathtub large enough, Saturn would float", "Saturn has a hexagonal-shaped storm at its north pole, discovered by the Cassini spacecraft"],
        uranus: ["Uranus is unique among the planets because it rotates on its side, likely due to a massive collision early in its history", "It has a pale blue color, attributed to the presence of methane in its atmosphere", "Uranus was the first planet discovered with a telescope, by German-born British astronomer Sir William Herschel in 1781."]
       ,neptune: ["Neptune is the farthest planet from the Sun in our solar system", "It has the fastest winds in the solar system, reaching speeds of up to 1,500 miles per hour", "Neptune's blue color is also attributed to methane in its atmosphere, similar to Uranus"], 
        sun: ["The Sun is a giant ball of hot, ionized gas, primarily composed of hydrogen (about 74%) and helium (about 24%)", "The Sun is about 100 times wider than Earth and about 10 times wider than Jupiter, the biggest planet.", "The Sun is the only star in our solar system", "The Sun goes through an approximately 11-year solar cycle"]
    };

    var quizzes = {
        mercury: ["Mercury is the hottest planet in our solar system ", "True", "You are correct!!", "You are wrong :("], 
        venus: ["Venus rotates on its axis in the opposite direction compared to most planets", "True", "You are correct!!", "You are wrong :("],
        earth : ["Earth's moon is the largest moon in the solar system", "False", "You are wrong :(", "You are correct!!"],   
        mars : ["Mars has the tallest volcano and the deepest canyon in our solar system.", "True", "You are correct!!", "You are wrong :("],
        jupiter: ["Jupiter is the smallest planet in our solar system", "False", "You are wrong :(", "You are correct!!"],
        saturn: ["Saturn's stunning ring system is made of solid gold", "True", "You are correct!!", "You are wrong :("],
        uranus: ["Uranus is the largest planet in our solar system", "False", "You are wrong :(", "You are correct!!"],
        neptune: ["Neptune's atmosphere contains a significant amount of methane, giving it a blue color", "True", "You are correct!!", "You are wrong :("],
        sun: ["The Sun is a solid, rocky body", "False", "You are wrong :(", "You are correct!!"]
    };

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


    var trueAlert = "true alert";
    var falseAlert = "false alert";
    var currPlanet = "sun";
    // var nextPlanet = "mercury";

    function clickPlanet(element, e) {
        var planet = $(element).attr("name");
        console.log("Clicked on planet:", planet);
        solarsys.removeClass().addClass(planet);
        $(element).parent().find('a').removeClass('active');
        $(element).addClass('active');

        createPopup(planet);
        // $("#popup h2").text("Information about " + planet);
        changeAlert(planet)
        currPlanet = planet;;
        // popup.show();
        e.preventDefault();
    };


    function createPopup(planet) {
        popup.show();
        // $("#popup h2").text("Information about " + planet);
        $("#popup-image").attr("src", "./assets/images/" + planet + ".gif");
        $("#popup-fact1").text(planetTexts[planet][0] || "No information available.");
        $("#popup-fact2").text(planetTexts[planet][1] || "No information available.");
        $("#popup-fact3").text(planetTexts[planet][2] || "No information available.");
        $("#popup-quiz").text(quizzes[planet][0] || "No quiz available.");
        console.log(planet.toUpperCase())
        $("#popup h2").text(planet.toUpperCase());

    }

    $("#closePopup").click(function() {
        console.log("Closing popup");
        popup.hide();
    });

    function switchPlanet() {
        switch (currPlanet) {
          case "sun":
            currPlanet = "mercury";
            break;
          case "mercury":
            currPlanet = "venus";
            break;
          case "venus":
            currPlanet = "earth";
            break;
          case "earth":
            currPlanet = "mars";
            break;
          case "mars":
            currPlanet = "jupiter";
            break;
          case "jupiter":
            currPlanet = "saturn";
            break;
          case "saturn":
            currPlanet = "uranus";
            break;
          case "uranus":
            currPlanet = "neptune";
            break;
          case "neptune":
            currPlanet = "sun";
            break;
          default:
            break;
        }
    }

    $("#nextPopup").click(function () {
        console.log("next popup");
        switchPlanet();
        createPopup(currPlanet);
    });

    function changeAlert(planet){
        trueAlert = quizzes[planet][2];
        falseAlert = quizzes[planet][3];
    }

    $("#truebtn").click(function(){
        console.log("true was clicked");
        alert(trueAlert);

    });

    $("#falsebtn").click(function(){
        console.log("false was clicked");
        alert(falseAlert);
    });

});
