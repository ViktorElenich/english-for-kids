import React, { FC, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Preloader from './components/Preloader/Preloader';
import { RouteEnum } from './enums/enums';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import './App.scss';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { setLocalStorage } from './utils/utils';

const App: FC = () => {
  useEffect(() => {
    if (!localStorage.getItem('cards')) {
      setLocalStorage();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteEnum.Home} element={<HomePage />} />
        <Route
          path={RouteEnum.Categories}
          element={
            <Layout>
              <Categories />
            </Layout>
          }
        />
        <Route path={`${RouteEnum.Categories}/:categoryName`} element={<CardsContainer />} />
        <Route path={RouteEnum.Statistics} element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
