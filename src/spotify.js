import axios from 'axios';
const authendpoint="https://accounts.spotify.com/authorize?";
const clientid="c8974a4c47c54be7bd623c8be567c3a9";
const redirecturi="http://localhost:3000";

const scopes=["user-library-read","playlist-read-private"];
export const endpointlogin=`${authendpoint}client_id=${clientid}&redirect_uri=${redirecturi}&scopes=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

const apiclient=axios.create({

baseURL:"https://api.spotify.com/v1/",
});

export const setclienttoken = (token)=>{

    apiclient.interceptors.request.use(async function(config){
config.headers.Authorization="Bearer" + token;
return config;
    });
}; 
export default apiclient;