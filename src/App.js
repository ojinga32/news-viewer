import { useState } from "react";
import axios from "axios";


// 연습

// 두번째 연습
// 하이하이
function App() {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
      setData(response.data);
    });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불어오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  )
}

export default App;
