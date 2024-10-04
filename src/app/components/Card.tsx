import React from 'react'

interface TProps {
  name : string 
  age : number
  distance : string
  rollno : string
  class : string
  campus : string
  
}

const Card = (data:TProps) => {
  return (
    <>
      <h1>Name: {data.name}</h1>
      <h1>Age: {data.age}</h1>
      <h1>Distance: {data.distance}</h1>
      <h1>Roll No: {data.rollno}</h1>
      <h1>Class: {data.class}</h1>
      <h1>Campus: {data.campus}</h1>
    </>
  )
}

export default Card










