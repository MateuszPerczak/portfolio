import type { FC } from "react";

import AppContent from "../appContent/AppContent";
import AppProvider from "../appProvider/AppProvider";

const App: FC = (): JSX.Element => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
