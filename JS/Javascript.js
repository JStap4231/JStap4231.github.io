window.onload = function() {

    //Adds an event listener to the menu button on middle and waits for it to be touched
    document.getElementById("menu").addEventListener("touchstart", open);
    
    //Adds event listeners to the images on the customizer page
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

    var canvas = document.getElementById("canvas"); //sets canvas variable
    context = canvas.getContext("2d"); //sets context variable
    width = canvas.width; //sets width as the canvas width
    height = canvas.height; //sets height as the canvas height

    
    function draw2d(){
        context.clearRect(0, 0, width/2, height/2) //clears this section of the canvas
        image = new Image(); //initialises the image
        image.src = 'Assets/2d.png'; //the source of the image
        image.onload = function(){ //function will execute when the image has fully loaded
            context.drawImage(image, 0, 0, width/2, height/2); //draws image to canvas at this location
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
        var x = document.getElementById("drop"); //gets the element
        if (x.style.display === "none") { //checks to see if the drop-down mneu is visible
            x.style.display = "block"; //will show the content of the dropdown menu
        } else {
        x.style.display = "none"; //will hide the content of tehe drop-down menu
        }
    }  
}