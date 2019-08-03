import React from "react"

import { rhythm, scale } from "../utils/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons"

const SocialLink = () => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.5),
      }}
    >
      <a
        href={`https://twitter.com/codecadence}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href={`https://www.linkedin.com/in/terryreynolds5330/}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href={`https://github.com/terryjreynolds`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
    </div>
  )
}

export default SocialLink
