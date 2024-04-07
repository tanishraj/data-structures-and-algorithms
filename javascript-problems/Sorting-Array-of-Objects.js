var books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

books.sort((a, b) => {
  return b.author.split(" ")[1] < a.author.split(" ")[1] ? 1 : -1;
});

console.log(books);
