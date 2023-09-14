import { Dispatch } from 'redux';
import { UserActionTypes } from '../types/userTypes';
import { getUserProfileService } from '../../api/services/userService';

const fetchUserRequest = () => ({
    type: UserActionTypes.FETCH_USER_REQUEST,
});

const fetchUserSuccess = (user:any) => ({
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: user,
});

const fetchUserFailure = (error: any) => ({
    type: UserActionTypes.FETCH_USER_FAILURE,
    payload: error,
});

export const fetchUser = () => {
    return async (dispatch:Dispatch<any>) => {
        dispatch(fetchUserRequest());
        try {
            const user = await getUserProfileService();
            dispatch(fetchUserSuccess(user));

        } catch (error) {
            dispatch(fetchUserFailure(error));
        }
    }
};