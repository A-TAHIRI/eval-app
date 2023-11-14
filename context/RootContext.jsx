import { createContext, useContext, useState } from 'react';

const RootContext = createContext();

export default function RootProvider({ children }) {

  const [categorySelected, setCategorySelected] = useState(null);
 
  

  const onChangeCategoryHandler = (category) => setCategorySelected(category);

  

  const value = {
  
 
    categorySelected,
    
    onChangeCategoryHandler,
  
  };

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
}

export function useRootContext() {
  const value = useContext(RootContext);

  return value;
}
