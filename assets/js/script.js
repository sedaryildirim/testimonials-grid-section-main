document.addEventListener('DOMContentLoaded', () => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);

    const cards = document.querySelectorAll('.card');
    let currentCard = null;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (currentCard) {
                    currentCard.classList.remove('in-view');
                }
                entry.target.classList.add('in-view');
                currentCard = entry.target;
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let currentCard = null;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (currentCard) {
                    currentCard.classList.remove('in-view');
                }
                entry.target.classList.add('in-view');
                currentCard = entry.target;
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});