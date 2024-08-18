import axios from "axios";


export const getmember = (token, callback) => {
    axios.get('http://localhost:8080/api/v1/members', {
        headers: {
            'Authorization': token,
        }
    })
    .then(res => {
        callback(true, res.data);
    }).catch(err => {
        callback(false, err);
    })
}