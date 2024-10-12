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
          <a href="https://www.google.com"><img className="image" src="/assets/images/google.png" alt="google"></img></a>
          <a href="https://calendar.google.com"><img className="image" src="/assets/images/calendar.png" alt="google"></img></a>
          <a href="https://classroom.google.com"><img className="image" src="/assets/images/Classroom.png" alt="google"></img></a>
          <a href="https://drive.google.com"><img className="image" src="/assets/images/drive.png" alt="google"></img></a>
          <a href="https://meet.google.com"><img className="image" src="/assets/images/meet.png" alt="google"></img></a>
          <a href="https://photos.google.com"><img className="image" src="/assets/images/Photos.png" alt="google"></img></a>
          <a href="https://play.google.com"><img className="image" src="/assets/images/play.png" alt="google"></img></a>
          <a href="https://maps.google.com"><img className="image" src="/assets/images/maps.png" alt="google"></img></a>
          <a href="https://docs.google.com/spreadsheets"><img className="image" src="/assets/images/sheets.png" alt="google"></img></a>
          <a href="https://www.youtube.com"><img className="image" src="/assets/images/youtube.png" alt="google"></img></a>
        </div>
      </div>
      <span className="hamburger" onClick={openNav}>&#9776;</span>
    </>
  )
}