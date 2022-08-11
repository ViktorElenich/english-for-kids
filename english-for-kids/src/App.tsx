import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Main from './components/Main/Main';
import Preloader from './components/Preloader/Preloader';
import { RouteEnum } from './enums/enums';
import HomePage from './pages/HomePage';

const LayoutPage = React.lazy(() => import('./components/Layout/Layout'));

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path={RouteEnum.Home} element={<HomePage />} />
          <Route
            path={`${RouteEnum.Categories}${RouteEnum.Main}`}
            element={
              <Suspense fallback={<Preloader />}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path={RouteEnum.Categories}
            element={
              <Suspense fallback={<Preloader />}>
                <LayoutPage />
              </Suspense>
            }
          >
            <Route path=":categoryId" element={<CardsContainer />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
