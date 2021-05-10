
function checkConsent() {
    "true" != Cookies.get("consent") ? ($("#consent").css({ display: "none" })) : "function" == typeof checkIfInViewInit && checkIfInViewInit();
}



$(document).ready(function () {
     
    ($body = $(document.body)), ($consentGate = $("#consent"));
    var $btnConsentGateConfirm = $(".button--accept"),
        $btnConsentGateReject = $(".button--decline");
    var $consent = Cookies.get("consent");
    //console.log($consent);

    $("#consent").css({ display: "none" });

    if ($consent != "true") {
      $("#consent").css({ display: "block" });
    };
    
 
        
        $btnConsentGateConfirm.on("click", function () {
            return (
                Cookies.set("consent", "true", { expires: 365 }),
                $("#consent").css({ display: "none" }),
                "function" == typeof checkIfInViewInit && checkIfInViewInit(),
                !1
            );
        }),
        $btnConsentGateReject.on("click", function () {
            $("#consent").css({ display: "none" });
        });
        
    
        
});
