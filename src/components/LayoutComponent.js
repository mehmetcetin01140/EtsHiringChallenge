
import React from 'react'
import NavigationBar from './NavigationBar';
import HomePage from "./HomePage"
import {Outlet} from "react-router-dom";
export default function LayoutComponent() {
  return (
    <header>
      <nav>
            <NavigationBar/>
      </nav>
      <main>
            <Outlet/>
      </main>
    </header>
  )
}
