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

  can dynamically create static html with javascript and put them where on the page that i like.  

  to create a new element, use document.createElement('div'). can create elements using whatever tag, by passing in the string, ie a div.
  app stores the div in a variable called newPost. newPost will be created as on object, so i can modify its properties  for example, its
  class. 
 */
const newPost = document.createElement('div')                  //creates new document with div tag and storing in variable newPost
newPost.className = 'top-post'                                 //accessing properties, creating class called 'top-post'
newPost.innerHTML = "<strong>This is a new post</strong>"      //adding html within post with strong tags
document.body.append(newPost)                                 //add element to bottom of html document
document.body.prepend(newPost)                                //add element to top of html document

/* to add element to a specific location on the page, say right below the header, 1st need to query the element where i want to place 
  the element. to place the post below the header, either query for the header or the 1st post. querySelector() returns the 1st 
  element based upon the selector provided. 
*/
const post = document.querySelector('.post')                 //returns the 1st post element. 
post.prepend(newPost)                                        //appends text 'This is a new post' above the 1st post. 

/*Challenge:
1. Update text in the mini-browser to match the title of this cast
2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
Add it right under the modified text.
*/
const title = document.querySelector('h1') 
title.innerHTML = "Creating and modifying HTML elements" 

const tagline = document.createElement('h2') 
tagline.className = 'tagline' 
tagline.innerHTML = 'I can create HTML elements!' 

title.append(tagline) 

/*DYNAMICALLY ADD CSS STYLES 
 
  reads an elements CSS style 

  can use the object to modify as need. can change virtually any CSS property

  from the style object, can set the CSS flex or none display property 

  any CSS property that I am updating, be sure to express properties camelCase:  post.style.backgroundColor = 'orange'
  do not express properties in the normal CSS properties naming convention: post.style.background-color = 'orange'
  camelCase conforms to javascript standards. 

  make sure the value provided is a string: post.style.margin = '30px' 

  to read a class from post element, 
  to manage a class, like remove the post class, do not use className, use classList 

*/
const post = document.querySelector(".post")   //reads and elements CSS style.
console.log(post.style)     //returns CSSStyleDeclaration, which isn't helpful. can use object to modify 

post.style.display = 'flex'  //from the style object, can set the CSS display property to flex or none (none will hide post entirely)
post.style.background = 'orange' //change background property to orange 

console.log(post.className)     //returns all of the class names as a string. returns what is in the DOM, which is post 
post.classList.remove('post')   //removes post class. text for 1st post will change from green to black  
post.classList.add('post')      //adds back the post class. text for 1st post will change from black to green
post.classList.toggle('post')   //toggle method allows me to add a class then remove it immediately afterwards or vice versa. alternative approach of performing add and remove

/*WORKING WITH AND UNDERSTANDING EVENTS

the click event is probably the most important when working/developing applications. other valuable events are:

    mouseover: when mouseover a given area to get an event
    mouseout:  opposite of mouseover, when you exit a given area to get an event
    keyup:     when user presses up on keyboard to get an event. 
    keydown:     when user presses down on their keys to get an event.
    keypress:    when user presses on keyboard in general to get an event. 

  can listen for an event with addEventListener(), which takes 2 events:
    1. a string argument which is the event i am looking for (such as click)
    2. a callback function that determines what should happen when the event takes place. 
        within parameters of the callback, get access to data about the event from the event object. the 'event' is an object and 
        includes info about the event itself. the most important info that comes from the event is target. target tells me on what element
        the user clicked during the event. 
 */

//event listener will work on 1st click only. will not console log text when user clicks 2 other posts. 
const post = document.querySelector(".post") 
post.addEventListener('click', event => {  //event object grants access to the data
  //console.log(event)   //returns MouseEvent once mouse is clicked
  //console.log(event.target)   //returns <p>, which is the element user clicked during event 
  console.log('Do you want to edit this post?') //returns 'Do you want to edit this post?' on user 1st click but not after addtl clicks 
}) 

/*need to update app to ask user the text from console when user clicks more than 1 post. this program will not work because 
 cannot setup an event listener on a NodeList. but can set up an event listener for an individual DOM element. 
 */
const posts = document.querySelectorAll(".post")  //returns all of the divs with post
posts.addEventListener('click', event => {
//   console.log(event.target)   
  console.log('Do you want to edit this post?')
}) 

/*need to update app to ask user 'Do you want to edit this post?' when user clicks more than 1 post. this program will work because 
 can take the post NodeList and iterate over it using forEach() to get each post. in the body of forEach() can create an 
 event listener for each of the posts. clicking on any of the posts, any number of times, will return the expected log message
 Do you want to edit this post?
 
 the challenge with querySelectorAll() is that it will only provide the 'posts' (variable) when it 1st queries for it, meaning 
 querySelectorAll() provides a static list. if i were to add a new post dynamically via javascript, querySelectorAll() will not
 detect the new post. consequently the click event will not register for future posts. 

 this approach registers event on individual post from querySelectorAll()...post.addEventListener('click'...
 */
const posts = document.querySelectorAll(".post") 
posts.forEach(post => {  
  post.addEventListener('click', event => {
  //   console.log(event.target)   
    console.log('Do you want to edit this post?')
  }) 
})

/* instead of registering events on individual posts from querySelectorAll(), put event listener on the document body, get 'event' 
data and console log 'Do you want to edit this post?'.  with this approach user will get message anywhere they click on the page. 
user will get log message anywhere they click on the page, even elements other than the posts. 
 */
document.body.addEventListener('click', event => {
    console.log('Do you want to edit this post?')  
  })

/* need to provide logic within callback to check to see if user is clicking on a post message. possibly use matches() method to see if 
an element matches the post class such as el.matches('.post').  currently do not have an element for this. but do have the element that
comes from event.target. (target tells me on what element the user clicked during the event). so i can check if event.target matches
post: 
    event.target.matches('.post') 

    event is from arrow function and grants access to data, target will return element where user clicked, matches() will check post
    against the element from target.

you would expect this approach to work but the problem is due to the nature of matches().
matches() gives an exact match. when clicking on each post and logging event.target, wil not give the parent div, <div class="post">.
instead was giving <h2> or <p>. so would only show message if i clicked in a particular area within the confines of post. 
need the closest parent element in order to work. 
 */
document.body.addEventListener('click', event => {
    if (!event.target.matches('.post')) return 
    
    console.log('Do you want to edit this post?')  
  })

/* instead of matches(), can use method closest(). closest() is a very helpful method available on elements. closest() enables me to click
anywhere within the confines of a post, whether title or paragraph, get text 'Do you want to edit this post?'
 */
document.body.addEventListener('click', event => {
    if (!event.target.closest('.post')) return  //if element from target is does not match post, do nothing, if does, print log
    
    console.log('Do you want to edit this post?')  
  })

 /*
Challenge
1. Select h1 and add a click event listener. Log the text from the element to the console.

2. Add the same functionality to all the elements displayed in web browser. 
Finally, try to trigger the event when you hover the mouse over the elements, instead of when clicking on them*/

const title = document.querySelector('h1') 
title.addEventListener('click', event => {
  console.log(event.target.textContent) 
}) 

document.body.addEventListener('mouseover', event => {
  console.log(event.target.textContent) 
}) 