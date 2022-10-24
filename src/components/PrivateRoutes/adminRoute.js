import React from 'react';
import {Navigate, Route} from 'react-router-dom'
import { useSelector } from "react-redux";

const AdminRoute = ({children}) => {
  const {isAuthenticated, role, rest} = useSelector((state) => state.auth)
    return ( 
      <>
      {
      role === 'Admin' || role === 'SubAdmin' ? 
        children
       : (
        <>
        <Navigate to={'/admin'} />
       </>
        
      )     
       }
      </>  
     );
}




export default AdminRoute;


// const AdminRoute = ({
//     component: Component,
//     isAuthenticated,
//     role,
//     ...rest
// }) => {
//     return ( 
//         <Route
//         {...rest}
//         render={(props) =>
//           // check for role SubAdmin too
//         role === 'Admin' || role === 'SubAdmin' ? (
//           <Component {...props} />
//       ) : (
//         <>
//         <Navigate to={'/admin'} />
//        </>
        
//       )
//         }
//      />
//      );
// }


// const mapStateToProps = (state) =>{
//     return{
//         isAuthenticated: state.auth.isAuthenticated,
//         role: state.auth.role
//     }
// }

// export default connect(mapStateToProps)(AdminRoute);

