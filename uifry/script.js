const btn = document.querySelector('.toggle-btn');

btn.addEventListener('click', () => {
  const navbar = document.querySelector('.nav-links');
  navbar.classList.toggle('active');
});

// dark mode

const toggleBtnDark = document.querySelector('#checkbox');

toggleBtnDark.addEventListener('change', () => {
    if(toggleBtnDark.checked){
        document.body.classList.add('dark-mode');
    }
    else{
        document.body.classList.remove('dark-mode');
    }
});