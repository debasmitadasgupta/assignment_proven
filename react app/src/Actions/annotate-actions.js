import axios from 'axios'
import { notify } from 'react-notify-toast';


export function saveAnnotations(data) {
    return (dispatch) => {
        let options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/write`,data, options)
            .then(res => {
                notify.show("Data saved successfully", "success")
            })
            .catch(err => {
                notify.show('Error in saving data!', "custom", 5000, { background: 'white', text: "red" });
                console.error("Error", err)
            })
    }
}
