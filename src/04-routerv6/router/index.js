import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Notfound from '../views/Notfound'
import Search from '../views/Search'
import NowPlaying from '../views/Films/NowPlaying'
import ComingSoon from '../views/Films/ComingSoon'
// import Redirect from '../components/Redirect'

export default function MRouter() {
    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<Film />} /> */}
                {/* <Route index element={<Film />} /> */}
                <Route path="/film" element={<Film />} >
                    <Route path='nowPlaying' element={<NowPlaying/>}/>
                    <Route path='comingSoon' element={<ComingSoon/>}/>
                </Route>
                <Route path="/cinema" element={<Cinema />} />
                <Route path="/cinema/search" element={<Search />} />
                <Route path="/center" element={<Center />} />

                <Route path="/" element={<Navigate to="/film"/>}/>
                <Route path="*" element={<Notfound />}/>
                {/* <Route path="*" element={<Redirect to="/film"/>}/> */}
            </Routes>
        </div>
    )
}
