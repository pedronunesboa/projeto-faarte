function handleSeeProducts(element, card) {
    element = document.getElementById(card);
    img = getSrcImageChildren(element);
    title = getTitleChildren(element);
    text = getTextChildren(element);
    goProductDetails(img, title, text);
}

function goProductDetails(img, title, text) {
    let url = `produto.html?item&title=${title}&text=${text}&image=${img}`;
    window.location.href = url;
}

function getProductParams(url) {
    const params = new URLSearchParams(url);
    let productImg = params.get('image');
    let productTitle = params.get('title');
    let productText = params.get('text');
    fillProductDetails(productImg, productTitle, productText);
}

function getSrcImageChildren(card) {
    for (let i = 0; i < 1; i++) {
        return card.children[i].getAttribute('src');
      }
}

function getTitleChildren(card) {
    for (let i = 0; i < card.children.length; i++) {
        if (card.children[i].tagName == 'DIV') {
            cardElement = card.children[i].children;
            for (let j=0; j < cardElement.length; j++) {
                if (cardElement[j].tagName == 'H5') {
                    return cardElement[j].textContent;
                }
            }
        }
    }
}

function getTextChildren(card) {
    for (let i = 0; i < card.children.length; i++) {
        if (card.children[i].tagName == 'DIV') {
            cardElement = card.children[i].children;
            for (let j=0; j < cardElement.length; j++) {
                if (cardElement[j].tagName == 'P') {
                    return cardElement[j].textContent;
                }
            }
        }
    }
}
   
function loadProductPage() {
    const url =  window.location.href;
    getProductParams(url);
}

function fillProductDetails(img, title, text) {
    document.getElementById('produto-title').innerText = title;
    document.getElementById('produto-text').innerText = text;
    document.getElementById('produto-img').setAttribute('src', img);
}