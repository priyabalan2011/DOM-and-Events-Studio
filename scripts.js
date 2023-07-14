// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () 
    {
        const takeoff = document.getElementById("takeoff");
        const flightStatus=document.getElementById("flightStatus");
        const shuttleBackground=document.getElementById("shuttleBackground");
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        const landing = document.getElementById("landing");
        const missionAbort = document.getElementById("missionAbort");
        const up=document.getElementById("up");
        const down=document.getElementById("down");
        const right=document.getElementById("right");
        const left=document.getElementById("left");
        const  rocket=document.getElementById("rocket");

        takeoff.addEventListener("click",function(event){
            let response=window.confirm("Confirm that the shuttle is ready for takeoff.");
            if(response)
            {
              flightStatus.innerHTML = "Shuttle in flight.";
              shuttleBackground.style.backgroundColor="blue";
             //shuttleBackground.style.height+="10,000";
             spaceShuttleHeight.innerHTML = "10,000";
            }
            
          });
          landing.addEventListener("click",function(event){

            let response=window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor="green";
            spaceShuttleHeight.innerHTML = "0";

          });
          missionAbort.addEventListener("click",function(event){
            let response=window.confirm("Confirm that you want to abort the mission.");
            if(response)
            {
              flightStatus.innerHTML = "Mission aborted.";
              shuttleBackground.style.backgroundColor="green";
             //shuttleBackground.style.height+="10,000";
             spaceShuttleHeight.innerHTML = "0";
            }
            
          });
          up.addEventListener("click",function(event){
            
            //window.alert("sdfdsf");
            rocket.style.height=parseInt(rocket.style.position)+parseInt(rocket.style.position)
            
            
          });
    }
    window.addEventListener("load", init);