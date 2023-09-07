const config = {
    api: 'http://localhost:1337',
};
const options: RequestInit = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + process.env.ACCESS_TOKEN,
    },
};

export { options };

export default config;
