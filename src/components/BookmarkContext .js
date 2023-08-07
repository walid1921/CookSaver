import React, { createContext, useState } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkCount, setBookmarkCount] = useState(2); // Initialize with default count (e.g., 2)

  return (
    <BookmarkContext.Provider value={{ bookmarkCount, setBookmarkCount }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContext;
