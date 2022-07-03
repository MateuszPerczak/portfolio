import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
import Card from "../Card/Card";
import Nav from "../Nav/Nav";
import Loader from "../Loader/Loader";
import routes from "../../Routes/routes";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Card>
        <Nav />
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map(({ component: Component, ...rest }, index) => {
              return <Route key={index} {...rest} element={<Component />} />;
            })}
            <Route path="/preferences" element={<>Settings</>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Card>
    </>
  );
};

export default AppContent;
