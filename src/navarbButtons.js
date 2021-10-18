//Navbar buttons: About - Menu - Booking

  // import {num, btnContainer} from './data/menu_data'

//  const num = ['About', 'Menu', 'Booking'];
//  const btnContainer = document.createElement('div')

// const content = document.getElementById('content')

// const navButtons = () =>{
    
//     num.forEach(i => {
//     let button = document.createElement("button");
//     button.innerText = i;
    
//     button.addEventListener("click", function(e) {
    
//      if(button.innerText === 'About'){
//        console.log('aaa')
//      }
//      if(button.innerText === 'Menu'){
//        console.log('bbb')
//      }
//      if(button.innerText === 'Booking'){
//        console.log('ccc')
//      }
//       console.log(i)
//     })
  
//     btnContainer.appendChild(button);
//     return button;
//   })
// }

//  content.appendChild(btnContainer)

// export default navButtons;


import aboutUs from "./aboutTab";
import menuTab from "./menuTab";



const navButtons = () => {
  let containerBtn = document.createElement('div');
  containerBtn.classList.add('containerBtn')

  let aboutBtn = document.createElement('button');
  aboutBtn.innerText = 'ABOUT'
  aboutBtn.classList.add('button')
  aboutBtn.addEventListener('click', function(){
    aboutUs() 
    console.log(aboutUs())
  },{once: true})

  let menuBtn = document.createElement('button');
  menuBtn.innerText = 'MENU'
  menuBtn.classList.add('button')
  menuBtn.addEventListener('click', function(){
    menuTab()
  },{once: true})

  let bookingBtn = document.createElement('button');
  bookingBtn.innerText = 'BOOKING'
  bookingBtn.classList.add('button')
  bookingBtn.addEventListener('click', function(){
    console.log('hello')
  })


  containerBtn.appendChild(aboutBtn)
  containerBtn.appendChild(menuBtn)
  containerBtn.appendChild(bookingBtn)


  return containerBtn;

}

export default navButtons;






