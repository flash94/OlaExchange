import React, {useEffect, useState} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import {Form, Formik} from 'formik'
import {addGiftCardValidator} from '../../../validationSchema/validator'
import {connect} from 'react-redux'
import { getRateCategory } from '../../../store/actions/rate';
import { updateGiftCards } from '../../../store/actions/admin';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import cogoToast from 'cogo-toast';
import { useParams } from 'react-router-dom';

const UpdateRates = (props) => {

    const {fetchCategory, category, card, userRole, updateProduct, id} = props
    const cryptoCoins = ["Bitcoin", "Ethereum", "BNB", "USDT"];
    


    useEffect(() =>{
        fetchCategory()
  }, [fetchCategory])

  const handleSubmit = async (values, setSubmitting) =>{
    console.log(values)

    // api call to add new cryptos
        // check if it is a new category or existing
        if(values.newcategory === ''){
       
                let resp = {
                    productName : values.category,
                    unitPrice: values.unitprice
                }
                // make api call to update an Existing category a crypto
              await updateProduct(resp, id) 
            
            
        }
        
  }

    return (
        <>
            <Sidebar />
            <div className="main">
            <div className="contain">

                
            <div className="mb-5">    
                

                {/* add a products */}
                <div className="row justify-content-center">
                    <div className="col-lg-6">

                    <div className="mt-lg-5 mt-4 text-center">
                            <h4 style={{fontWeight: 'bold'}}>Edit Crypto Product</h4>
                     </div>

                    <Formik
                onSubmit={(values, {setSubmitting, resetForm, setFieldValue}) =>
                    handleSubmit(values, setSubmitting, resetForm, setFieldValue)
                    }
                validationSchema={addGiftCardValidator}
                initialValues={{ category:  card.categoryId ? card.categoryId : "", subcategory: card.subcategoryname ? card.subcategoryname : "",
                 newcategory: "", minAmount: card.minimumAmount ? card.minimumAmount : "", 
                 maxAmount: card.maximumAmount ? card.maximumAmount : "", rate: card.nairarate ? card.nairarate : "",
                  }}
              >
                  {({
                      handleChange,
                      isSubmitting,
                      handleSubmit,
                      handleBlur,
                      handleReset,
                      values,
                      touched,
                      errors
                  })=>(
                    //   <Form onSubmit={handleSubmit}>
                        
                    //          {/* category */}
                    //         <div className="form-group mt-4">
                    //           <label htmlFor="category">Category</label>
                    //           <select
                    //              name="category"
                    //              values={values.category}
                    //              onChange={(e) => {
                    //                 handleChange(e)
                                    
                    //               }}
                    //                 onBlur={handleBlur}
                    //                 className="form-control select-style" 
                    //                 id="category">
                    //                 {/* <option defaultValue="" >--Select--</option> */}
                    //                 <option value={card.categoryId} >{card.categoryname}</option>
                    //                 {category.filter(val => val.id !== card.categoryId).map((opt, index) => {
                    //                         return <option key={index}
                    //                          value={opt.id}>{opt.categoryname}</option>
                    //                     })}
                                    
                                   
                    //             </select>
                    //             <small style={{ color: "#dc3545" }}>
                    //               {touched.category && errors.category}
                    //           </small>
                    //         </div>

                           
                    //         {/* Subcategory */}
                    //         <div className="form-group">
                    //           <label htmlFor="subcategory">Enter SubCategory</label>
                    //           <input className="form-control input-style"
                    //           type="text"
                    //           id="subcategory"
                    //           value={values.subcategory}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           placeholder="" />
                    //            <small style={{ color: "#dc3545" }}>
                    //               {touched.subcategory && errors.subcategory}
                    //           </small>
                    //         </div>

               
                    //         {/* Minimum Amount */}
                    //         <div className="form-group">
                    //           <label htmlFor="minAmount">Minimum Amount</label>
                    //           <input className="form-control input-style"
                    //           type="tel"
                    //           id="minAmount"
                    //           value={values.minAmount}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           placeholder="" />
                    //            <small style={{ color: "#dc3545" }}>
                    //               {touched.minAmount && errors.minAmount}
                    //           </small>
                    //         </div>

                            
                    //          {/* Maximum Amount */}
                    //          <div className="form-group">
                    //           <label htmlFor="maxAmount">Maximum Amount</label>
                    //           <input className="form-control input-style"
                    //           type="tel"
                    //           id="maxAmount"
                    //           value={values.maxAmount}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           placeholder="" />
                    //            <small style={{ color: "#dc3545" }}>
                    //               {touched.maxAmount && errors.maxAmount}
                    //           </small>
                    //         </div>

                    //         {/* rate */}
                    //         <div className="form-group">
                    //           <label htmlFor="rate">Rate(Naira)</label>
                    //           <input className="form-control input-style"
                    //           type="tel"
                    //           id="rate"
                    //           value={values.rate}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           placeholder="" />
                    //            <small style={{ color: "#dc3545" }}>
                    //               {touched.rate && errors.rate}
                    //           </small>
                    //         </div>

                            
                    //         <div className="form-group">
                    //           <label htmlFor="terms">Terms and Conditions</label>
                    //         <CKEditor
                    //             editor={ ClassicEditor }
                    //             data={card.termsandconditions ? card.termsandconditions : value}
                    //             onReady={ editor => {
                    //                 // You can store the "editor" and use when it is needed.
                    //                 console.log( 'Editor is ready to use!', editor );
                    //             } }
                    //             onChange={ ( event,editor ) => {
                    //                 const data = editor.getData();
                    //                 setValue(data)
                    //                 console.log( { event, editor, data } );
                                   
                    //             } }
                               
                    //         /> 
                    //         <small style={{ color: "#dc3545" }}>
                    //               {value === '' ? 'Terms and Conditions is required' : ''}
                    //           </small>    
                    //         </div>




                            
                            
                    //     <div className="text-center">
                    //         <button
                    //         type="submit"
                    //         disabled={isSubmitting  || userRole === 'SubAdmin'}
                    //          className="btn btn-pinkOla mt-3">Update Crypto</button>
                    //      </div>
                    //   </Form>
                    <Form onSubmit={handleSubmit}>
                        
                             {/* category */}
                            <div className="form-group mt-4">
                              <label htmlFor="category">Category</label>
                              <select
                                 name="category"
                                 values={values.category}
                                 onChange={(e) => {
                                    handleChange(e)
                                  }}
                                    onBlur={handleBlur}
                                    className="form-control select-style" 
                                    id="category">
                                    <option defaultValue="--Select--">--Select--</option>
                                    {cryptoCoins.map((opt, index) => {
                                            return <option key={index} value={opt}>{opt}</option>
                                        })}
                                    <option value="other">Others</option>
                                   
                                </select>
                               
                            </div>

                            
                            
                            
                             {/* Unit Amount */}
                             <div className="form-group">
                              <label htmlFor="unitquantity">Unit Quantity</label>
                              <input className="form-control input-style"
                              type="number"
                              id="unitquantity"
                              value={values.unitquantity}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               
                            </div>

                            {/* rate */}
                            <div className="form-group">
                              <label htmlFor="unitprice">Unit Price(USD)</label>
                              <input className="form-control input-style"
                              type="number"
                              id="unitprice"
                              value={values.unitprice}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="" />
                               
                            </div>

                           

                            
                        <div className="text-center">
                            <button
                            type="submit"
                            // disabled={isSubmitting || userRole === 'SubAdmin'}
                             className="btn btn-pinkOla mt-3">Update Crypto Product</button>
                         </div>
                      </Form>
                  )}

              </Formik>

                    </div>
                </div> 

            </div> 

             </div>
            </div>
        </>
     );
}

const mapStateToProps = (state) =>{
    //const id = ownProps.match.params.id
    // const { postId } = useParams();
    // const id = postId
    const cards = state.admin.cryptos
    //console.log(id)
    //console.log(card)
    const card = cards.find(val => val.id === id);
    return{
        category: state.rate.category,
        card: card,
        id: id,
        userRole: state.auth.role
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCategory: () => dispatch(getRateCategory()),
        updateProduct: (resp, id) => dispatch(updateGiftCards(resp,id))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(UpdateRates);