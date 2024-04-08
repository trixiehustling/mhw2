document.addEventListener("DOMContentLoaded", function() {
    var p1Button = document.getElementById("p1");
    var bloccoCheAppare = document.querySelector(".bloccocheappare");
    var i = 0;
    
    p1Button.addEventListener("click", function() {
        if(i%2==0)
            bloccoCheAppare.classList.add("visibile");
        else
            bloccoCheAppare.classList.remove("visibile");
        
        bloccoCheAppare.classList.add("invisibile");
        i++; 
    });
});

function changeImage() {
    const imageElement = document.getElementById('PRINCIPALE');
    imageElement.src = 'img/origine-razzista-proibizione.jpeg';
}

function resetImage() {
    const imageElement = document.getElementById('PRINCIPALE');
    imageElement.src = 'img/TBD_April2024.jpg';
}

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.search button[type="submit"]');
    const searchInput = document.querySelector('.search input[type="text"]');
    const searchContainer = document.querySelector('.search');
    let errorBox = document.querySelector('.error-box');

    function showError(message) {
        if (!errorBox) {
            errorBox = document.createElement('div');
            errorBox.classList.add('error-box');
            searchContainer.appendChild(errorBox);
        }
        errorBox.textContent = message;
    }

    function hideError() {
        if (errorBox) {
            errorBox.remove();
            errorBox = null;
        }
    }

    submitButton.addEventListener('click', function (event) {
        if (searchInput.value.trim() === '') {
            showError('Il campo di ricerca non può essere vuoto!');
            event.preventDefault();
        }
    });

    searchContainer.addEventListener('submit', function (event) {
        if (searchInput.value.trim() === '') {
            showError('Il campo di ricerca non può essere vuoto!');
            event.preventDefault();
        }
    });

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && searchInput.value.trim() === '') {
            showError('Il campo di ricerca non può essere vuoto!');
            event.preventDefault();
        }
    });

    document.addEventListener('click', function (event) {
        if (errorBox && !searchContainer.contains(event.target)) {
            hideError();
        }
    });
});

function handleDataAttributes() {
    const elementsWithData = document.querySelectorAll('[data-info], [data-action], [data-category], [data-link]');

    elementsWithData.forEach(element => {
        element.addEventListener('mouseover', () => {
            const info = element.dataset.info;
            const action = element.dataset.action;
            const category = element.dataset.category;
            const link = element.dataset.link;

            console.log('Informazioni aggiuntive:');
            console.log('data-info:', info);
            console.log('data-action:', action);
            console.log('data-category:', category);
            console.log('data-link:', link);
        });

        element.addEventListener('mouseout', () => {
            console.log('Stato precedente:');
            console.clear();
        });
    });
}

handleDataAttributes();









