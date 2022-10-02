export interface IAuthor {
  name: string;
  birth_year: number | null;
  death_year: number| null;
}

export interface IFormats {
  "text/plain; charset=utf-8": string;
  "text/html": string;
  "application/epub+zip": string;
  "application/pdf": string;
  "application/rdf+xml": string;
  "application/x-mobipocket-ebook": string;
  "image/jpeg": string;
}


export interface IBook {
  id: number;
  title: string;
  authors: Array<IAuthor>;
  translators: Array<any>;
  subjects: Array<string>;
  bookshelves: Array<string>;
  languages: Array<string>;
  copyright: Boolean| null;
  media_type: string;
  formats: IFormats;
  download_count: number;
}

export  interface IBooksResult {
  count: number;
  next: string;
  previous: string;
  results: Array<IBook>;
}