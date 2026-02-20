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


// تحديد تاريخ انتهاء ثابت (مثلاً 15 مارس 2026)
// يمكنك تغيير التاريخ كما تشاء
const countdownDate = new Date("March 7, 2026 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // تحديث العناصر (تأكد أن الـ IDs مطابقة لما في الـ HTML)
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);

function updateTimer() {
    const daysElement = document.getElementById("days");
    
    // 1. أضف كلاس الحركة
    daysElement.classList.add("changing");
    
    // 2. انتظر قليلاً ثم حدث الرقم
    setTimeout(() => {
        daysElement.innerText = "new_value"; // ضع هنا القيمة الجديدة
        daysElement.classList.remove("changing");
    }, 300); // 300ms هو نفس مدة الـ transition في الـ CSS
}