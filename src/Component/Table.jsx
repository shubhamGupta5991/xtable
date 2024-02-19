import React, { useState } from 'react'

let customTable = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]
const Table = () => {
    const [viewSort,setViewSort] = useState(customTable);
    const [order,setOrder] = useState('')


    
    //    console.log(viewSort)
    

    function handleViews(){
        const sort = [...viewSort].sort((a,b)=>b.views-a.views)
       setViewSort(sort)

    }
    function handleDate(){
        const sortDate = [...viewSort].sort((a,b)=>{
            let dateA = new Date(a.date);
            // console.log(dateA);
            let dateB = new Date(b.date);
            // console.log(dateB);
            return dateB-dateA
        })
       setViewSort(sortDate)

    }
    
    
  return (
    <div>
        <h1>Date and Views Table</h1>
        <div>
            <button onClick={handleDate}>Sort by Date</button>
            <button onClick={handleViews}>Sort by Views</button>
        </div>
        <table>
            <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>
            </tr>
           <tbody>
            {
                viewSort.map((data,i)=>(
                    <tr key={i}>
                        <td>{data.date}</td>
                        <td>{data.views}</td>
                        <td>{data.article}</td>
                    </tr>
                ))
            }
           </tbody>
           
        </table>

    </div>
  )
}

export default Table