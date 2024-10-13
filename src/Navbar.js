import React from 'react';
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <a href="/" class Name="home-logo"></a>
      <ul>
            <li>
                <a href="/Gallery">Gallery</a>
            </li>
        </ul>
    </nav>
}