import React, { useState } from "react";

const ListSwap=()=>{
  const [list, setList] = useState([
    {title: "Item 1", checked:false},
    {title: "Item 2", checked:false},
    {title: "Item 3", checked:false}
  ])
  const [list2, setList2] = useState([
    {title: "Item A"},
    {title: "Item B"},
    {title: "Item C"}
  ])

  const handleCheck=(index)=>{
    const updatedList1 = [...list];
    updatedList1[index].checked = !updatedList1[index].checked;
    setList(updatedList1);
  }

  const handleSwap=()=>{
    const updatedList1 = [...list];
    const updatedList2 = [...list2];
    updatedList1.forEach((item, index)=>{
      if(item.checked)
      {
        const temp = updatedList1[index].title;
        updatedList1[index].title = updatedList2[index].title;
        updatedList2[index].title = temp;
      }
      updatedList1[index].checked = false;
    })
    setList(updatedList1);
    setList2(updatedList2);
  }

  return(
    <>
    <div>
      <div>
        <h3>List 1</h3>
        <ul>
          {
            list.map((i, index)=>{
              return(
                <li key={index}><input type="checkbox" value={i.checked} onChange={()=>handleCheck(index)}/>{i.title}</li>
              )
            })
          }
        </ul>
        <h3>List 2</h3>
        <ul>
          {
            list2.map((i, index)=>{
              return(
                <li key={index}>
                  {i.title}
                </li>
              )
            })
          }
        </ul>
      </div>
      <button onClick={handleSwap}>SWAP</button>
    </div>
    </>
  )
}
export default ListSwap;