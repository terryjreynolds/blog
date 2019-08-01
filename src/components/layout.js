import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Toggle from "../components/toggle"
import { redirectTo } from "@reach/router"
import { faBuromobelexperte } from "@fortawesome/free-brands-svg-icons"
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: rhythm(1.5),
          }}
        >
          <h1
            style={{
              ...scale(1.8),
              margin: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `rgb(212, 146, 3)`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <span>
            <Toggle />
          </span>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            ...scale(1.8),
            marginTop: 0,
            color: "rgb(212, 146, 3)",
            textShadow: "0.05vw 0.05vw rgb(0, 0, 0)",
          }}
        >
          <Link
            style={{
              textDecoration: `none`,
              color: `inherit`,
              backgroundColor: "white",
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
