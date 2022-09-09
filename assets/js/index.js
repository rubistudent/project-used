const baseUrl="https://fakestoreapi.com/products"

document.addEventlistener('DomcontentLoaded',(e)=>{
    e.preventDefault()
    const fetchproducts=()=>{
        fetch(baseUrl)
        .then((response)=>response.jgon ())
        .then((data)=>showProducts(data))

    }
        fetchproducts()
})
const showProducts=(things)=>{

}

