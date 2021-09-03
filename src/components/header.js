
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
  const head = document.createElement('div');
  const dater = document.createElement('span');
  const titler = document.createElement('h1');
  const tempe = document.createElement('span');

  head.classList.add('header');
  dater.classList.add('date');
  tempe.classList.add('temp');

  head.appendChild(dater);
  head.appendChild(titler);
  head.appendChild(tempe);

  titler.textContent = title;
  dater.textContent = `date ${date}`
  tempe.textContent = `temp ${temp}`

  return head;
}


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  const info = document.querySelector(selector);
  info.appendChild(Header('Lambda Times','9/3/2021','77'))
}

export { Header, headerAppender }
