import React from "react"
import { useState, useEffect } from "react"

//stores the present state of the dark/light mode in local storage to persist in the users next session
export default function Toggle() {
  let retrievedViewMode = localStorage.getItem("userViewMode")
  if (retrievedViewMode == null) {
    console.log("null?", retrievedViewMode)
    localStorage.setItem("userViewMode", "🌞")
    retrievedViewMode = localStorage.getItem("userViewMode")
  }

  const [buttonIcon, setButtonIcon] = useState(retrievedViewMode)
  localStorage.setItem("userViewMode", buttonIcon)

  //onclick sets the moon or sun icon on the button
  function handleClick() {
    setButtonIcon(buttonIcon == "🌞" ? "🌛" : "🌞")
    localStorage.setItem("userViewMode", buttonIcon)
  }

  //hook switches between dark and light social icons
  useEffect(() => {
    let faIcon = document.querySelectorAll("svg")
    if (buttonIcon == "🌞") {
      document.body.className = "darkMode"
      if (faIcon[0].classList.contains("faLight")) {
        faIcon.forEach(icon => icon.classList.remove("faLight"))
      }
    } else {
      document.body.className = "lightMode"

      faIcon.forEach(icon => icon.classList.add("faLight"))
    }
  })
  return <button onClick={handleClick}>{buttonIcon}</button>
}
