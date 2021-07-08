function checkModal() {
    "true" != Cookies.get("modal") ? ($body.removeClass("modal-open"), $body.css("padding-right", "21px"), $modal.addClass("d-block")) : "function" == typeof checkIfInViewInit && checkIfInViewInit();
}

function revealModal() {
    ($body = $(document.body)), ($modal = $("#modal"));
    var $modalClose = $(".modal-close");
    var $cookieModal = Cookies.get("modal");
    var $ageGate = $("#age-gate");
    if(!$ageGate.hasClass('open') && $cookieModal !== "true") {
        $("#modal").css({ display: "none" });
    }


    if ($cookieModal !== "true") {
    $body.addClass("modal-open");
    $("#modal").css({ display: "block" });
    };
    
    $modalClose.on("click", function () {
        return (
            Cookies.set("modal", "true", { expires: 1 }),
            $body.removeClass("modal-open"),
            $body.attr("style", ""),
            $modal.removeClass("d-block"),
            $modal.addClass("d-none"),
            $("#modal").css({ visibility: "visible", opacity: "1" }), !1,
            "function" == typeof checkIfInViewInit && checkIfInViewInit(),
            !1
        );
    });
 
}

$(document).ready(function () {
    if(!$ageGate.hasClass('open')) {
        revealModal();
    }
});
