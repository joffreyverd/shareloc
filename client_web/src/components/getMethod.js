export function getMethod(route) {
    return fetch(route, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    })
}
