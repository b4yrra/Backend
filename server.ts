import express, { Request, Response } from "express";

let books = [
  {
    id: 1,
    title: "Harry Potter 1",
    author: "Bat",
  },

  {
    id: 2,
    title: "Harry Potter 2",
    author: "Bat",
  },
];

const server = express();
const PORT = 8080;

server.use(express.json());

server.get("/books", (req: Request, res: Response) => {
  res.status(200).send(books);
});

server.get("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const book = books.find((book) => String(book.id) === String(id));

  res.status(200).send(book);
});

server.post("/books", (req: Request, res: Response) => {
  const { title, author } = req.body;
  const newBookId = books.length + 1;

  const newBook = { id: newBookId, title, author };

  books.push(newBook);
  res.send(books);
});

server.put("/books/:id", (req: Request, res: Response) => {
  const { title, author } = req.body;
  const { id } = req.params;
  const bookAuthor = "Bat";

  books = books.map((book) => {
    if (book.author === bookAuthor) {
      const newBooks = {
        id: book.id,
        title: book.title,
        author: "J.K Rowling",
      };

      return newBooks;
    } else {
      return book;
    }
  });

  const book = books.find((book) => String(book.id) === String(id));

  res.send(book);
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
