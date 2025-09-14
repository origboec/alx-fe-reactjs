import React, { createContext, useContext } from "react";

// Step 1: Create the context
const UserContext = createContext();

// Step 2: Create the provider component
export const UserProvider = ({ children }) => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Step 3: Create a custom hook for consuming the context
export const useUser = () => useContext(UserContext);
