$(document).ready(function(){    
    "use strict";
    
    $(".mobile-nav").css("height" , ""+( (window.innerHeight) - 70 * (95/100) )+"px");    
    $(".navbar-toggler .navbar-toggler-icon").click(function(){
        $("body").css("overflow","hidden");
        $(".mobile-nav").fadeIn(function(){
            $(this).css({"display":"block"});
            $(".mobile-nav-overlay").css({"display":"block"});
            $(".navbar-toggler").css({"display":"none"});
            $(".navbar-toggler .navbar-toggler-icon").css("display","none");
            $(".mobile-nav .icofont-close").css("display","inline-block");
        });                     
    });
    
    $(".mobile-nav .nestedDrop .nav-link").click(function(){            
        $(".mobile-nav .nestedDrop .mnp").slideToggle();                        
    });
    $(".mobile-nav .nestedDrop ul li:nth-of-type(2)").click(function(){
        $(".mobile-nav .nestedDrop ul li:nth-of-type(2) ul").slideToggle();            
    });            
    
    $(".mobile-nav .icofont-close").click(function(){        
        $("body").css("overflow","auto");
        $(".mobile-nav").fadeOut(function(){
            $(this).css({"display":"none"});
            $(".mobile-nav-overlay").css({"display":"none"});
            $(".navbar-toggler").css({"display":"block"});
            $(".mobile-nav .icofont-close").css("display","none");                
            $(".navbar-toggler .navbar-toggler-icon").css("display","inline-block");
        });
    });


var bol = true,  crItem = "";
    
var evSourceApp = $(".Portfolio .container li[data-filter = '.filter-app']");
$(evSourceApp).click(function(){    
    $(".Portfolio .container .col-md-4").fadeOut("slow");
    $(".Portfolio .container .filter-app").fadeIn("slow");
    bol = false; crItem = ".filter-app";
});

var evSourceCard = $(".Portfolio .container li[data-filter = '.filter-card']");
$(evSourceCard).click(function(){    
    $(".Portfolio .container .col-md-4").slideUp("slow");
    $(".Portfolio .container .filter-card").slideDown("slow");
    bol = false; crItem = ".filter-card";
});

var evSourceWeb = $(".Portfolio .container li[data-filter = '.filter-web']");
$(evSourceWeb).click(function(){    
    $(".Portfolio .container .col-md-4").slideUp("slow");
    $(".Portfolio .container .filter-web").slideDown("slow");
    bol = false; crItem = ".filter-web";
});

var evSourceAll = $(".Portfolio .container li[data-filter = '*']");
$(evSourceAll).click(function(){    
    if( bol == false ){
        $(".Portfolio .container .col-md-4").slideUp("slow");
        $(".Portfolio .container .col-md-4").slideDown("slow");        
        bol = true;
    }
    else{
        event.preventDefault();
    }
});

    
    // team
    
    $(".tmb1").hover(function(){        $(".tmb1 .socialOv").fadeIn("slow");       });
    $(".tmb1").mouseleave(function(){   $(".tmb1 .socialOv").fadeOut();      });
    
    $(".tmb2").hover(function(){        $(".tmb2 .socialOv").fadeIn("slow");       });
    $(".tmb2").mouseleave(function(){   $(".tmb2 .socialOv").fadeOut();      });
    
    $(".tmb3").hover(function(){        $(".tmb3 .socialOv").fadeIn("slow");       });
    $(".tmb3").mouseleave(function(){   $(".tmb3 .socialOv").fadeOut();      });
    
    $(".tmb4").hover(function(){        $(".tmb4 .socialOv").fadeIn("slow");       });
    $(".tmb4").mouseleave(function(){   $(".tmb4 .socialOv").fadeOut();      });
     
    
    $(".navbar-collapse .nestedDrop").hover(function(){
        $(".navbar-collapse .nestedDrop .nestedDropMnP").slideDown(function(){            
            $(this).addClass("nstdDrpTglP");            
            $(".navbar-collapse .nestedDrop .nestedDropMnP .DeepNestedDrop").hover(function(){
                $(".navbar-collapse .nestedDrop .nestedDropMnP .DeepNestedDrop .nestedDropMnCh")
                    .slideDown(function(){  $(this).addClass("nstdDrpTglC");  });
            });
            $(".navbar-collapse .nestedDrop .nestedDropMnP .DeepNestedDrop").mouseleave(function(){
                $(".navbar-collapse .nestedDrop  .DeepNestedDrop .nestedDropMnCh")
                    .animate({"display":"none"}, function(){$(this).removeClass("nstdDrpTglC");});   
            });                      
        });
    });
    $(".navbar-collapse .nestedDrop").mouseleave(function(){
        $(".navbar-collapse .nestedDrop .nestedDropMnP").animate({"display":"none"},function(){   
            $(this).removeClass("nstdDrpTglP");
        });
    });


    
    
});
