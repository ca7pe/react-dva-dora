import request from '../utils/request';
import qs from 'qs';

export async function list(params) {
  return request('/game/all.json', {
    method: 'get',
    body: qs.stringify(params),
  });
}