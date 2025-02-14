import { useState } from "react";

function Home() {
  const [requestBody, requestBodySet] = useState({
    name: "Ahmad Ilham",
  });
  return (
    <>
      <div>name : {requestBody.name}</div>
      <button onClick={() => requestBodySet({ ...requestBody, name: "Keren" })}>
        click me
      </button>
    </>
  );
}

export default Home;
