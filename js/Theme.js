const toggleButton = document.getElementById('toggleButton');
function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.body.classList.toggle('light-mode', theme === 'light');
  toggleButton.textContent = theme === 'dark' ? '🌞' : '🌙';
  
   const cambio =theme ==="dark" ? toggleButton.style.backgroundColor ="white" : toggleButton.style.backgroundColor ="black"
   return cambio
    
   
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);


toggleButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});