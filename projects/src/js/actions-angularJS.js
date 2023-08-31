var appHome = angular.module("actions", []).config(function($sceProvider) {
    $sceProvider.enabled(false);
});
appHome.controller("actionsController", function($scope, $http, $sce) {
    (function($) {
        $.noConflict();
        console.log("cargando codigo angular:::");
        console.log("hola mundo");
        $(document).ready(function() {
            $(".btn-red").click(function() {
                console.log("ocultando alert:::");
                $(".alertSimple").show("slow");
                setTimeout(function() {
                    $(".alertSimple").hide("slow");
                }, 1000);
            });
            var html = "";
            for (var i = 0; i < 20; i++) {
                console.log("creando:::" + i);
                html += '<div class="alert alert-primary elementoDin-' + i + ' role="alert" id="elementoDin-' + i + '">elemento ' + i + ' <span class="close" style="background-color:red; color: white;">x</span></div>';
            };
            $("#divDinamic").html(html);
            $(".divDinamic").on('click', '.alert .close', function() {
                var id = $(this).attr('id');
                var elemento = $(this).parent();
                elemento.attr("style", "background-color: orange;")
                setTimeout(function() {
                    elemento.hide("slow");
                }, 1500)
            });
            ///////////
        });
        $scope.arrayFrutas=[
        	{"nombre":"lima","color": "verde"},
        	{"nombre":"naranja","color": "naranja"},
        	{"nombre":"toronja","color": "rosa"}
        ]
        $scope.clickAngular=function(){
        	console.log("holaaaa:::::::");
        };
        ///fin de codigo jquery
    })(jQuery);
});