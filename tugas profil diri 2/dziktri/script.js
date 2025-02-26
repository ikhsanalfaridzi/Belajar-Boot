function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
  }

function showDashboard(event) 
{ event.preventDefault(); const loginForm = document.getElementById('login-form'); 
const dashboard = document.getElementById('dashboard'); 
loginForm.classList.add('hidden'); 
dashboard.classList.remove('hidden'); }

    function submitData(event) {
      event.preventDefault();
      alert("Data berhasil disimpan!");
    }

    