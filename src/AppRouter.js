import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TramosPage from './pages/Tramos/TramosPage';
import ClientesPage from './pages/Clientes/ClientesPage';
import TramosClientePage from './pages/TramosCliente/TramosClientePage';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/tramos" element={<TramosPage />} />
      <Route path="/clientes" element={<ClientesPage />} />
      <Route path="/tramos-clientes" element={<TramosClientePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
