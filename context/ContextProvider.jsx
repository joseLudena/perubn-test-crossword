import { UIProvider } from "./UIContext";

const AppProviders = ({ children }) => {
   return (
      <UIProvider>
         {children}
      </UIProvider>
   );
};


export default AppProviders;