import { FC } from "react";
import AppProvider from "../appProvider/AppProvider";
import AppContent from "../appContent/AppContent";

const App: FC = (): JSX.Element => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
