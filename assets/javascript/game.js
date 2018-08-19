
// This holds the random number that they must match except for i don't know how to display it

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (100 - 19 + 1) + min);
    document.getElementById("#winningNumber").innerHTML = random; 

  }



//if they click a jewel they get a random number



      $(document).ready(function() {

        
        $("#jewel1").on("click", function() {
  
          
          var random = Math.floor(Math.random() * 12) + 1;
  
         
          $("jewel1").text(random);
  
        });  


        $("#jewel2").on("click", function() {
  
           
            var random = Math.floor(Math.random() * 12) + 1;
    
            
            $("jewel2").text(random);
    
          });

          $("#jewel3").on("click", function() {
  
           
            var random = Math.floor(Math.random() * 12) + 1;
    
            
            $("jewel3").text(random);
    
          });

          $("#jewel4").on("click", function() {
  
            
            var random = Math.floor(Math.random() * 12) + 1;
    
           
            $("jewel4").text(random);
    
          });
          //this is supposed to be the random numbers added together
          $("jewel1" + "jewel2" + "jewel3" + "jewel4").text(random); 
      });


//if X becomes more that Y then update losses

if("winningNumber" == random){
 
    alert("You're a Winner")
}
//if X becomes equal to Y then update Wins
