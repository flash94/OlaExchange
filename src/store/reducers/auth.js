import jwt_decode from "jwt-decode";

const initState = {
  isAuthenticated: false,
  token: '',
  firstname: "",
  lastname: "",
  email: "",
  id: "",
  phoneNumber: "",
  isVerified: false,
  isEnabled: false,
  role: "",
  profilePic: "",
  accountDetails: [],
  banks: [],
  resetcode: false,
  email_msg: "",
  validlink: false,
  photoloader: false,
  loading: false,
  details:{}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      //alert("x");
      var data = action.data.data
      localStorage.setItem("token", data)
      var stateData = jwt_decode(data);
      console.log(stateData.user)
      console.log("ekule o")
      //var userRole = (stateData.user.role[0] == undefined) ? "User" : stateData.user.role[0];
      var userRole = "Admin";
      
        return {
              ...state,
              loading: false,
              isAuthenticated: true,
              token: stateData.user.token,
              firstname: stateData.user.firstName,
              lastname: stateData.user.lastName,
              email: stateData.user.email,
              id: stateData.user._id,
              phoneNumber: stateData.user.phoneNumber,
              isVerified: false,
              isEnabled: false,
              role: userRole,
              profilePic: "",
              accountDetails: []
          }
    case 'PasswordChanged':
      return{
        ...state,
        loading: true,
        isAuthenticated: false,
        token: '',
        firstname: '',
        lastname: '',
        email: '',
        id: '',
        phoneNumber: '',
        isVerified: '',
        isEnabled: '',
        role: '',
        profilePic: '',
        accountDetails: {}
      }
   case 'SIGNUP_SUCCESS':
            return{
              ...state,
            }
    case 'SIGNUP_FAIL':
          return{
            ...state
          }
    case 'VALID_RESETCODE':
      return{
        ...state,
        resetcode: false
      }
    case 'INVALID_RESETCODE':
      return{
        ...state,
        resetcode: true
      }
    case 'VALID_EMAIL_LINK':
      return{
        ...state,
        validlink: false,
        email_msg: action.data.message
      }
    case 'INVALID_EMAIL_LINK':
      return{
        ...state,
        validlink: true,
        email_msg: action.data.message
      }
    case 'PhotoLoader':
        return{
            ...state,
            photoloader: true
        }
    case 'StopPhotoLoader':
        return{
            ...state,
            photoloader: false
      }
    case 'profilePicture':
        return{
            ...state,
            profilePic: action.image   
      }
    case 'PROFILE_UPDATE':
      return{
        ...state
      }
    case 'filterDetails':
      let details = state.accountDetails.find(pro=> pro.id === action.id)
      return{
        ...state,
        details: details
      }
    case 'AccountCreateSuccessful':
      return{
        ...state,
        accountDetails: action.data.accountDetails
      }
   case 'AccountUpdatedSuccessful':
     return{
       ...state,
       accountDetails: action.data.accountDetails
     }
  case "AccountDeletedSuccessful":
    return{
      ...state,
      accountDetails: action.data.accountDetails
    }
  case 'Banks':
    return{
      ...state,
      banks: action.data.data
    }
    default:
      return state;
  }
};

export default authReducer;
