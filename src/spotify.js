//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize?";

//redirects user back to our website after user logins.
const redirectUri = "http://localhost:3000/";

const clientId = "c29c06e80b664b76b6c0f75f2b9f15b2";

//what this app is allowed to do to the account
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
//goes to the url and go the location where we had a hash for the access token in the Url
export const getTokenFromUrl = () =>{
    return window.location.hash
        .substring
        .split('&')
        .reduce((initial, item) => {
            //#accessToken=mysupersecretkey&name=sonny
            // split it by the equal sign
            let parts = item.split('=');
            //go into initial array being returned. for the access token, decode the URI component which is the key.
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial;
        }, {});
}

//%20 is the ascii value for space. response_type=token makes it so receive back a token(authentication token).
export const loginUrl = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;