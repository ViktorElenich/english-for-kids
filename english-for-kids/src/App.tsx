import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import { RouteEnum } from './enums/enums';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteEnum.Main} element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
