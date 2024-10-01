import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


function ReactQuery() {
  async function getData() {
    const data = await axios.get('https://fakestoreapi.com/products/').then((res) => {
      return res.data;
    });
    return data;
  }

  const x = useQuery('product', getData);
  console.log(x);

  return (
    <div>ReactQuery</div>
  );
}

export default ReactQuery;

















// import axios from 'axios';
// import React from 'react';
// import { useQuery } from 'react-query';

// function ReactQuery() {
//   const getData = async () => {
//     const res = await axios.get('https://fakestoreapi.com/products/');
//     return res.data; 
//   };

  
//   const { data, isLoading, isError } = useQuery('product', getData);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading data.</div>;
//   }
//   console.log(data);

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {data.map((product) => (
//           <li>{product.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ReactQuery;




