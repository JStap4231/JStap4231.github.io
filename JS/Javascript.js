window.onload = function() {

    document.getElementById("menu").addEventListener("touchstart", open);
    document.getElementById("button1").addEventListener("click", draw2d);
    document.getElementById("button2").addEventListener("click", draw2d_1);
    document.getElementById("button3").addEventListener("click", draw2d_2);
    document.getElementById("button4").addEventListener("click", drawnoodle);
    document.getElementById("button5").addEventListener("click", drawnoodle_1);
    document.getElementById("button6").addEventListener("click", drawnoodle_2);
    document.getElementById("button7").addEventListener("click", drawrussel);
    document.getElementById("button8").addEventListener("click", drawrussel_1);
    document.getElementById("button9").addEventListener("click", drawrussel_2);
    document.getElementById("button10").addEventListener("click", drawmurdoc);
    document.getElementById("button11").addEventListener("click", drawmurdoc_1);
    document.getElementById("button12").addEventListener("click", drawmurdoc_2);

    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    width = canvas.width;
    height = canvas.height;

    
    function draw2d(){
        context.clearRect(0, 0, width/2, height/2)
        image = new Image();
        image.src = 'Assets/2d.png';
        image.onload = function(){
            context.drawImage(image, 0, 0, width/2, height/2);
        }
    }
    function draw2d_1(){
        context.clearRect(0, 0, width/2, height/2)
        image = new Image();
        image.src = 'Assets/2d-1.jpg';
        image.onload = function(){
            context.drawImage(image, 0, 0, width/2, height/2);
        }
    }
    function draw2d_2(){
        context.clearRect(0, 0, width/2, height/2)
        image = new Image();
        image.src = 'Assets/2d-2.jpg';
        image.onload = function(){
            context.drawImage(image, 0, 0, width/2, height/2);
        }
    }
    
    function drawnoodle(){
        context.clearRect(width/2, 0, width/2, height/2)
        image = new Image();
        image.src = 'Assets/noodle.png';
        image.onload = function(){
            context.drawImage(image, width/2, 0, width/2, height/2);
        }
    }
    function drawnoodle_1(){
        context.clearRect(width/2, 0, width/2, height/2)
        image = new Image();
        image.src = 'Assets/noodle-1.jpg';
        image.onload = function(){
            context.drawImage(image, width/2, 0, width/2, height/2);
        }
    }
    function drawnoodle_2(){
        context.clearRect(width/2, 0, width/2, height/2)
        image = new Image();
        image.src = 'Assets/noodle-2.jpg';
        image.onload = function(){
            context.drawImage(image, width/2, 0, width/2, height/2);
        }
    }
    
    function drawrussel(){
        context.clearRect(0, height/2, width/2, height/2)
        image = new Image();
        image.src = 'Assets/russel.png';
        image.onload = function(){
            context.drawImage(image, 0, height/2, width/2, height/2);
        }
    }
    function drawrussel_1(){
        context.clearRect(0, height/2, width/2, height/2)
        image = new Image();
        image.src = 'Assets/russel-1.jpg';
        image.onload = function(){
            context.drawImage(image, 0, height/2, width/2, height/2);
        }
    }
    function drawrussel_2(){
        context.clearRect(0, height/2, width/2, height/2)
        image = new Image();
        image.src = 'Assets/russel-2.jpg';
        image.onload = function(){
            context.drawImage(image, 0, height/2, width/2, height/2);
        }
    }
    
    function drawmurdoc(){
        context.clearRect(width/2, height/2, width/2, height/2)
        image = new Image();
        image.src = 'Assets/murdoc.png';
        image.onload = function(){
            context.drawImage(image, width/2, height/2, width/2, height/2);
        }
    }
    function drawmurdoc_1(){
        context.clearRect(width/2, height/2, width/2, height/2)
        image = new Image();
        image.src = 'Assets/murdoc-1.jpg';
        image.onload = function(){
            context.drawImage(image, width/2, height/2, width/2, height/2);
        }
    }
    function drawmurdoc_2(){
        context.clearRect(width/2, height/2, width/2, height/2)
        image = new Image();
        image.src = 'Assets/murdoc-2.jpg';
        image.onload = function(){
            context.drawImage(image, width/2, height/2, width/2, height/2);
        }
    }
    
    
    function open() {
        var x = document.getElementById("drop");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
        x.style.display = "none";
        }
    }  
}