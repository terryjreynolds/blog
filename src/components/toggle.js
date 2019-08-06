import React from "react"
import { useState, useEffect } from "react"

//stores the present state of the dark/light mode in local storage to persist in the user's next session

export default function Toggle() {
  let retrievedViewMode = localStorage.getItem("userViewMode")
  if (retrievedViewMode == null) {
    console.log("null?", retrievedViewMode)
    localStorage.setItem("userViewMode", "🌞")
    retrievedViewMode = localStorage.getItem("userViewMode")
  }

  //state variables for button icons
  const [buttonIcon, setButtonIcon] = useState(retrievedViewMode)
  localStorage.setItem("userViewMode", buttonIcon)

  //onclick sets the appropriate moon or sun icon on the button
  function handleClick() {
    setButtonIcon(buttonIcon == "🌞" ? "🌛" : "🌞")
    localStorage.setItem("userViewMode", buttonIcon)
  }

  //hook switches between dark and light social icons
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
      document.body.classList.add("lightMode")
      document.body.classList.remove("darkMode")
      modeButton.className = "buttonLight"
      faIcon.forEach(icon => icon.classList.add("faLight"))
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
