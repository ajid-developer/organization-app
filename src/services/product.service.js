import axios from "axios";

export default getProduct = () => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}