const endDate = "1 January 2025 00: 01 AM"
document.getElementById("end-date").innerText = endDate













const inputs = document.querySelectorAll('input')

function clock(){
    const end = new Date(endDate)
    const now = new Date()
   const diff = (end-now) / 1000;

   if(diff < 0) return;

   
  
   // coverts into days
   inputs[0].value = (Math.floor(diff/ 3600  /24))
   // coverts into hours
   inputs[1].value = (Math.floor(diff / 3600) % 24)
   // coverts into minutes
   inputs[2].value = (Math.floor(diff / 60) % 60)
   // covert into Seconds;
   inputs[3].value = (Math.floor(diff % 60) )

}

clock()

/* 
* 1 day = 24 hrs
  1 hr = 60 mins
  60 min = 3600sec
*/


setInterval(
    () => {
        clock()
    },1000
)