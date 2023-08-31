var ANG = angular.module("app", []).config(
		function($sceProvider) {
			$sceProvider.enabled(false);
		});

ANG.controller("ctl", function($scope, $http, $sce){
	$scope.param="";
	$scope.param=getParametroURL("q");
	$scope.active="";
	console.log("param:::"+$scope.param);
	$scope.cmp=[];
	$scope.getjson = function(){
		console.log("cargando json: ");
		$http.get("src/jsons/components.json").then(function(response){
			$scope.cmp = response.data;
			console.log($scope.cmp);
		}).catch(function(err){
			console.log(err.message);
		});
	};
	$scope.getjson();
	
	(function($){
		$.noConflict();
		function movePoints(){
				var i=1;
				var el="";
				setTimeout(function(){
					//animacion del primer elemento
					el=".point"+i;
					$(el).find(".img-point-alu").css({"width": "50px","display": "block"}).animate({
							        'width': '300px'
					},3500,function(){
						$(el).find(".img-point-alu").css({"display": "none"})
					});

					$(el).find(".loader-point").attr("style","background-color: #f75151");
					$(el).find(".loader-point").css({"width": "5px"}).animate({
							        'width': '100%','height':'5px'
				    },3500,function(){
				    	//callback de primer elemento
				    	//animacion del segundo elemento
				    	$(el).find(".loader-point").attr("style","background-color: grey");
				    	$(el).find(".loader-point").css({"width": "100%",'height':'5px'});
				    	i++
				    	el=".point"+i;
				    	$(el).find(".img-point-alu").css({"width": "50px","display": "block"}).animate({
							        'width': '300px'
						},3500,function(){
							$(el).find(".img-point-alu").css({"display": "none"})
						});
				    	console.log("changing::"+i);
				    	$(el).find(".loader-point").attr("style","background-color: #f75151");
				    	$(el).find(".loader-point").css({"width": "5px"}).animate({
							        'width': '100%','height':'5px'
				        },3500,function(){
				        	//callback de segundo elemento
				        	//animacion del tercer elemento
				        	$(el).find(".loader-point").attr("style","background-color: grey");
				    		$(el).find(".loader-point").css({"width": "100%",'height':'5px'});
				    		i++
				    		el=".point"+i;
				    		$(el).find(".img-point-alu").css({"width": "50px","display": "block"}).animate({
							        'width': '300px'
							},3500,function(){
								$(el).find(".img-point-alu").css({"display": "none"})
							});
				    		console.log("changing::"+i);
				    		$(el).find(".loader-point").attr("style","background-color: #f75151");
				    		$(el).find(".loader-point").css({"width": "5px"}).animate({
							        'width': '100%','height':'5px'
					        },3500,function(){
					        	//callback de tercer elemento
					        	//animacion del cuarto elemento
					        	$(el).find(".loader-point").attr("style","background-color: grey");
					    		$(el).find(".loader-point").css({"width": "100%",'height':'5px'});
					    		i++
					    		el=".point"+i;
					    		$(el).find(".img-point-alu").css({"width": "50px","display": "block"}).animate({
								        'width': '300px'
								},3500,function(){
									$(el).find(".img-point-alu").css({"display": "none"})
								});
					    		console.log("changing::"+i);
					    		$(el).find(".loader-point").attr("style","background-color: #f75151");
					    		$(el).find(".loader-point").css({"width": "5px"}).animate({
								        'width': '100%','height':'5px'
						        },3500,function(){
						        	//callback de cuarto elemento
						        	$(el).find(".loader-point").attr("style","background-color: grey");
						        	$(el).find(".loader-point").css({'width': '100%','height':'5px'});
						        	console.log("fin::"+i);
						        	movePoints();
						        });
					        });
				        });
					});
				},350)
			
		}
		movePoints();
		$(document).ready(function(){
				console.log("cargando efectos de cards::")
			      $('.slide').on('click', function(){
			        $scope.active++;
			        console.log("click de slide::"+$scope.active)
			        validateActive();
			      });
			      $('.page').on('click', function(){
			      	$scope.active++;
			      	console.log("click de slide::"+$scope.active)
			        console.log("click de page::")
			        validateActive();

			      });
			      function validateActive(){
				      //Determine the slides to the left and right
				      var slider = $('.slider');
				      var left = $('.slide');
				      
				      if($scope.active=="1") {
				      	$('.slider').addClass('inactive');
				      	$('.page').data('the-slide', "slider");
				        left.addClass('animate-out-left');
				       console.log("slide active::"+$scope.active)
				      }
				      else if($scope.active>"1"){
				      	console.log("slide active::"+$scope.active)
				        slider.removeClass('fadeOut');
				        left.removeClass('animate-out-left');
				        $('.page').data('the-slide', '');
				        $('.slider').removeClass('inactive');
				        $scope.active=0;
				      }
				  }
				  //escucha el dropdown
				  $('.dropdown-toggle').on("click", function(e){
				    $(this).next('div').toggle();
				    e.stopPropagation();
				    e.preventDefault();
				  });
				 //  passive events 
				
		});
	})(jQuery);

});
function getParametroURL(parametro){
	var windows=""+window.parent.location;
	console.log("window:::"+windows.split("="));
	var parametros = window.parent.location.search.substring(1).split('&');

	for (var i = 0; i < parametros.length; i++){
		if (parametros[i].indexOf(parametro + '=') != -1){
			return decodeURI(parametros[i].split('=')[1]);
		}
	}
	return "";
}
