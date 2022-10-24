import React, {useEffect} from 'react';
import "./login.css";
import {Form, Formik} from 'formik'
import {connect } from 'react-redux'
import { loginValidator } from "../../../validationSchema/validator";
import {Link} from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'
import Hero from '../../../assets/images/adminLoginSide.jpg'
import { loginAdmin } from '../../../store/actions/auth';
import { useNavigate } from 'react-router-dom';


const AdminLogin = (props) => {

  const {login, isAuthenticated} = props
  
  const navigate = useNavigate();

    const handleSubmit = async (values) =>{
        await login(values);
      }

      useEffect(() =>{
        console.log(isAuthenticated)
        if(isAuthenticated){
          navigate('/admin/dashboard')
        }
      },[isAuthenticated, navigate])

    return ( 
        <>
        <div className="row no-gutters">
        <div className="col-lg-6">
          <div className="container">
            <div className="login-div">
              <img src={Logo} className="img-fluid" alt="logo" />

              <div className="mt-5">
                <h4 style={{ lineHeight: "35px", fontWeight: 500 }}>
                  Welcome to <br />
                  <span style={{ fontWeight: 700 }}>Ola Exchange</span> Admin
                </h4>
              </div>

              <div className="mt-5">
                <h4 style={{ color: "#0898D7", fontWeight: 600 }}>LogIn</h4>
              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, {setSubmitting}) =>
                    handleSubmit(values, setSubmitting)
                    }
                validationSchema={loginValidator}
                initialValues={{email: "", password: ""}}
              >
                  {({
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                      values,
                      touched,
                      errors
                  })=>(
                      <Form onSubmit={handleSubmit}>
                          {/* email */}
                             <div className="form-group input-container mt-4">
                                <i className="mdi mdi-email icon"></i>
                                <input
                                    className="form-control admininput"
                                    type="text"
                                    placeholder="Email Address"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="email"
                                    value={values.email}
                                />
                                   <small style={{ color: "#dc3545" }}>
                                        {touched.email && errors.email}
                                    </small>
                            </div>
                         
                           
               
                            {/* password */}
                        
                            <div className="form-group input-container mt-3">
                            <i className="mdi mdi-lock icon"></i>
                            <input
                                className="form-control admininput"
                                type="password"
                                placeholder="Password"
                                    id="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                              <small style={{ color: "#dc3545" }}>
                              {touched.password && errors.password}
                           </small>
                            </div>
                          
                            <Link to="/admin/forgotpassword" style={{textDecoration: 'none', color: '#000000'}}>
                              <p style={{fontWeight: 600,fontStyle: 'italic',}}>Forgot Password?</p>
                            </Link>
                         
                            <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-blueOla">Login</button>
                      </Form>
                  )}

              </Formik>
             
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-md-block">
          <div style={{ position: "relative", width:"100%" }}>
            <img src={Hero} className={"img-fluid onboardImg"} alt="login" />

            <div className="whiteLogo">
              <img src={Logo} className="img-fluid" alt="logo" />
            </div>
          </div>
        </div>
      </div>
        </>
     );
}

const mapStateToProps = (state) =>{
    return{
      isAuthenticated: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      login: (creds) => dispatch(loginAdmin(creds)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);