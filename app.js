document.querySelector("#show-login").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#signup-form").style.display = "none";
    document.querySelector("#login-form").style.display = "block";
  });
  
  document.querySelector("#show-signup").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#signup-form").style.display = "block";
  });
  
  document.querySelector("#forgot-password").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab";
  });
  
