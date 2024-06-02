/*=============== SHOW MENU ===============*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
 
showMenu('nav-toggle','nav-menu')

/*=============== LOGIN MENU ===============*/

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'test' && password === 'test') {
      // Redirect to another website
      window.location.href = 'Ovenmanager.HTML';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  