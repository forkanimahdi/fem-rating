const body = document.getElementById("body")
const buttonsOfRating = document.querySelectorAll(".ratingbutton")
const submiting = document.getElementById("submit")
const ratingPhse = document.getElementById("ratingphase");
const thanksPhase = document.getElementById("thanksphase");
const ratingNumber = document.getElementById('ratingnumber')

buttonsOfRating.forEach(rate => (rate.addEventListener("click" , () => selectit(rate))))


function selectit(buttonOfRating){
  const text = buttonOfRating.textContent
  if(text == "1"||text == "2"||text == "3"||text == "4"||text == "5" ){
ratingNumber.textContent = text
submiting.addEventListener("click" , () => submitratig())

}

else{
  console.log("jjj")
}
function submitratig(){

  ratingPhse.style.display = 'none'
  thanksPhase.style.visibility = 'visible'
  
  
  }
}
