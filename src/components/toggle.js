import React from "react"
import { useState, useEffect } from "react"

function Toggle() {
  //state variables for button icons
  const [buttonIcon, setButtonIcon] = useState("🌞")

  function handleClick() {
    let value = localStorage.getItem("userViewMode")
    localStorage.setItem("userViewMode", value == "🌞" ? "🌛" : "🌞")
    setButtonIcon(localStorage.getItem("userViewMode"))
  }
  //hook switches between dark and light social icons
  useEffect(() => {
    let storedValue = localStorage.getItem("userViewMode")
    console.log("storedValue", storedValue)
    if (storedValue != null) {
      setButtonIcon(storedValue)
    } else {
      localStorage.setItem("userViewMode", buttonIcon)
      setButtonIcon(localStorage.getItem("userViewMode"))
      console.log("buttonIcon", buttonIcon)
    }
  })

  useEffect(() => {
    let faIcon = document.querySelectorAll("svg")
    let modeButton = document.querySelector("button")
    console.log(modeButton)
    if (buttonIcon == "🌞") {
      document.body.classList.remove("lightMode")
      document.body.classList.add("darkMode")
      modeButton.className = "buttonDark"
      if (faIcon[0].classList.contains("faLight")) {
        faIcon.forEach(icon => icon.classList.remove("faLight"))
      }
    } else {
      if (document.body.classList.contains("darkMode")) {
        document.body.classList.remove("darkMode")
        document.body.classList.add("lightMode")
        modeButton.className = "buttonLight"
        faIcon.forEach(icon => icon.classList.add("faLight"))
      }
    }
  })

  return (
    <div
      style={{
        display: "flex",
        width: "100%",

        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <button onClick={handleClick}>{buttonIcon}</button>
    </div>
  )
}

export default Toggle
