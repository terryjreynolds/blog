import React from "react"
import { useState, useEffect } from "react"

export default function Toggle() {
  let retrievedViewMode = localStorage.getItem("userViewMode")
  if (retrievedViewMode == null) {
    console.log("null?", retrievedViewMode)
    localStorage.setItem("userViewMode", "🌞")
    retrievedViewMode = localStorage.getItem("userViewMode")
  }
  console.log("retr", retrievedViewMode)
  const [buttonIcon, setButtonIcon] = useState(retrievedViewMode)
  console.log("buttonIcon", buttonIcon)
  localStorage.setItem("userViewMode", buttonIcon)

  function handleClick() {
    setButtonIcon(buttonIcon == "🌞" ? "🌛" : "🌞")
    localStorage.setItem("userViewMode", buttonIcon)
    console.log("handlebuttonicon", buttonIcon)
    console.log("handleclick")
  }

  useEffect(() => {
    if (buttonIcon == "🌞") {
      document.body.className = "darkMode"
      let fa = document.getElementsByName("fa")

      fa.forEach(c => (c.className.baseVal = "faDark"))
      // document.body.className = "lightFont"
    } else {
      document.body.className = "lightMode"

      let fa = document.getElementsByName("fa")

      fa.forEach(c => (c.className.baseVal = "faLight"))
    }
  })
  return <button onClick={handleClick}>{buttonIcon}</button>
}
