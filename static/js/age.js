function checkCookie() {
    "true" != Cookies.get("adult") ? ($body.removeClass("modal-open"), $body.css("padding-right", "21px"), $ageGate.addClass("d-block")) : "function" == typeof checkIfInViewInit && checkIfInViewInit();
}



$(document).ready(function () {
     
    ($body = $(document.body)), ($ageGate = $("#age-gate"));
    var $btnAgeGateConfirm = $(".age-gate-yes"),
        $btnAgeGateReject = $(".age-gate-no");
    var $adult = Cookies.get("adult");
    //console.log($adult);

    if ($adult != "true") {
      $body.addClass("modal-open");
      $("#age-gate").css({ display: "block" });
    };
    
 
        
        $btnAgeGateConfirm.on("click", function () {
            return (
                Cookies.set("adult", "true", { expires: 15 }),
                $body.removeClass("modal-open"),
                $body.attr("style", ""),
                $ageGate.removeClass("d-block"),
                $ageGate.addClass("d-none"),
                "function" == typeof checkIfInViewInit && checkIfInViewInit(),
                !1
            );
        }),
        $btnAgeGateReject.on("click", function () {
            return $("#age-limit").css({ visibility: "visible", opacity: "1" }), !1;
        });
        
    
        
});
