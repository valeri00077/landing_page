const img = document.querySelector(".img");

window.addEventListener("load", function(){
    // img.style.height = "0px";
    img.style.transform = "translateY(-100%)";
})


$hide = $(".hide");
$hide1 = $(".hide1");
$hide2 = $(".hide2");
$first = $(".first");
$container = $(".container");
$name = $(".name");

var character = jQuery.map($hide.text().split(''), function(c){
    return '<p class="hd">' + c + '</p>';
});
$hide.html(character.join(""));
const div = $(".hd");

var character1 = jQuery.map($hide1.text().split(''), function(c){
    return '<p class="hd1">' + c + '</p>';
});
$hide1.html(character1.join(""));
const div1 = $(".hd1");

var character2 = jQuery.map($hide2.text().split(''), function(c){
    return '<p class="hd2">' + c + '</p>';
});
$hide2.html(character2.join(""));
const div2 = $(".hd2");



console.log(character)


// visible
const child = document.getElementById("nm").children;
const child1 = document.getElementById("nm1").children;
const child2 = document.getElementById("nm2").children;

$name.mouseover(function(){
    div.addClass("visible");
    var duration = (child.length / child.length)-1;
    for(let i = 0; i<child.length; i++){
        child.item(i).style.transitionDuration = ""+ duration +"s";
        duration += 1 / child.length;
    }
})

$name.mouseover(function(){
    div1.addClass("visible");
    var duration = (child1.length / child1.length)-1;
    for(let i = 0; i<child1.length; i++){
        child1.item(i).style.transitionDuration = ""+ duration +"s";
        duration += 1 / child1.length;
    }
})

$name.mouseover(function(){
    div2.addClass("visible");
    var duration = (child2.length / child2.length)-1;
    for(let i = 0; i<child2.length; i++){
        child2.item(i).style.transitionDuration = ""+ duration +"s";
        duration += 1 / child2.length;
    }
})

// hidden

$name.mouseout(function(){
    div.removeClass("visible");
    var duration = (child.length / child.length);
    for(let i = 0; i<child.length; i++){
        child.item(i).style.transitionDuration = ""+ duration +"s";
        duration -= 1 / child.length;
    }
})

$name.mouseout(function(){
    div1.removeClass("visible");
    var duration = (child1.length / child1.length);
    for(let i = 0; i<child1.length; i++){
        child1.item(i).style.transitionDuration = ""+ duration +"s";
        duration -= 1 / child1.length;
    }
})

$name.mouseout(function(){
    div2.removeClass("visible");
    var duration = (child2.length / child2.length);
    for(let i = 0; i<child2.length; i++){
        child2.item(i).style.transitionDuration = ""+ duration +"s";
        duration -= 1 / child2.length;
    }
})

// mouse ball

const ball = document.querySelector(".ball");
const name = document.querySelector(".name");
const link = document.querySelector(".link");
// const dark = document.querySelector(".dark");
$dark = $(".dark");




    window.addEventListener('mousemove', function(e){
        // ball.style.transform = "translate(0% 0%)";
        ball.classList.add("load")
        var x = e.clientX - 8;
        var y = e.clientY - 0;
        ball.style.left = x + "px";
        ball.style.top = y + "px";
        // console.log(e.clientX)
        // console.log(e.clientY)
        // console.log(e.screenX)
    })


    $name.mouseover( function(){
        ball.classList.add("hover")
    
    })
    
    $name.mouseout( function(){
        ball.classList.remove("hover");
    
    })


    $dark.mouseover( function(){
        ball.classList.add("hover")
    
    })
    
    $dark.mouseout( function(){
        ball.classList.remove("hover");
    
    })
    
    
    


    $(document).mouseleave(function () {
        console.log('out');
        ball.style.opacity = "0";
    });

    $(document).mouseenter(function () {
        console.log('in');
        ball.style.opacity = "1";
    });


//     $dark.click(() => {
//         ball.classList.add("hover2");
//     })


// $dark.mouseout(() => {
//     ball.classList.remove("hover2");
// })

    // dark them

    const dark = document.querySelector(".dark");
    const floatBall = document.querySelector(".floatball");
    const body = document.querySelector("body");
    const bodyDark = document.querySelector(".bodydark");
    const darkContainer = document.querySelector(".dark-container");
    
    dark.addEventListener("click", function(){
        floatBall.classList.toggle("floatballRight")
        body.classList.toggle("bodydark")
        dark.classList.toggle("darkthem")
        
    })
    
    
    dark.addEventListener("mousemove", function(e){
        var position = dark.getBoundingClientRect();
        var x = e.pageX - position.left - position.width/2;
        var y = e.pageY - position.top - position.height/2;
        console.log(x)
    
    
        dark.style.transform = "translate(" +x + "px," +y + "px)" ;
        // console.log(e.clientX)
    
    })
    
    dark.addEventListener("mouseout", function(e){
        dark.style.transform = "translate(" +0+ "px," +0+ "px)" ;
        
    })