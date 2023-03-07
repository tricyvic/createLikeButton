//alert("hi there")

let initialLikes = 0;
let initialFont = 2.5;

const addLikes = () => {
    document.getElementById("displayLikes").innerHTML = initialLikes += 1 ;
    document.getElementById("like").style.fontSize = `${initialFont += 1}pc`;
    
}