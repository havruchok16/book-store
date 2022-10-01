import React, { createContext, useContext, useState } from 'react';

interface IContextState {
  viewedBooks: number[]
  chengeBooks: (ids: number[]) => void
}

const defState: IContextState = {
  viewedBooks: [],
  chengeBooks: (ids) => {}
}

export const AppContext = createContext(defState);

export function AppWrapper({ children }: {children: React.ReactNode | JSX.Element}) {

  const [viewedBooks, setViewedBooks] = useState<number[]>([]);

  const changeBooks = (booksIds: number[]) => {
    setViewedBooks(booksIds);
  }

  return (
    <AppContext.Provider value={{
      viewedBooks: viewedBooks,
      chengeBooks: changeBooks,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}