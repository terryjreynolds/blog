import React from "react"
import { useState, useEffect } from "react"

function Toggle() {
  const [buttonIcon, setButtonIcon] = useState(undefined)

  // the [] means it'll only fire once, like componentDidMount. Fires after I click back to the main page after visiting the blogpost page. It sets buttonIcon state according to locally stored string
  useEffect(() => {
    console.log("useeffect")
    setButtonIcon(localStorage.getItem("viewMode") || "🌞")
    console.log("buttoniconinside", buttonIcon)
  }, [])

  //sets the body and svg styles according to buttonIcon state
  console.log("buttoniconoutside", buttonIcon)
  if (buttonIcon == "🌞") {
    document.body.className = "darkMode"
  } else if (buttonIcon == "🌛") {
    document.body.className = "lightMode"
  }
  //uses newly locally stored buttonIcon string to update buttonIcon state.
  function handleClick() {
    localStorage.setItem("viewMode", buttonIcon == "🌞" ? "🌛" : "🌞")
    setButtonIcon(localStorage.getItem("viewMode"))
  }
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
