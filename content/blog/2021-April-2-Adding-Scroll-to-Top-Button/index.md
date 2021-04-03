---
title: Building a Scroll to Top Button Component for your Gatsby Site
description: The Dos and Don'ts of making a scroll to top button in React/Gatsby
date: 2021-03-02
imageCount: 5
---

> _This article explains a method for adding a scroll to top component to your react/Gatsby app_

![Database](./austin-distel-wD1LRb9OeEo-unsplash.jpg)
_Photo by [Austin Distel][1] on [Unsplash][2]_

# Some Context

I was working on a small business site and needed to add a small, scroll-to-top button to the pages of my site.

I ran into a few snags trying to make this work in a react component and will share my errors and solutions here.

This article assumes you already have a Gatsby project started and thus will focus mostly on the scroll up component structure.

#Create the button and add an onClick Function to it

Here, we add a handleClick function to actually scroll the page to the top when the button is clicked.

I used the div wrapper with an id to style it to it's absolute position in the bottom-right corner of the page (see bottom of the page for complete stylings). I'm also using a font awesome icon which requires a plugin.

```
const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
 
 return (

<div>
    
<div id="scrollTopBtn" onClick={scrollTop} onKeyDown={scrollTop}><FontAwesomeIcon  id="arrowUp" icon={faArrowCircleUp } /></div>
  
</div>
 );

```

#My Fundamental Error

I wanted the button to appear after the user started scrolling.

At first, I thought I could just add an onScroll event to the div that wrapped the button. I seriously played with that idea for hours until I realized that the div wasn't actually going to scroll. Duh. I was so used to creating onClick events on elements that I guess I just assumed I could call onScroll on it. Obviously, I would need to detect when the window object was scrolling, not the div.

#The Basic Set Up?

Well, in react, it's considered problematic to listen for DOM events such as scroll. Things are supposed to happen on state change. So, I decided to leverage React Hooks and the local state of my button component.

For the button, I created a showScroll boolean state and set it to false. 
```
 const [showScroll, setShowScroll] = useState(false);

```

Then, I added a ternary conditional statement to my button to have it display when my showScroll state was true. (I also added some accessibility settings to the div)

```
<div id="scrollTopBtn" onClick={scrollTop} onKeyDown={scrollTop} role="link" aria-label="Scroll" tabIndex={0} style={showScroll === true ? {display: "block"} : {display: "none"}} ><FontAwesomeIcon  id="arrowUp" icon={faArrowCircleUp } /></div>

```

Now all I needed was a way to listen for the scroll event on the window object, without violating any React ecosystem rules.

Time for a hook.

#The Event Listener and Hook

Within my ScrollUpBtn component, I added a useEffect hook. 

The useEffect hook gets called when the component is mounted. That's the perfect place to put an event listener for the window scroll event.

Inside the useEffect hook, I created a named function "setUpEventListener". That function contains my listener and a function that conditionally updates my showScroll state. If the user scrolls further than 400px down the page, the showScroll state toggles to true, which sets the button component dislay styling to "block" thus revealing it to the user. Keeping the event listener inside the useEffect hook follows all of the React lifecycle rules.

#Clean Up the Event Listener

When the component mounts, the hook creates the event listener and it keeps on listening all the while the component is mounted, calling the updateState function over and over again. If I switch pages and neglect to clean up (ie: remove) the event listener, over time memory leaks can occur which is not good. 

To remove the event, I have my hook return a function that uses the removeEventListener method to dispose of the listener when the component unmounts. So, if i leave the page and return to it, the old listener is cleaned up and then a new one is created when the component is mounted again.

```
/called when component mounts
   useEffect( function setUpListener() {

//on scroll sets showScroll state then conditionally styles the arrowUp
      const updateState = () => {

    //measures distance scrolled down from top of window
    let scrollY = window.pageYOffset;

 //set the state to true if user scrolls more than 400px   
  if (!showScroll && scrollY > 400) {
setShowScroll(true);
  }else if(showScroll && scrollY <= 400) {
setShowScroll(false);
  }  
 };

window.addEventListener('scroll', updateState);

//cleans up the event listener when the component is unmounted
return function cleanUpListener() {
   console.log('cleaning up event');
   window.removeEventListener('scroll', updateState);
}
 });

```

#Gatsby wrapPageElement callback

One last thing that is particular to Gatbsy. To have my button appear on all pages of my site, I configured my browser-config.js file to use the Gatsby wrapPageElement callback function found in their browser API. You can read up on that if it interests you. https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement

#Here's My Complete Component

```
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'


const ScrollTopBtn = () => {

//setting up state for the scroll arrow
    const [showScroll, setShowScroll] = useState(false);
   
//called when component mounts
   useEffect( function setUpListener() {

//on scroll sets showScroll state then conditionally styles the arrowUp
      const updateState = () => {
    
    //measures distance scrolled down from top of window
    let scrollY = window.pageYOffset;
    
  if (!showScroll && scrollY > 400) {
setShowScroll(true);
  }else if(showScroll && scrollY <= 400) {
setShowScroll(false);
  }  
 };
window.addEventListener('scroll', updateState);

//cleans up the event listener when the component is unmounted
return function cleanUpListener() {
   window.removeEventListener('scroll', updateState);
}
 });
 
const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
 
 return (

<div>
    
<div id="scrollTopBtn" onClick={scrollTop} onKeyDown={scrollTop} role="link" aria-label="Scroll" tabIndex={0} style={showScroll === true ? {display: "block"} : {display: "none"}} ><FontAwesomeIcon  id="arrowUp" icon={ faArrowCircleUp } /></div>
  
</div>
 );

}
export default ScrollTopBtn;


```

#Here's the complete global styling:


```
#scrollTopBtn {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
}
#arrowUp {
  cursor: pointer;
  font-size: 2rem;
  border-radius: 50%;
  opacity: 0.5;
}
#arrowUp:hover {
  color: #52bc77;
  font-size: 2.2rem;
  opacity: 1;
}

```

A couple of articles that were instrumental in getting me unstuck in this endeaveour are listed here:

https://betterprogramming.pub/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc

https://www.pluralsight.com/guides/how-to-cleanup-event-listeners-react


Happy Coding, Everyone!

[1]: https://unsplash.com/@austindistel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[2]: https://unsplash.com/?utm_source=medium&utm_medium=referral