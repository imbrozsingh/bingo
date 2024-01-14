// import React, {useState} from 'react'
// import "./Table.css"

// function TableInput() {
//     const [tableData, setTableData] = useState(Array.from({length: 5}, () => Array(5).fill(''))); //Creates a 5x5 Array with empty String

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("Submitted Data:", tableData)
//     }

//     const handleInputChange = (rowIndex, colIndex, value) => {
//         const numValue = parseInt(value, 10);
//         if (!isNaN(numValue) && numValue >= 1 && numValue <= 25 && !isNumberRepeated(numValue)){
//             const newData = [...tableData];
//             newData[rowIndex][colIndex] = value;
//             setTableData(newData);
//         }
//     }

//     const isNumberRepeated = (value) => {
//         for (let i = 0; i < tableData.length; i++) {
//             for (let j = 0; j < tableData[i].length; j++) {
//               if (tableData[i][j] === value) {
//                 return true; // Number is repeated
//               }
//             }
//           }
//           return false; // Number is not repeated
//     }

//   return (
//     <div>
//         <h2>BINGO</h2>
//         <form onSubmit={handleSubmit}>
//             <table>
//                 <tbody>
//                     {tableData.map((row, rowIndex) => (
//                         <tr key={rowIndex}>
//                             {row.map((cell, colIndex) => (
//                                 <td key={colIndex}>
//                                     <input className='cell' type='text' pattern='[0-9]*' value={cell} onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)} required />
//                                 </td>
//                             )
//                             )}
//                         </tr>
//                     )
//                     )}
//                 </tbody>
//             </table>
//             <input type='Submit' value="Submit" />
//         </form>
//     </div>
//   )
// }

// export default TableInput