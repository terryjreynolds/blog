import Typography from "typography"
//import Wordpress2016 from "typography-theme-wordpress-2016"

/*Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts
*/
const typography = new Typography({
  baseFontSize: "18",
  baseLineHeight: 1.5,
  scaleRatio: 1.4,
  headerGray: 0,
  headerFontFamily: ["cairo"],
  headerWeight: 500,
  headerColor: "#efedf5",
  bodyFontFamily: ["cairo"],
  bodyWeight: 440,
  bodyColor: "#efedf5",
  bodyGray: 0,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
