const quoteWrapperElement = document.getElementById('quote-wrapper');

const fetchData = () => {
    quoteWrapperElement.innerText = 'Loading...'

    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then((res) => res.json())
        .then((data) => {
            quoteWrapperElement.innerText = '';

            data.forEach((character) => {
                const wrapper = document.createElement('div');
                wrapper.classList.add('wrapper');

                const imgElement = createElement('img', character.image);
                imgElement.classList.add('character-image');
                wrapper.append(imgElement);
    
                const nameElement = createElement('h2', character.character);
                wrapper.appendChild(nameElement);
    
                const quoteElement = createElement('p', character.quote);
                wrapper.appendChild(quoteElement);
    
                quoteWrapperElement.append(wrapper);
            });
        });
}

fetchData();

function createElement(tag, content) {
    const element = document.createElement(tag);
    
    if (tag === 'img') {
        element.src = content;
    } else {
        element.innerHTML = content;
    }
    
    return element;
}