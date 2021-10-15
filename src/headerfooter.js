const myHeaderFooter = () => {
    const divContent = document.getElementById('content');
    
    //header
    let header = document.createElement('header');
    header.classList.add('header');

    //image
     let img = document.createElement('img');
     img.src = '/src/img/sitelogo.png';
     img.classList.add('img');
     
     //title
     let title = document.createElement('p');
     title.innerText = 'DAISY\'S 四川 CUISINE';
     title.classList.add('p');
     

     //footer
     
    let footerPara = document.createElement('h1');
    footerPara.innerText = 'COPYRIGHTS RESERVED'
    console.log(footerPara)

     //append
     divContent.appendChild(header);
     header.appendChild(img);
     header.appendChild(title)
     divContent.appendChild(footerPara)
    
}

export { myHeaderFooter }