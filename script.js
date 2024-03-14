const books = document.querySelectorAll('.book');

function getBookNumber(bookElement) {
  const titleElement = bookElement.getElementsByTagName('h2')[0];
  const title = titleElement.innerText;
  const match = title.match(/\D*(\d+)/);
  return match ? parseInt(match[1]) : -1;
}

const bookArray = [];

books.forEach((book) => {
  const number = getBookNumber(book);
  bookArray.push({ number, book });
});

const sortedBooks = bookArray.sort((a, b) => a.number - b.number);

bookArray.forEach(({ book }) => {
  document.querySelector('.books').appendChild(book);
});

const body = document.querySelector('body');
body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

sortedBooks[2].book.children[0].children[0].innerText = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();


function getChapterNumber(chapterElement) {
  const text = chapterElement.innerText;
  const match = text.match(/(\d+)/);
  return match ? parseInt(match[1]) : -1;
}

function sortChapters(chapterElements) {
  const sortedChapters = Array.from(chapterElements).sort((a, b) => {
    const aNumber = getChapterNumber(a);
    const bNumber = getChapterNumber(b);

    if (aNumber === -1 && bNumber === -1) {
      return 0;
    } else if (aNumber === -1) {
      return -1;
    } else if (bNumber === -1) {
      return 1;
    }

    return aNumber - bNumber;
  });

  return sortedChapters;
}

sortedBooks.forEach(({ book }, index) => {
  if (index === 1 || index === 4) {
    const sortedChapters = sortChapters(book.querySelectorAll('li'));
    const ulElement = book.querySelector('ul');
    ulElement.innerHTML = '';
    sortedChapters
      .filter(chapter => !chapter.innerText.includes('Приложение'))
      .forEach((chapter) => ulElement.appendChild(chapter));

    const applicationChapters = sortedChapters.filter(chapter => chapter.innerText.includes('Приложение'));
    applicationChapters.sort((a, b) => {
      const aLetter = a.innerText.match(/Приложение (\w+)/)[1].toLowerCase();
      const bLetter = b.innerText.match(/Приложение (\w+)/)[1].toLowerCase();
      return aLetter.localeCompare(bLetter);
    });
applicationChapters.forEach(chapter => ulElement.appendChild(chapter));
  }
});

const book6List = document.querySelector('.books .book:nth-child(6) ul');
const newChapter = document.createElement('li');

newChapter.textContent = 'Глава 8: За пределами ES6';

book6List.appendChild(newChapter);