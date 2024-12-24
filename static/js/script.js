const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Bosilganda ranglarni o'zgartirish
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Tugmadagi ikonkani o'zgartirish
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Switch to Light Mode';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Switch to Dark Mode';
    }
});
