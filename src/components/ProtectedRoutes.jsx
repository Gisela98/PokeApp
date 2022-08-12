import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';

const ProtectedRoutes = () => {
    const name= useSelector(state=>state.userName)

    if(name!==""){
        return <Outlet/>
    }else{
        window.alert("Please enter a valid name")
        return <Navigate to='/'/>
    }
};

export default ProtectedRoutes;