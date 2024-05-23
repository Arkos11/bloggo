document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle-content');
    
    toggles.forEach(toggle => {
        console.log('Adding click event listener');
        toggle.addEventListener('click', function() {
            console.log('Toggle clicked');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
