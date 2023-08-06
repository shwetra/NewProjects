import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Video } from './Video'
import Login from './Login'
import { Humaniti } from './Course.jsx/Humaniti'
import { Commerce } from './Course.jsx/Commers'
import { Management } from './Course.jsx/Management'
import { Computer } from './Course.jsx/Computer'
import { Eangineering } from './Course.jsx/Enginering'
import { Hotel } from './Course.jsx/Hm'
import { Agriculture } from './Course.jsx/Agriculture'
import { Science } from './Course.jsx/Science'
import { Teaching } from './Course.jsx/Teaching'
import { Pharmacy } from './Course.jsx/Pharmacy'
import { Paramedical } from './Course.jsx/Paramedical'
import { Diploma } from './Course.jsx/Diploma'
import { Center } from './Center'
import { Contact } from './Contact'
import { Dashboard } from './Dashboard'
import Private from './PrivateRoute'
import { About } from './Aboute'
import { Placement } from './Placement'
import { Carrer } from './Carrer'



export const AllRoutes = () => { 
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/video" element={<Video/>} />
        <Route path='/consultantlogin' element={<Login/>}/>
        <Route path="/humanities" element={<Humaniti/>}/>
        <Route path="/commerce" element={<Commerce/>}/>

        <Route path="/management" element={<Management/>}/>
        <Route path="/computer-application" element={<Computer/>}/>

        <Route path="/engineering" element={<Eangineering/>}/>
        <Route path="/hotel-management" element={<Hotel/>}/>
        <Route path="/about" element={<About/>}/>

        

        <Route path="/agriculture" element={<Agriculture/>}/>
        <Route path="/science" element={<Science/>}/>
        <Route path="/teaching" element={<Teaching/>}/>
        <Route path="/pharmacy" element={<Pharmacy/>}/>
        <Route path="/paramedical" element={<Paramedical/>}/>
        <Route path="/certificate-diploma" element={<Diploma/>}/>




//ksks
<Route path='/authorizedcenter' element={<Center/>}/>
<Route path="/contact" element={<Contact/>} />
<Route path="/dashboard" element={<Private><Dashboard/></Private>} />

<Route path='/placement' element={<Placement/>}/>
<Route path="/career" element={<Carrer/>} />

        
    </Routes>
  )
}
