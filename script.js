document.addEventListener('DOMContentLoaded', function() {
    const introParagraph = document.querySelector('#intro p');
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening';
    introParagraph.textContent = `${greeting}, welcome to Living In Lenses - the blog where we explore the future through the lens of today.`;
});
window.onscroll = function() {
  if (window.pageYOffset > 100) { // Sensativity is fine at 100
    document.querySelector('footer').style.display = 'none';
  } else {
    document.querySelector('footer').style.display = 'block'; 
  }
};
