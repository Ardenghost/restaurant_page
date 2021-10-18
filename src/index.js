import  header  from "./header";
import footer from "./footer";
// import navButtons from "./navarbButtons";
import welcomeMessage from "./pageLoad";



function component() {
    const container = document.getElementById('content');

    // container.innerHTML = "<div>hello </div>";
    container.appendChild(header())
    // container.appendChild(navButtons())
    container.appendChild(footer())
    container.appendChild(welcomeMessage())
    console.log(container.innerHTML)

    return container;

}

function clearContent() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}
// navButtons()
component()

// container.appendChild(component());

// header()
// footer()