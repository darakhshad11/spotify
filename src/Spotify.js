export const authEndpoint = "https://accountsspotify.com/authorize";
const redireactUrl="http://localhost:3000/";
const clientId="efb80e9b4abe4f39a911b701a3d724c7";
 
const scopes = [

    "user-read-currently-playing",
    "user-read-recently-played",  
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    
    ];
export const getTokenFromUrl=() =>{
        return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) =>{
            let parts =item.split("=")
            initial[parts[0]]=decodeURIComponent(parts[1])
           return initial;
            },{}) 
          
        
        }

export const loginUrl =`${authEndpoint}?client_id=${clientId}&redirect_uri=${redireactUrl}&scopes=${scopes.join("%20")}
&response_type=token&show_dialog=true`