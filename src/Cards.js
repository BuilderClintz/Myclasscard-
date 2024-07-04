import { useState } from 'react'
import Button from './Buttons'

const btns = [
    {
      name: "Temidayo",
      email: "Temidayo@gmail.com",
      image: "/Photos/image-1.jpg",
      number: "09122140041",
      expelled: false,
      skills: [

        {
          data:"HTML",
          emoji: "❤",
          color: "red"
      },
      {
          data:"CSS",
          emoji: "🧡",
          color: "Orange"
      },
      {
          data:"JavaScript",
          emoji: "💛",
          color: "Yellow"
      },
      {
          data:"React",
          emoji: "💚",
          color: "green"
      },
      ]
    },
    {
      name: "Taiwo",
      email: "Taiwo@gmail.com",
      image: "/philip.jpg",
      number: "09026733521",
      expelled:true,
      skills: [

        {
          data:"HTML",
          emoji: "❤",
          color: "red"
      },
      {
          data:"CSS",
          emoji: "🧡",
          color: "Orange"
      },
      {
          data:"JavaScript",
          emoji: "💛",
          color: "Yellow"
      },
      {
          data:"React",
          emoji: "💚",
          color: "green"
      },

      ]
    },
  
    {
      name: "Wale",
      image: "/photos/philip.jpg",
      email: "wale@gmail.com",
      number: "0810750124",
      expelled:false,
      skills: [
        {
            data:"HTML",
            emoji: "❤",
            color: "red"
        },
        {
            data:"CSS",
            emoji: "🧡",
            color: "Orange"
        },
        {
            data:"JavaScript",
            emoji: "💛",
            color: "Yellow"
        },
        {
            data:"React",
            emoji: "💚",
            color: "green"
        },
      ]
    },
    {
      name: "Damilola",
      image: "/photos/nick.jpg",
      email: "Damilola@gmail.com",
      number: "08028391738",
      expelled:false,
      skills: [
        {
            data:"HTML",
            emoji: "❤",
            color: "red"
        },
        {
            data:"CSS",
            emoji: "🧡",
            color: "Orange"
        },
        {
            data:"JavaScript",
            emoji: "💛",
            color: "Yellow"
        },
        {
            data:"React",
            emoji: "💚",
            color: "green"
        },
      ]
    },
    {
      name: "Chucks",
      image: "/photos/philip.jpg",
      email: "Chucks@gmail.com",
      number: "09145650124",
      expelled:false,
      skills: [
        {
            data:"HTML",
            emoji: "❤",
            color: "red"
        },
        {
            data:"CSS",
            emoji: "🧡",
            color: "Orange"
        },
        {
            data:"JavaScript",
            emoji: "💛",
            color: "Yellow"
        },
        {
            data:"React",
            emoji: "💚",
            color: "green"
        },
      ]
    },
    {
      name: "Oyin",
      image: "/photos/nick.jpg",
      email: "oyin@gmail.com",
      number: "0810583724",
      expelled:false,
      skills: [
        {
            data:"HTML",
            emoji: "❤",
            color: "red"
        },
        {
            data:"CSS",
            emoji: "🧡",
            color: "Orange"
        },
        {
            data:"JavaScript",
            emoji: "💛",
            color: "Yellow"
        },
        {
            data:"React",
            emoji: "💚",
            color: "green"
        },
      ]
    },
    {
      name: "Abiola",
      image: "/photos/philip.jpg",
      email: "abiola@gmail.com",
      number: "0234990124",
      expelled: true,
      skills: [
        {
            data:"HTML",
            emoji: "❤",
            color: "red"
        },
        {
            data:"CSS",
            emoji: "🧡",
            color: "Orange"
        },
        {
            data:"JavaScript",
            emoji: "💛",
            color: "Yellow"
        },
        {
            data:"React",
            emoji: "💚",
            color: "green"
        },
      ]
    },


  ]

  
// function Cards(){
//   const arrayLength = btns.length
//     return <>
//         {btns.map((student)=> <div className="card">
//         <img src={student.image} alt="e"/>
//         <h1 className="text">{student.name}🤍</h1>
//         <p className="text2"> {student.email}</p>
//         <p className="text3"> <span className="num">{student.number}</span></p>
//         {student.skills.map((skill)=> <Button data={skill.data} emoji={skill.emoji} color={skill.color}/>)}
    
//         </div>
//     )}  
  
//   {console.log(arrayLength)}
  
  
//     </>
// }



function Cardsed(){
const [show, setShow] = useState(true)
function shows(){
  setShow(!show)
}
  return <>
      {btns.map((student)=> {
            if (student.expelled === false){
              return (
                <div> 
                  {
                    show ?   <div className="card">
                    <img src={student.image} alt="e"/>
                    <h1 className="text">{student.name}🤍</h1>
                    <p className="text2">{student.email}</p>
                    <p className="text3"> <span className="num">{student.number}</span></p>
                    {student.skills.map((skill)=> <Button data={skill.data} emoji={skill.emoji} color={skill.color}/>)}
                </div> : <div>
                  <p>No Data</p>
                </div>
                  }
                </div>
             
              )}})} 
              <button className='show' onClick={shows}>xx</button>
   </>
}


export default Cardsed;
