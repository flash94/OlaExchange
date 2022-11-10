import React, {useEffect} from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import DataTable from 'react-data-table-component'
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { deleteGiftCards, getGiftCards } from '../../../store/actions/admin';
import {getCryptoProducts} from '../../../store/actions/rate'
import Moment from 'react-moment'

const AdminRates = (props) => {

  const {cards, getRates, userRole, deleteRates, getProducts} = props

  const navigate = useNavigate();

  // fetch all pending trades on load of page
  useEffect(() =>{
    getProducts("")
    
  }, [getProducts])

    const columns = [
        {
          name: "Product Name",
          selector: "productName",
          sortable: true
        },
        {
            name: "Unit Price (USD)",
            selector: "unitPrice",
            sortable: true,
          },
          {
            name: "Currency",
            selector: "currency",
            sortable: true
          },
          {
            name: "Date Added",
            cell: row => <span>
            <Moment format="MMMM Do, YYYY">
            {row.dateCreated}
            </Moment>
        </span>
        },  
          {
            name: 'Actions',
            button: true,
            cell: row => 
            <button
            className="btn btn-sm btn-view"
            onClick={() => {
                ViewTransact(row._id)}}
             >View</button>,
          },
          {
            name: '',
            button: true,
            cell: row => 
            <button
            disabled={userRole === 'SubAdmin'}
            className="btn btn-sm btn-view"
            onClick={() => {
                DeleteTransact(row._id)}}
             >Delete</button>,
          }
      ];

      const ViewTransact = (id) =>{

        navigate('/admin/edit/rate/'+id)
    }

    const addButton = () =>{
      navigate('/admin/add/rates')
    }

    const DeleteTransact = (id, categoryId) =>{
      
      var confirm_flag = window.confirm("You are about to delete this crypto?");

        if(confirm_flag){
           deleteRates(id, categoryId)

           setTimeout(() => {
             getRates()
           }, 1000);
        }
    }


    return ( 
        <>
        <Sidebar />
        <div className="main">
            <div className="contain">

                    {/* add crypto button */}
                <div className="mt-4" style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button 
                    onClick={addButton}
                    disabled={userRole === 'SubAdmin'}
                     className="btn btn-pinkOla">Add New Crypto</button>
                </div>

                {/* rates table */}
                <div className="mt-4 mb-5">
                         <DataTable
                            title="Crypto Products Table"
                            columns={columns}
                            data={cards}
                            pagination
                            persistTableHead
                            progressPending={false}
                            />
                 </div>

            </div>
        </div>
        </>
     );
}

const mapStateToProps = (state) =>{
  // let xcards = state.rate.cryptoProducts
  // console.log("xcards")
  // console.log(xcards)

  return{
    cards : state.rate.cryptoProducts,
    userRole: state.auth.role
  } 
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getRates : (status) => dispatch(getGiftCards(status)),
    getProducts : (status) => dispatch(getCryptoProducts(status)),
    deleteRates : (id, categoryId) => dispatch(deleteGiftCards(id, categoryId)),
  }
}
 

export default connect(mapStateToProps, mapDispatchToProps)(AdminRates);