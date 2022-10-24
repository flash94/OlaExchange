import React from 'react';
import {Navigate, Route, useLocation} from 'react-router-dom'
import { useSelector } from "react-redux";

const UserRoute = ({children}) => {
  const {isAuthenticated} = useSelector((state) => state.auth)
  const location = useLocation();

  return (
    <>
    {
         !isAuthenticated ? 
          <Navigate to ="/"
            replace
            state={{path: location.pathname}}
             />
            :
            children
        }
    </>
  );
};


export default UserRoute;
