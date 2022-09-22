import React, {useContext, createContext, useState} from 'react';

const SearchQueryContext = createContext();

export default function SearchQueryProvider({ children }) {
  
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchQueryContext.Provider
    
    value={{
      searchQuery,
      setSearchQuery}}
    >
      {children}
    </SearchQueryContext.Provider>
  );
}

export function useSearchQuery() {
  const context = useContext(SearchQueryContext);
  const {searchQuery, setSearchQuery} = context;
  return {searchQuery, setSearchQuery};
}