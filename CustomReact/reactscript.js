function visibleOnPage(reactElement,element) {
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    element.appendChild(domElement)
}






const reactElement={
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children:'Click to visit google!!'
}


const element=document.querySelector("#main")

visibleOnPage(reactElement,element)