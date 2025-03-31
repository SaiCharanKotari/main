document.addEventListener('DOMContentLoaded', function () {
    const headerGreeting = document.querySelector('header p');

    const currentTime = new Date().getHours();
    if (currentTime < 12) {
        headerGreeting.textContent = 'Good Morning! Explore my projects below:';
    } else if (currentTime < 18) {
        headerGreeting.textContent = 'Good Afternoon! Explore my projects below:';
    } else {
        headerGreeting.textContent = 'Good Evening! Explore my projects below:';
    }
});
