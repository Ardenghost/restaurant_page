const menuTab = () => {
    const container = document.getElementById('content');

    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu_Container')

    let img1 = document.createElement('img');
    img1.src = '/src/assets/food1.jpeg'
    img1.classList.add('img1')

    // let descriptionContainer = document.createElement('div');
    // descriptionContainer.classList.add('descr_container')

    let foodTitle = document.createElement('p');
    foodTitle.innerText = 'lorem lorem lorem';
    foodTitle.classList.add('food_title')


    let foodDescription = document.createElement('h5');
    foodDescription.innerText = 'lorem lorem lorem';
    foodDescription.classList.add('food_description')


    container.appendChild(menuContainer);
    menuContainer.appendChild(img1);
    // menuContainer.appendChild(descriptionContainer);
    menuContainer.appendChild(foodTitle);
    menuContainer.appendChild(foodDescription);


   

    

    return menuContainer;

}




export default menuTab;