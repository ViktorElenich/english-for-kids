import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import { RouteEnum } from './enums/enums';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import Statistics from './components/Statistics/Statistics';
import './App.scss';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { setLocalStorage } from './utils/utils';
import FinalPage from './pages/FinalPage/FinalPage';

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
        <Route path={`${RouteEnum.Categories}${RouteEnum.Statistics}`} element={<Statistics />} />
        <Route path={`${RouteEnum.FinalPage}`} element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
