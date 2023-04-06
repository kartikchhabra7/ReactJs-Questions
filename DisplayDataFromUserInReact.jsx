import React, { useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: 1, username: "hello" },
    { id: 2, username: "react" },
    { id: 3, username: "node" },
    { id: 4, username: "express" },
    { id: 5, username: "monogdb" },
  ]);
  
  function deleteData(index){
    const deleteItem=data.filter((elm,id)=>{
        return id!==index
    })
    setData(deleteItem)
  }
  return (
    <>
      <h1 className="text-center">Display and Delete Data From User</h1>
      {data.map((val,index)=>{
        return (
            <div>
               <li key={index} style={{listStyleType:'none'}}>
                <button onClick={()=>deleteData(index)}>-</button>
                {val.username}
               </li>
            </div>
        )
      })}
    </>
  );
}

export default App;
