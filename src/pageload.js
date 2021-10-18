const welcomeMessage = () => {
   

    let textWelcome = document.createElement('h3');
    textWelcome.textContent = 'Welcome to Sichuan!'
    textWelcome.classList.add('text');


    return textWelcome;
}

export default welcomeMessage;

// textWelcome.textContent = 'Sichuan cuisine is a style of Chinese cuisine originating from Sichuan Province. It has bold flavours, particularly the pungency and spiciness resulting from liberal use of garlic and chili peppers, as well as the unique flavour of Sichuan pepper. There are many local variations within Sichuan Province and the neighbouring Chongqing Municipality, which was part of Sichuan Province until 1997. Four sub-styles of Sichuan cuisine include Chongqing, Chengdu, Zigong and Buddhist vegetarian style'
