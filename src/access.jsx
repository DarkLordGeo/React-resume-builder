// import { createContext, useContext, useState } from 'react';

// // Create the Context
// const AccessContext = createContext();

// // Provide the Context
// export function AccessProvider({ children }) {
//   const [buttonClicked, setButtonClicked] = useState(false);

//   // Return the context provider wrapping the children components
//   return (
//     <AccessContext.Provider value={{ buttonClicked, setButtonClicked }}>
//       {children}
//     </AccessContext.Provider>
//   );
// }

// // Hook to consume the Context
// export function useAccess() {
//   return useContext(AccessContext);
// }
