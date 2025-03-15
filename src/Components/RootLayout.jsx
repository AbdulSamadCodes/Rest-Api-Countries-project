import React from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  <>
    <header>Navbar</header>

    <div class='container'>
      <Outlet />
    </ div>
  </>
}

export { RootLayout };