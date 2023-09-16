
const disclaimerContainer = document.querySelector('.disclaimer-container');
const acceptButton = document.getElementById('acceptButton');
const declineButton = document.getElementById('declineButton');
// Check if the user has accepted the disclaimer before
const hasAcceptedDisclaimer = localStorage.getItem('acceptedDisclaimer');

if (!hasAcceptedDisclaimer) {
    disclaimerContainer.style.display = 'block';
}

acceptButton.addEventListener('click', function() {
    // Hide the disclaimer and store a flag in local storage
    disclaimerContainer.style.display = 'none';
    localStorage.setItem('acceptedDisclaimer', 'true');

    // redirect to home page after accepting
    
});
declineButton.addEventListener('click', function(){
window.location.href = history.back();
})

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidebar").style.width = "50vw";
    document.getElementById("openbtn").style.display = 'none';
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById ("openbtn").style.display = "block"
  }