import React from "react"
import { useState } from "react"

export default function Toggle() {
  const [buttonText, setButtonText] = useState("🌛")
  const [viewMode, setViewMode] = useState("dark")
  return (
    <button onClick={() => setButtonText(buttonText == "🌞" ? "🌛" : "🌞")}>
      {buttonText}
    </button>
  )
}
