export function getMethod(route) {
    return fetch(route, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    })
}

export function postMethod(route) {
    alert('post method');
}

export function putMethod(route) {
    alert('put method');
}

export function deleteMethod(route) {
    alert('delete method');
}
