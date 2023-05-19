document.getElementById('cv-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    var fullName = document.getElementById('full-name').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var maritalStatus = document.getElementById('marital-status').value;
    
    // Process form data or submit to server
    
    // Reset form after submission
    this.reset();
  });
  function loginWithGoogle() {
    // TODO: Implement login with Google logic
  }
  

  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // TODO: Implement login logic
  });
  // Get the required elements
const companyRow = document.querySelector('.company-row');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Set the initial slide index
let slideIndex = 0;

// Slide to the previous set of companies
prevButton.addEventListener('click', () => {
  slideIndex--;
  slideCompanies();
});

// Slide to the next set of companies
nextButton.addEventListener('click', () => {
  slideIndex++;
  slideCompanies();
});

// Function to slide the company listings
function slideCompanies() {
  const slideWidth = companyRow.clientWidth;
  const maxSlide = companyRow.scrollWidth - slideWidth;

  // Ensure the slideIndex stays within the valid range
  if (slideIndex < 0) {
    slideIndex = 0;
  } else if (slideIndex > maxSlide) {
    slideIndex = maxSlide;
  }

  // Apply the translation to slide the company listings
  companyRow.style.transform = `translateX(-${slideIndex}px)`;
}
