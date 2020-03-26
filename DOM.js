/*WHAT IS THE DOM (Document Object Model)

can think of the DOM as the bridge between Javascript and HTML/CSS. DOM is the interface that allows javascript 
to interact with HTML/CSS.  up until now, had access to the global object from anywhere within the app known as the 
window object. on the window object, there is a property called documents. the document is whats discussed when 
referencing the DOM. 

the document property is an object that represents all of the HTML documents as objects that can be modified by 
javascript. the DOM can be visualized as a tree and elements in the HTML document are called nodes. for example, 
the html and head body tags are element nodes (<head></head>, <body></body>). all text inside the body forms 
individual nodes, called text nodes. so each node in the tree is made into an object by the DOM so that i can 
interact with thru javascript. 

the DOM represents HTML by turning them into objects. so these nodes are just objects. since i already know how to 
work with objects, i thus know how to work with the DOM (excl DOM specific methods and properties.) 

<html>
    <head></head>
    <body>
       <script src="index.js"><script> 
    </body>
</html>

to work with the DOM, can use window.document or just document off of the document object.

i can dynamically add static html to the DOM, such as text to a page. to create a new element node with the DOM, 
can use the createElement() method. the createElement() method can make any valid HTML element. 

the DOM makes all web applications possible by providing the necessary interface for working with all the parts
of the page, HTML/CSS, and making them dynamic thru the power of javascript. the document/DOM does not represent the
HTML document itself. its just a representation of it for javascript to use. the changes made via DOM/javascript
will be displayed on the page in real time. 
*/
console.log(document.body)  //returns <body>. this looks like the body tag but is actually an object. 
const p = document.createElement('p')  //creating a paragraph element/tags and assigning it value with same name

/*
  program has an element node, a paragraph element, with a text node within it. i want to add it to the page. 
  can do this by selecting the body and adding the p element to it using the method append(). 
  innerText updates a property that controls the text content of elements. once program runs, text 
  'Hello world' will appear on the page. 
 */
const p = document.createElement('p') 
p.innerText = 'Hello world' 
document.body.append(p) 

/*
  to update the body style, use style property. the style property give me access to every available CSS property. 
  all of the style rules available in CSS can be written in javascript. program changes background color and color of text. 
 */
document.body.style.background = 'palegoldenrod' 
p.style.color = '#05f' 

/*
  in addition to changing static HTML or CSS, can also add javascript to the page. for example, to show a 
  console.log() whenever a user clicks on page. addEventListener listens for a click event and console.log('clicked')
  whenever user clicks. so user sees the log every time he/she clicks
 */
p.addEventListener('click', () => console.log('clicked'))

/*
  GET SINGLE AND MULTIPLE ELEMENTS FROM DOM

  if an element has the id attribute, can get the element by using document.getElementById('home') and pass in the 
  element id by string. elements should have unique id values. to have multiple elements share a giving set of styles,
  apply them with a class  which can be used multiple times. an id cannot be used multiple times. 

  to get multiple elements, for example all of the links in the header, use document.querySelectorAll('a'), and pass in a selector  which 
  in this case is anchor tag because it is common among all 3 elements. this returns a NodeList. a NodeList is a type of collection which 
  has properties to work with it. NodeList has a property forEach() that works like the array method. this allows me to iterate over each
  link to get immediate access to it. this returns:

  <a href="/"id="home">
  <a href="/login">
  <a href="/signup">

  to get a single link, use document.querySelector('a')  instead of  document.querySelectorAll('a'). querySelector() returns the 1st 
  element that it finds based upon the selector provided. 

  to get a specific link, such as the login, use querySelectorAll() to get the NodeList and iterate over it with forEach(), and for each
  link check to see if it meets a certain condition. can use the matches() method to accomplish this. provide matches() with the 
  condition. be sure to wrap the condition in square brackets [] when i am creating a selector based off an attribute. match() returns 
  true of false. 
  
  document.getElementsByTagName() is an alternative to document.querySelectorAll and document.querySelector. 
  can use document.getElementsByTagName('div') to get all of the element with tag name div. this returns HTMLCollection which is
  different from a NodeList. the 2 do not share the same properties. for example, will not be able to iterate over the HTMLCollection.
  will result in an error. 

  document.querySelectorAll() in many ways will be more superior than the other methods because of what it provides (properties) and 
  the flexibility in what it accepts as selectors. any valid CSS rule can be applied to document.querySelectorAll() or 
  document.querySelector(). both can be used to search for single or multiple elements by providing whatever valid CSS selector. 
 */

const el = document.getElementById('home') //getting the element where id=home  
console.log(el)  //returns <a href="/"id="home">

const links = document.querySelectorAll('a')  //getting multiple elements using common selector. getting all links in header with anchor tag 
console.log(links)  //returns NodeList

const links = document.querySelectorAll('a')  //using forEach() to iterate over each link to get access to them
links.forEach(link => {
    console.log(link)   
  })
const link = document.querySelector('a')  //returns the 1st element based upon the selector provided, thus returns 1st link 
console.log(link)  //returns the 1st link <a href="/"id="home">

/*
  program uses matches() method to find a specific link. querySelectorAll returns a NodeList and iterate over NodeList with 
  forEach(). and for each link, uses matches() to see if it meets a certain condition. with matches(), be sure to wrap the 
  condition in square brackets [] when i am creating a selector based off an attribute. match() returns true of false. 
  using if statement to store the link in a variable if evaluated to be true. 
 */
const links = document.querySelectorAll('a') //returns a NodeList so can iterate over list using forEach()
links.forEach(link => {
    if (link.matches('a[href="/login"]')) { //want the link that matches the anchor where href is set to /login. 
      const loginLink = link 
      console.log(loginLink)   
    }
  })

const divs = document.getElementsByTagName('div')
console.log(divs)  //returns HTMLCollection
divs.forEach(div => {console.log(div)}) //will not be able to iterate over divs because HTMLCollection is not a function. results in TypeError: divs.forEach is not a function


/*
  CREATING AND MODIFYING HTML ELEMENTS 
 */