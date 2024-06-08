document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailInput = document.getElementById('email');
    const passwordStrength = document.getElementById('passwordStrength');
    const passwordMatch = document.getElementById('passwordMatch');
    const registrationForm = document.getElementById('registrationForm');
  
    // Update password strength on input
    passwordInput.addEventListener('input', function() {
      const password = passwordInput.value;
      const strength = calculatePasswordStrength(password);
      const colors = ['#ff0000', '#ff3300', '#ff6600', '#ff9900', '#ccff00', '#99ff00'];
      const labels = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
  
      passwordStrength.innerHTML = 'Password Strength: ' + labels[strength - 1];
      passwordStrength.style.color = colors[strength - 1];
    });
  
    // Check password match on input
    confirmPasswordInput.addEventListener('input', function() {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      if (password !== confirmPassword) {
        passwordMatch.style.opacity = '1'; // make the message visible
      } else {
        passwordMatch.style.opacity = '0'; // hide the message
      }
    });
  
    // Validate email format on input
    emailInput.addEventListener('input', function() {
      const email = emailInput.value;
      if (!isValidEmail(email)) {
        emailInput.setCustomValidity('Invalid email address');
      } else {
        emailInput.setCustomValidity('');
      }
    });
  
    // Validate passwords on form submit
    registrationForm.addEventListener('submit', function(event) {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      if (password !== confirmPassword) {
        event.preventDefault(); // prevent form submission
        passwordMatch.style.opacity = '1'; // make the message visible
      }
    });
  
    // Calculate password strength
    function calculatePasswordStrength(password) {
      let strength = 0;
      if (password.length >= 6) strength++;
      if (password.length >= 8) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;
      return strength;
    }
  
    // Validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
  });
  