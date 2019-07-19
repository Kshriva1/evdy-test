import {GET_DATA,DATA_ERROR} from '../actions/types';

const initialState = {
	data : []
}

export default function(state=initialState,action) {
	const {type,payload} = action

	switch(type) {

		case GET_DATA:
		case DATA_ERROR:
			return {
				data: payload
			}
        default:
        	return state
	}
}