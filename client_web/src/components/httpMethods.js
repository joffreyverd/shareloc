import { checkStatus } from './Utils';

const API_HOST = 'http://jsonplaceholder.typicode.com';

function request(route, method, body) {
    let options = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(API_HOST + route, options)
        .then((result) => {
            return checkStatus(result)
            .then((res) => {
                return res.json();
            }).
            catch ((error) => {
                console.log(error);
            })
        }   
        ).catch ( error => {
            console.log(error);
        })
}

export default {
    get: (route) => request(route, 'GET'),
    post: (route, body) => request(route, 'POST', body),
    put: (route, body) => request(route, 'PUT', body),
    delete: (route) => request(route, 'DELETE')
}

