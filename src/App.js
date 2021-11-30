import {useState, useEffect} from "react";
import axios from "axios";

import './App.css';


function useFetch(url) {


const [loading, setLoading] = useState(false);
const [data, setData] = useState([])
const [error, setError] = useState("") 


useEffect(async () => {
  setLoading(true);
  try {
    let {data} = await axios.get(url)
    setData(data.data);
    setLoading(false);
  } catch(error) {
    setError(error);
  }
})

return {loading, data, error};

}



function App() {

const {loading, data, error} = useFetch("https://reqres.in/api/users")

// console.log(data);

  return (
    <div className="App">
     {
       data.map((e) => (
         <div key = {e.id}>
           <div>
             <img src = {e.avatar} alt = 'image' />
           </div>
           <div>
             <h1>{e.email}</h1>
             <h2>{e.first_name} {e.last_name}</h2>
           </div>
           <hr />
         </div>
       ))
     }
    </div>
  );
}

export default App;
