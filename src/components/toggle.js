import React from "react"
import { useState, useEffect } from "react"

function Toggle() {
  const [buttonIcon, setButtonIcon] = useState(undefined)

  // the [] means it'll only fire once, like componentDidMount. Fires after I click back to the main page after visiting the blogpost page. It sets buttonIcon state according to locally stored string
  useEffect(() => {
    setButtonIcon(localStorage.getItem("viewMode") || "🌞")
  }, [])

  //sets the body and svg styles according to buttonIcon state

  let svgs = document.querySelectorAll("svg")
  if (buttonIcon === "🌞") {
    document.body.className = "darkMode"
    document.querySelector("button").className = "buttonDark"
    svgs.forEach(svg => svg.classList.remove("faLight"))
  } else if (buttonIcon === "🌛") {
    document.body.className = "lightMode"
    document.querySelector("button").className = "buttonLight"

    svgs.forEach(svg => svg.classList.add("faLight"))
  }
  //uses newly locally stored buttonIcon string to update buttonIcon state.
  function handleClick() {
    localStorage.setItem("viewMode", buttonIcon === "🌞" ? "🌛" : "🌞")
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
