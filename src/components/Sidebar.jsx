import React, { useState } from "react"

export default function Sidebar() {
  const [width, setWidth] = useState("0")
  function openNav() {
    console.log("Hello")
    setWidth("250px")
  }
  function closeNav() {
    setWidth("0")
  }
  return (
    <>
      <div id="mySidenav" class="sidenav" style={{ width: width }}>
        <a href="#" class="closebtn" onClick={closeNav}>&times;</a>
        <div className="grid">
          <a href="https://www.google.com"><img className="image" src="./src/assets/google.png" alt="google"></img></a>
          <a href="https://calendar.google.com"><img className="image" src="./src/assets/calendar.png" alt="google"></img></a>
          <a href="https://classroom.google.com"><img className="image" src="./src/assets/Classroom.png" alt="google"></img></a>
          <a href="https://drive.google.com"><img className="image" src="./src/assets/drive.png" alt="google"></img></a>
          <a href="https://meet.google.com"><img className="image" src="./src/assets/meet.png" alt="google"></img></a>
          <a href="https://photos.google.com"><img className="image" src="./src/assets/Photos.png" alt="google"></img></a>
          <a href="https://play.google.com"><img className="image" src="./src/assets/play.png" alt="google"></img></a>
          <a href="https://maps.google.com"><img className="image" src="./src/assets/maps.png" alt="google"></img></a>
          <a href="https://docs.google.com/spreadsheets"><img className="image" src="./src/assets/sheets.png" alt="google"></img></a>
          <a href="https://www.youtube.com"><img className="image" src="./src/assets/youtube.png" alt="google"></img></a>
        </div>
      </div>
      <span className="hamburger" onClick={openNav}>&#9776;</span>
    </>
  )
}