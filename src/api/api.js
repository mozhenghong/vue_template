import axios from 'axios';

// const instance  = axios.create({
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//     }
// });
function getdata() {
    console.log(111)
    axios({
        method: 'get',
        url: '/api/script',    
    }).then((response) => {
        console.log('response', response)
    });

}
export default {
    getdata,
}
