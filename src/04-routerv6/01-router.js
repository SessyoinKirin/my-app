import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Film from './views/Film'
import Cinema from './views/Cinema'
import Center from './views/Center'

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/film" element={<Film />} />
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/center" element={<Center />} />
            </Routes>
        </HashRouter>
    )
}
