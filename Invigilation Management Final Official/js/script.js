document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const role = document.getElementById('role').value;
  if (role === 'admin') {
    window.location.href = 'dashboard_admin.html';
  } else {
    window.location.href = 'dashboard_faculty.html';
  }
});