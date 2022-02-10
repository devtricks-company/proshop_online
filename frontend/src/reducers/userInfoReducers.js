import {
    USER_INFO_FAIL,
    USER_INFO_LOGOUT,
    USER_INFO_REQUEST,
    USRE_INFO_SUCCESS
} from '../constant/userInfo';


export const userLoginReducer = (state={},action) => {
    switch(action.type){
        case USER_INFO_REQUEST:
            return {loading:true}
        case USRE_INFO_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case USER_INFO_FAIL:
            return {loading:false,userInfo:{},error:action.payload}
       case USER_INFO_LOGOUT:
           return {}
        default:
            return state                
    }
}