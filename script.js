const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // حفظ الوضع في المتصفح عشان لو عمل ريفريش ميرجعش فاتح تاني
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// أول ما الموقع يفتح، يشوف هو كان على إيه
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}
