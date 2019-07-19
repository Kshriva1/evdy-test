import axios from 'axios';
import {GET_DATA,DATA_ERROR} from './types';

export const getData = () => async dispatch => {
	try {
		const res = await axios.get('https://dev.requiemapp.com/public/memorial/random')

		dispatch({
			type: GET_DATA,
			payload: res.data.data
		});

	} catch(err) {

		dispatch({
          type: DATA_ERROR,
          payload: 'ERROR FETCHING THE DATA'
    });

	}
}