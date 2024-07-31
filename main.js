//let products = [
//    {id: 1, name: 'Plato', price: 3000},
//    {id: 2, name: 'jordan', price: 2001},
//    {id: 3, name: 'lebron', price: 1337},
//    {id: 4, name: '39', price: 777},
//   {id: 5, name: 'vance', price: 69420},
//];

const url = 'https://fakestoreapi.com/products';

fetch(url)
    .then(res => res.json())
    .then(data => { 
        console.log(data);
        products = data;
        let container = document.querySelector('.container');
        let pre = document.querySelector('#productos');
        for (const p of products){
            //pre.textContent += `{ id: ${p.id}, name: ${p.name}, price: ${p.price}}\n`;
            let productCard = document.createElement('div');
            let title = document.createElement('h2');
            let price = document.createElement('p');
            let image = document.createElement('img');
            title.textContent = p.title;
            price.textContent = p.price;
            image.src = p.image;
            productCard.append(title);
            productCard.append(price);
            productCard.append(image);
            container.append(productCard);
        }
});