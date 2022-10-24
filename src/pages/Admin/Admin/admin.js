import React, {useState} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { Form, Formik } from "formik";
import { RegisterAdminValidator } from "../../../validationSchema/validator";
import "./admin.css";
import {connect} from 'react-redux'
import { signUpAdmin } from '../../../store/actions/auth';
import { useNavigate } from 'react-router-dom';

const Admins = (props) => {
  console.log(props)

  const {Register, userRole} = props
  const navigate = useNavigate();

    const [val, setVal] = useState(1);

    const [role] = useState("SubAdmin")

    const handleSubmit = async (values) => {
      alert("xx")
        console.log(values + "xxxxxxxxxxxxxxxxxxxxx")
        const creds = {
          ...values,
          role
         }
        await Register(creds)
      };

      const [tabData] = useState([
        { id: 1, name: "tab-1", text: "New", value: "1" },
        { id: 2, name: "tab-2", text: "View All", value: "2" },
        { id: 3, name: "tab-5", text: "Profile", value: "3" },
      ]);

      const tabs = tabData.map((item) => (
        <div
          key={item.id}
          className={val === item.id ? "filter-tab active-filter" : "filter-tab"}
          onClick={() => TabToggle(item.id)}
        >
          <p className="mb-0">{item.text}</p>
        </div>
      ));

      const TabToggle = (id) => {
        // route to all admin
        if (id === 1) {
            setVal(id)
        }
        // route to all admin
        if (id === 2) {
            setVal(id)
          navigate("/admin/all");
        }
        // route to admin profile
        if (id === 3) {
          navigate("/admin/profile");
        setVal(id)
        }
      };

    return ( 
        <>
        <Sidebar/>
        <div className="main">
            <div className="contain">

            <div
            className="mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="chart-filter">{tabs}</div>
          </div>

            {/* admin layout */}
          <div className="admin-card mt-4 mb-5">
            <div className="admin-div">
              <div>
                <h5
                  className="text-center"
                  style={{ color: "#0898D7", fontWeight: "bold" }}
                >
                  Create New Manager
                </h5>
              </div>

              {/* form submission */}
              <Formik
                onSubmit={(values, { setSubmitting }) =>
                  handleSubmit(values, setSubmitting)
                }
                validationSchema={RegisterAdminValidator}
                initialValues={{
                  email: "",
                  password: "",
                  firstname: "",
                  lastname: "",
                  phoneNumber: "",
                }}
              >
                {({
                  handleChange,
                  isSubmitting,
                  handleSubmit,
                  handleBlur,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* firstname */}

                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-account icon"></i>
                      <input
                        className="form-control admininput"
                        type="text"
                        placeholder="Staff Firstname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="firstname"
                        style={{width: '100%'}}
                        value={values.firstname}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.firstname && errors.firstname}
                      </small>
                    </div>

                    {/* lastname */}
                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-account icon"></i>
                      <input
                        className="form-control admininput"
                        type="text"
                        placeholder="Staff Lastname"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="lastname"
                        style={{width: '100%'}}
                        value={values.lastname}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.lastname && errors.lastname}
                      </small>
                    </div>

                    {/* phonenumber */}
                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-phone icon"></i>
                      <input
                        className="form-control admininput"
                        type="text"
                        placeholder="Staff Phonenumber"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="phoneNumber"
                        style={{width: '100%'}}
                        value={values.phoneNumber}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.phoneNumber && errors.phoneNumber}
                      </small>
                    </div>

                    {/* email address */}
                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-email icon"></i>
                      <input
                        className="form-control admininput"
                        type="email"
                        placeholder="Staff Email Address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="email"
                        style={{width: '100%'}}
                        value={values.email}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.email && errors.email}
                      </small>
                    </div>

                    {/* password */}
                    <div className="form-group input-container mt-4">
                      <i className="mdi mdi-lock icon"></i>
                      <input
                        className="form-control admininput"
                        type="password"
                        placeholder="Password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        id="password"
                        style={{width: '100%'}}
                        value={values.password}
                      />
                      <small style={{ color: "#dc3545" }}>
                        {touched.password && errors.password}
                      </small>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || userRole === 'SubAdmin'}
                      className="btn btn-blueOla btn-block mt-2"
                    >
                      Create New Manager
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

            </div>
        </div>
        </>
     );
}

const mapStateToProps = (state) =>{
    return{
      userRole: state.auth.role
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      Register: (creds) => dispatch(signUpAdmin(creds))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Admins);