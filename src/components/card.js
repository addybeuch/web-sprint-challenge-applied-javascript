
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios";




const Card = (article) => {
  const crd = document.createElement('div');
  const hdln = document.createElement('div');
  const athr = document.createElement('div');
  const imgc = document.createElement('div');
  const phto = document.createElement('img');
  const name = document.createElement('span');

  crd.classList.add('card');
  hdln.classList.add('headline');
  athr.classList.add('author');
  imgc.classList.add('img-container');

  hdln.textContent = article.headline;
  phto.src = article.authorPhoto;
  name.textContent = article.authorName

  crd.appendChild(hdln);
  crd.appendChild(athr);
  athr.appendChild(imgc);
  athr.appendChild(name);
  imgc.appendChild(phto);

  return crd;
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
  const holysmokes = document.querySelector(selector)
  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    const shabeenza = res.data;
    const beenzaStrap = shabeenza.articles.bootstrap;
    const jbeenza = shabeenza.articles.javascript;
    const jshabeenza = shabeenza.articles.jquery;
    const beenzaNode = shabeenza.articles.node;
    const techbeenza = shabeenza.articles.technology;

    function beastmode(dragonballs){
      dragonballs.forEach(element => {
         const yaboi = Card(element);
         holysmokes.appendChild(yaboi)
      })
      }
      beastmode(beenzaStrap);
      beastmode(jbeenza);
      beastmode(jshabeenza);
      beastmode(beenzaNode);
      beastmode(techbeenza);
    }
  )}



export { Card, cardAppender }
