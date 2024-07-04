import { useState } from "react";
const student = ["Wale Elebute", "Tunde Laoye", "Lawal Abiola"]
// function Student(){
//     const [step, setStep] = useState(1);
//     const[color, setColor] = useState("#009a68");
//     function nextBg(){
//         setColor("#50abc4")
//     }
//     function previousBg (){
//         setColor("#009a68")
//     }
   

    // const Img1 = "/Images/jannik.jpg"
    // const Img2 = "/Images/silvia.jpg"
    // const Img3 = "/Images/oguzhan.jpg"
    // const Img4 = "/Images/fujiphilm.jpg"
    // const Img5 = "/Images/refargotoh.jpg"
    
    // const pictures = [Img1,Img2,Img3,Img4,Img5]
    function Student(){
        const [step, setStep] = useState(2)
        const [pic, setPic] = useState(1)
        function nextPic(){
            if (pic < 10 ){
                setPic(pic + 1);
            }
          
        }
        function previousPic(){
            if (pic > 1 ){
                setPic(pic - 1);
            }
        
        }
        console.log(pic)
        return(
            <div>
                <h1>{student[step]} </h1>
                <img src= { `/Photos/image-${pic}.jpg`} className="pc1" alt=""/>
                <button onClick={nextPic}> Next Image</button>
                <button onClick={previousPic}>Previous Image</button>
            </div>
        )
    
    }

   

    // return(
    //     <div>
    //         <h1 style={{backgroundColor: color}}>{student[step-1]} </h1>
    //         <img src= {pictures[1]} className="pc1"/>
    //         <button onClick={previousBg}> Next color</button>
    //         <button onClick={nextBg}>Previous color</button>
    //     </div>
    // )



export default Student