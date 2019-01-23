export function checkStatus(response) {
    return new Promise((resolve, reject) => {
        if (response.status >= 200 && response.status < 300) {
            return resolve(response);
        }
        return reject(response.text());
    });
}
