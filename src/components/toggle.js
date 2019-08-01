import React from "react"
import { useState, useEffect } from "react"

export default function Toggle() {
  const [buttonText, setButtonText] = useState("🌞")

  useEffect(() => {
    if (buttonText == "🌞") {
      document.body.className = "darkMode"
      // document.body.className = "lightFont"
    } else {
      document.body.className = "lightMode"
      //document.body.className = "darkFont"
    }
  })
  return (
    <button onClick={() => setButtonText(buttonText == "🌞" ? "🌛" : "🌞")}>
      {buttonText}
    </button>
  )
}
