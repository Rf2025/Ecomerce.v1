// //javascript form validation
// let userName = document.getElementById('name');
// let userEmail = document.getElementById('email');
// let textarea = document.getElementById('textarea');

// function checkInput(){
//     if(email.value === ''){
//            window.alert('Please enter your name')
//     } else if(userName.value === ''){
//         window.alert('Please enter your email')
//     } else if(textarea.value === ''){
//       window.alert('Please enter comments,question,concerns')
//     }
// }











let video = document.getElementById('background-vid');

function playVid(){
    video.play();
}

window.onload = playVid;




fetch('/ecom.json')
.then(res => {
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
})
.then(data =>{
    const products = data.products;
    
    const productSection = document.getElementById('product-section');

    productSection.innerHTML = '';

    products.forEach(product => {
        const productHTML = 
        `<div class="product">
        <img src="${product.image}" alt="${product.title}" class="product-img">
          <h5>${product.title}</h5>
          <p>${product.description}</p>
         <strong><p>${product.price}</p></strong>
         <button class="add">Add to cart</button>
        </div>`
        productSection.insertAdjacentHTML('beforeend', productHTML);
    })
})


