import React from "react"
import { useState, useEffect } from "react"

function Toggle() {
  function handleClick() {
    console.log("HANDLECLICK")

    console.log("SETSTORAGEKEY")
    localStorage.setItem(
      "viewMode",
      localStorage.getItem("viewMode") == "🌞" ? "🌛" : "🌞"
    )
  }
  const [button, setButton] = useState()

  //hook switches between dark and light social icons
  useEffect(() => {
    console.log("USEEFFECT")
    if (localStorage.getItem("viewMode") == null) {
      localStorage.setItem("viewMode", "🌞")
    }
    setButton(localStorage.getItem("viewMode"))
    console.log("LS", localStorage.getItem("viewMode"))

    let key = localStorage.getItem("viewMode")
    console.log("key", key)
    if (key == "🌛") {
      document.body.className = "lightMode"
      document.querySelector("button").className = "buttonLight"
    } else {
      document.body.className = "darkMode"

      document.querySelector("button").className = "buttonDark"
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
      <button onClick={handleClick}>{button}</button>
    </div>
  )
}

export default Toggle
