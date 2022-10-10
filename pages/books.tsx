import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useState } from "react";
import { AppContext, useAppContext } from "../context/state";
import { IQueryItem } from "../types/base.types";
import { IAuthor, IBooksResult } from "../types/book.types";

export const getStaticProps = async () => {
  const response = await fetch(`https://gutendex.com/books`);
  const data: IBooksResult = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { results: data.results },
  };
};


const Books = (props: IBooksResult) => {
  const { results } = props;
  const { query } = useRouter();
  const context = useAppContext();

  const [items, setItems] = useState(results);
  const [isPending, setIsPending] = useState(false);
  const [langs, setLangs] = useState<string[]>(
    query.languages ? (query.languages as string).split(",") : []
  );
  const [searchValue, setSearchValue] = useState<string>("");

  const getAuthors = (authors: IAuthor[]) => {
    return authors.map((author) => author.name).join(", ");
  };

  const searchBooks = useCallback(
    async (searchValue: string, lang: string[]) => {
      const params: IQueryItem[] = [];
      if (searchValue) {
        params.push({
          name: "search",
          value: searchValue,
        });
      }

      if (lang && lang.length > 0) {
        params.push({
          name: "languages",
          value: lang.join(","),
        });
      }

      const qParams = params
        .map((p) => {
          return `${p.name}=${p.value}`;
        })
        .join("&");

      const searchStr = `https://gutendex.com/books?${qParams}`;

      const response = await fetch(searchStr);
      const data = await response.json();
      setItems(data.results);
      setIsPending(false);

      return {
        props: { results: data.results },
      };
    },
    []
  );

  const updateLangs = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const newV = checked
      ? [...langs, value]
      : langs.filter((item) => item !== value);
    setLangs(newV);
    searchBooks(searchValue, newV);
  };

  const isStringContains = (str: string, search: string) => {
    return str.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <AppContext.Consumer>
      {(ctx) => {
        return (
          <div className="m-10 font-body">
            <Head>
              <title>Book store</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mb-5 flex flex-row justify-center  text-center">
              <Link href="/">
                <span className="cursor-pointer hover:text-fuchsia-800">
                  Book Store
                </span>
              </Link>
              <span className="text-gray-400 mx-2 ">&gt;</span>
              <Link href="/books">
                <span className="font-semibold cursor-pointer">Books</span>
              </Link>
            </div>

            <div className="my-4 flex flex-col items-center">
              <input
                className="flex items-center border-2 border-solid"
                type="text"
                placeholder="Search"
                onChange={(event) => {
                  setIsPending(true);
                  setSearchValue(event.target.value);
                  searchBooks(event.target.value, langs);
                }}
              />
            </div>

            <div>
              <p className="text-center">Choose language</p>
              <div className="flex flex-row justify-center gap-4 w-full">
                <input
                  type="checkbox"
                  checked={isStringContains(langs.join(","), "en")}
                  name="language"
                  value="en"
                  onChange={updateLangs}
                />{" "}
                English
                <input
                  type="checkbox"
                  checked={isStringContains(langs.join(","), "ru")}
                  name="language"
                  value="ru"
                  onChange={updateLangs}
                />{" "}
                Russian
                <input
                  type="checkbox"
                  checked={isStringContains(langs.join(","), "fr")}
                  name="language"
                  value="fr"
                  onChange={updateLangs}
                />{" "}
                French
              </div>
            </div>

            <div className="my-8 flex flex-row flex-wrap justify-center gap-4">
              {isPending && <div>Loading...</div>}
              {!isPending &&
                (items && items.length ? (
                  items.map(
                    ({ id, title, authors, download_count, formats }) => (
                      <div
                        key={id}
                        onClick={() => {
                          ctx.chengeBooks([...context.viewedBooks, id]);
                        }}
                      >
                        <Link href={`books/${id}`}>
                          <div
                            className={`border-2 border-solid mb-5 w-80 h-full cursor-pointer ${
                              context.viewedBooks.includes(id)
                                ? "opacity-40"
                                : ""
                            }`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              className="w-80 h-96"
                              src={formats["image/jpeg"]}
                              alt="photo"
                            />
                            <p className="font-semibold">Title: {title}</p>
                            <p className="text-sm">
                              Authors: {getAuthors(authors)}
                            </p>
                            <p className="text-sm">
                              Download count: {download_count}
                            </p>
                          </div>
                        </Link>
                      </div>
                    )
                  )
                ) : (
                  <div>No data</div>
                ))}
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Books;
