import { CrosswordProvider } from "./CrosswordContext";
import { UIProvider } from "./UIContext";

const AppProviders = ({ children }) => {
   return (
      <CrosswordProvider>
         <UIProvider>
            {children}
         </UIProvider>
      </CrosswordProvider>
   );
};


export default AppProviders;