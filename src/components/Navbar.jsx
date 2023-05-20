import React, { useState } from "react"

export default function Navbar() {
  const [name, setName] = useState("Untitled document")
  const [color1, setColor1] = useState("black")
  const [color2, setColor2] = useState("black")
  function getWidth(value) {
    let width = (value.length) * 9 + 45;
    return width + "px"
  }
  function handleChange(e) {
    setName(e.target.value)
  }
  function handleClick1() {
    color1 === "black" ? setColor1("blue") : setColor1("black")
  }
  function handleClick2() {
    color2 === "black" ? setColor2("blue") : setColor2("black")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="./src/assets/docs.png" width="25" height="40" alt="logo" />
        </a>
        <div>
          <div>
            <input className="docs-name" onChange={handleChange} spellCheck="false" type="text" autoComplete="off" guidedhelpid="editor_title" aria-describedby="docs-parent-collections-container-outer" placeholder="Untitled document" value={name} aria-label="Rename" style={{ visibility: "visible", width: getWidth(name) }} data-tooltip="Rename" />
            <button onClick={handleClick1} data-toggle="tooltip" title="Star" style={{ color: color1 }} className="btn1 btn-sm"><i className="fa fa-star mr-1"></i></button>
            <button onClick={handleClick2} data-toggle="tooltip" title="See Document Status" style={{ color: color2 }} className="btn1 btn-sm"><i className="fa fa-cloud"></i></button>
          </div>
          <div className="d-flex setting">
            <div class="container">
              <div class="dropdown">
                <p class="btn tabs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  File
                </p>
                <div class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"><i class="fa fa-file mr-2" aria-hidden="true"></i>
                    New
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-file mr-2" aria-hidden="true"></i>
                    Open
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-clone mr-2" aria-hidden="true"></i>
                    Make a copy
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-share mr-2" aria-hidden="true"></i>
                    Share
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-envelope mr-2" aria-hidden="true"></i>
                    Email
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-download mr-2" aria-hidden="true"></i>
                    Download
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-edit mr-2" aria-hidden="true"></i>
                    Rename
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-globe mr-2" aria-hidden="true"></i>
                    Language
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-print mr-2" aria-hidden="true"></i>
                    Print
                  </a>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="dropdown">
                <p class="btn tabs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Edit
                </p>
                <div class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"><i class="fa fa-undo mr-2" aria-hidden="true"></i>
                    Undo
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-reply mr-2" aria-hidden="true"></i>
                    Redo
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-paste mr-2" aria-hidden="true"></i>
                    Paste
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-object-group mr-2" aria-hidden="true"></i>
                    Select All
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-retweet mr-2" aria-hidden="true"></i>
                    Find and Replace
                  </a>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="dropdown">
                <p class="btn tabs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  View
                </p>
                <div class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"><i class="fa fa-edit mr-2" aria-hidden="true"></i>
                    Mode
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-check mr-2" aria-hidden="true"></i>
                    Show print layout
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-check mr-2" aria-hidden="true"></i>
                    Show ruler
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-check mr-2" aria-hidden="true"></i>
                    Show outline
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-desktop mr-2" aria-hidden="true"></i>
                    Full Screen
                  </a>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="dropdown">
                <p class="btn tabs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Insert
                </p>
                <div class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Image
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-table mr-2" aria-hidden="true"></i>
                    Table
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-paint-brush mr-2" aria-hidden="true"></i>
                    Drawing
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-laptop mr-2" aria-hidden="true"></i>
                    Chart
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-tasks mr-2" aria-hidden="true"></i>
                    Horizontal line
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-smile mr-2" aria-hidden="true"></i>
                    Emoji
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-info mr-2" aria-hidden="true"></i>
                    Special character
                  </a> <a class="dropdown-item" href="#"><i class="fa fa-plus mr-2" aria-hidden="true"></i>
                    Equation
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-heart mr-2" aria-hidden="true"></i>
                    Watermark
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-list-ol mr-2" aria-hidden="true"></i>
                    Page numbers
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-wrench mr-2" aria-hidden="true"></i>
                    Break
                  </a>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="dropdown">
                <p class="btn tabs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Format
                </p>
                <div class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"><i class="fa fa-bold mr-2" aria-hidden="true"></i>
                    Text
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-paragraph mr-2" aria-hidden="true"></i>
                    Paragraph styles
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-align-justify mr-2" aria-hidden="true"></i>
                    Align and indent
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-magic mr-2" aria-hidden="true"></i>
                    Line spacing
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-columns mr-2" aria-hidden="true"></i>
                    Columns
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-user mr-2" aria-hidden="true"></i>
                    Headers and footers
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-paperclip mr-2" aria-hidden="true"></i>
                    Page Orientation
                  </a>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="dropdown">
                <p class="btn tabs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Tools
                </p>
                <div class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"><i class="fa fa-font mr-2" aria-hidden="true"></i>
                    Spelling and Grammar
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-file mr-2" aria-hidden="true"></i>
                    Word Count
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-edit mr-2" aria-hidden="true"></i>
                    Suggested Edits
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-podcast mr-2" aria-hidden="true"></i>
                    Explore
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-search mr-2" aria-hidden="true"></i>
                    Dictionary
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-globe mr-2" aria-hidden="true"></i>
                    Translate document
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-microphone mr-2" aria-hidden="true"></i>
                    Voice typing
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-cogs mr-2" aria-hidden="true"></i>
                    Notification settings
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-user-secret mr-2" aria-hidden="true"></i>
                    Preferences
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-universal-access mr-2" aria-hidden="true"></i>
                    Accessibility
                  </a>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="dropdown">
                <p class="btn tabs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Extension
                </p>
                <div class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"><i class="fa fa-plus mr-2" aria-hidden="true"></i>
                    Add-ons
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-heart mr-2" aria-hidden="true"></i>
                    App Scripts
                  </a>

                </div>
              </div>
            </div>
            <div class="container">
              <div class="dropdown">
                <p class="btn tabs"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Help
                </p>
                <div class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"><i class="fa fa-info-circle mr-3" aria-hidden="true"></i>
                    Help
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-school mr-2" aria-hidden="true"></i>
                    Training
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-wrench mr-2" aria-hidden="true"></i>
                    Updates
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><i class="fa fa-book mr-2" aria-hidden="true"></i>
                    Privacy policy
                  </a>
                  <a class="dropdown-item" href="#"><i class="fa fa-book mr-2" aria-hidden="true"></i>
                    Terms of service
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="navbar-toggler ham" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <div class="form-inline myr-3 my-lg-0">
            <button class="btn btn-primary btn-sm my-sm-0" type="submit"><i className="fa fa-clock"></i></button>
            <button class="btn btn-primary btn-sm my-sm-0" type="submit"><i className="fa fa-comment"></i></button>
            <button class="btn btn-primary btn-sm my-sm-0" type="submit"><i className="fa fa-video"></i></button>
            <button className="share">🔒 Share</button>
            <img className="mr-3" src="./src/assets/profile.png" style={{ borderRadius: "50px" }} width="40" height="40" alt="my-profile"></img>
          </div>
        </div>
      </nav>
    </>
  )
}
