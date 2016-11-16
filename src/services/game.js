import request from '../utils/request';
import qs from 'qs';

export async function list(params) {
    return request(`/game/all.json?${qs.stringify(params)}`,{
    	credentials: 'include'
    });
}