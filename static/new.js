const button = document.getElementById("btn");
const colorText =document.querySelector('.colour');

const hex =[
    '0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',
]

button.addEventListener( 'click' ,()=>{
    const hexColor = generateHexColour();
    document.body.style.backgroundColor =hexColor;
    colorText.textContent= hexColor;
   // alert(hexColor)
})

//function to generte hex colour

const generateHexColour = () => {
    let hexColor ='#';

    for(let i=0; i<6 ;i++){
        hexColor += hex[generateRandomNumber()]
        

    }
    return hexColor;
}

    const generateRandomNumber = ()=>{
        return Math.floor(Math.random() * hex.length)

    }


