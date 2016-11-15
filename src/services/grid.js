import request from '../utils/request';
import qs from 'qs';

export async function list(params) {
  return request('/channel/list.json', {
    method: 'get',
    body: qs.stringify(params),
  });
}

export async function add(params) {
  return request('/channel/add.json', {
    method: 'post',
    body: qs.stringify(params),
  });
}

export async function mod(params) {
  return request('/channel/mod.json', {
    method: 'post',
    body: qs.stringify(params),
  });
}
