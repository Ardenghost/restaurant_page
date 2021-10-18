import navButtons from "./navarbButtons";


const header = () => {
    let headerDiv = document.createElement('div');
    // headerDiv.classList.add('div');
    let siteLogo = document.createElement('img');
    siteLogo.src = '/src/assets/sitelogo.png';
    siteLogo.classList.add('img')
    
    let siteTitle = document.createElement('paragraph');
    siteTitle.innerText = 'DAISY\'S 四川 CUISINE';
    siteTitle.classList.add('paragraph')


    headerDiv.appendChild(siteLogo);
    headerDiv.appendChild(siteTitle);
    headerDiv.appendChild(navButtons())
    console.log(headerDiv)

    return headerDiv
}

export default header;