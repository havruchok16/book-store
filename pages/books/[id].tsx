import Link from "next/link";
import { useRouter } from "next/router";
import { Context } from "vm";
import { IAuthor, IBook, IBooksResult } from "../../types/book.types";

export const getStaticProps = async (context: Context) => {
  const response = await fetch(
    `https://gutendex.com/books/${context.params.id}`
  );
  const book = await response.json();
  return {
    props: {
      book,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://gutendex.com/books/`);
  const books: IBooksResult = await response.json();

  const paths = books.results.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default function Book({ book }: { book: IBook }) {
  const { query } = useRouter();
  const getAuthors = (authors: IAuthor[]) => {
    return authors.map((author) => author.name).join(", ");
  }
  
  return (
    <div className="m-10 font-body">
      <div className="mb-5 flex flex-row justify-center text-center">
        <Link href="/">
          <span className="cursor-pointer hover:text-fuchsia-800">Book Store</span>
        </Link>
        <span className="text-gray-400 mx-2">&gt;</span>
        <Link href="/books">
          <span className="cursor-pointer hover:text-fuchsia-800">Books</span>
        </Link>
        <span className="text-gray-400 mx-2">&gt;</span>
        <span className="font-semibold cursor-pointer">{book.title}</span>
      </div>
      <div className="my-8 flex flex-col justify-center items-center">
        <div className="border-2 border-solid mb-5 w-80 h-full cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-80 h-96" src={book.formats["image/jpeg"]} alt="photo"  />
          <p className="font-semibold">Title: {book.title}</p>
          <p className="text-sm">Authors: {getAuthors(book.authors)}</p>
          <p className="text-sm">Download count: {book.download_count}</p>
        </div>
        {!book.subjects ? <> </> : <div className="w-80 text-sm">Subjets: {book.subjects}</div>}
      </div>
    </div>
  );
}
