import React from 'react'
import { HashRouter } from 'react-router-dom'

import MRouter from './router'
import Tabbar from './components/Tabbar'

export default function App() {
    return (
        <HashRouter>
            <MRouter></MRouter>
            <Tabbar></Tabbar>
        </HashRouter>
    )
}
