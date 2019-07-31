export function formatReadingTime(words, imageCount) {
  console.log("words", words, "imageCount", imageCount)
  let imageTimeTracker = 0

  for (let i = imageCount; i > 0; i--) {
    if (i > 10) {
      imageTimeTracker += 3
    } else {
      let j = 12
      for (let i = imageCount; i > 0; i--) {
        imageTimeTracker += j

        j -= 1
        console.log("j", j)
      }
    }
  }
  //converts words to minutes, then to seconds and adds image time-in seconds- and converts total back to minutes and rounds the result
  const readTimeMinutes = Math.round(
    ((words / 275) * 60 + imageTimeTracker) / 60
  )
  console.log("readTime", readTimeMinutes)
  if (readTimeMinutes > 5) {
    return `${new Array(Math.round(readTimeMinutes / Math.E))
      .fill("🐢")
      .join("")} ${readTimeMinutes} min read`
  } else {
    return `${new Array(readTimeMinutes || 1)
      .fill("🐇")
      .join("")} ${readTimeMinutes} min read`
  }
}
