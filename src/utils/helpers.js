//adjusts the read time up based on number of images to view. 12 seconds for the first image, 11 for the second and so on. Anything over 10 gets 3 seconds each. This follows the Medium convention
export function formatReadingTime(words, imageCount) {
  console.log("words", words, "imageCount", imageCount)

  let imageTimeTracker = 0

  let j = 12

  for (let i = imageCount; i > 0; i--) {
    if (i > 10) {
      imageTimeTracker += 3
    } else {
      imageTimeTracker += j
      console.log("imageTimeTracker", imageTimeTracker)
      j -= 1
      console.log("j", j)
    }
    console.log("imageTimeTrackerValue", imageTimeTracker)
  }
  return calculateReadTime(words, imageTimeTracker)
}

//returns readTime and appropriate emojis
function calculateReadTime(words, imageTimeTracker) {
  //converts words to minutes, then to seconds and adds image time-in seconds- and converts total back to minutes and rounds the result
  const readTimeMinutes = Math.round(
    ((words / 275) * 60 + imageTimeTracker) / 60
  )
  console.log("readTime", readTimeMinutes)

  //readTimeMinutes value used to calculate how many rabbits, turtles or coffee emojis to show

  //really long, boring post
  if (readTimeMinutes > 6) {
    return `${new Array(Math.round(readTimeMinutes / 3))
      .fill("☕")
      .join("")} ${readTimeMinutes} min read`
  }

  //very detailed post
  else if (readTimeMinutes > 3) {
    return `${new Array(Math.round(readTimeMinutes))
      .fill("🐢")
      .join("")} ${readTimeMinutes} min read`

    //exceptionally short post
  } else if (readTimeMinutes === 0) {
    return `${new Array(1).fill("💥").join("")} < 1 min read`

    //goldilocks post
  } else {
    return `${new Array(Math.round(readTimeMinutes))
      .fill("🐇")
      .join("")} ${readTimeMinutes} min read`
  }
}
