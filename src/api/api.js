// export const API_URL = 'http://localhost:3000/v1';
// export const API_URL = 'http://srapi.herokuapp.com/v1';
export const API_URL = 'https://favidpad-api.herokuapp.com/v1';

function request(url, method = 'GET', data = null) {
  const config = {
    method: method,
    headers: {
      'content-type': 'application/json'
    }
  };

  if (method === 'POST' || method === 'PATCH') {
    config.body = JSON.stringify(data);
  }

  return fetch(`${API_URL}${url}`,config)
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw Error(response.statusText());
      }
    });
}

function get(url) {
  return request(url);
}

function post(url, data) {
  return request(url, 'POST', data);
}

function patch(url, data) {
  return request(url, 'PATCH', data);
}

function _delete(url) {
  return request(url, 'DELETE');
}

export default {
  get,
  post,
  patch,
  delete: _delete
};