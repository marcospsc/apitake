const fetch = require("node-fetch");
async function start(){
    const api = async () => {
        const response = await fetch('https://api.github.com/users/takenet/repos?&sort=created_at:desc&language=C#');
        const data = await response.json();
        return data;
    }

    const api_data = await api();

    return api_data;
}

start();