import React, { useState, useRef, useEffect } from 'react';

const GameMatrix = () => {

    // const oneTo25 = new Set();
    // for (let i = 1; i <= 25; i++) {
    //   oneTo25.add(i);
    // }

  const [isLocked, setIsLocked] = useState(false);
  const [matrix, setMatrix] = useState(Array.from({ length: 5 }, () => Array(5).fill(null)));
  const counter = useRef(0);
  //   const [counter, setCounter] = useState(0);
  //   const [crossedRowCount, setCrossedRowCount] = useState(0);
    const crossedRowCount = useRef(0);

  const counterIncrementor = () => {
    //   counter.current = (counter.current%25)+1;
      if(counter.current != 25){
        counter.current += 1;
      }
      else{
        counter.current = counter.current;
      }
    }
    const lockValues = () => {
      if(counter.current == 25)
          setIsLocked(true);
      else
          setIsLocked(false);
    };
      // Function to check if a row is fully crossed
  
//   const checkCrossedRow = () => {
    
    
//   }

    const crossedRowCountIncrementor = () => {
        crossedRowCount.current++;
        console.log("Number of rows crossed",crossedRowCount);
    }

    useEffect(() => {
        let rowsCrossed, columnsCrossed, diagonalCrossed = 0;
        let rIndex = [];
        let cIndex = [];
        let dIndex = [];
        
        matrix.forEach((row, rowIndex) => {
            if(row.every(cell => cell === 'X')){
                console.log(`Row ${rowIndex + 1} is fully crossed horizontally!`);
                rIndex.push(rowIndex);
                console.log("rIndex", rIndex)
                if(rIndex.includes(rowIndex)){
                    rowsCrossed++;
                    console.log("rowsCrossed", rowsCrossed);
                }
            }
        });
        matrix.forEach((_, colIndex) => {
            if (matrix.every((row) => row[colIndex] === 'X')) {
              console.log(`Column ${colIndex + 1} is fully crossed vertically!`);
              cIndex.push(colIndex);
              console.log("cIndex", cIndex);
              if(cIndex.includes(colIndex)){
                columnsCrossed++;
                console.log("columnsCrossed", columnsCrossed);
              }
            }
          });
        if(matrix.every((row, index) => row[index] === 'X')){
            console.log(`Main diagonal is fully crossed!`);
            dIndex.push("Main");
            diagonalCrossed++;
            console.log("dIndex", dIndex);
        }
        if(matrix.every((row, index) => row[matrix.length-1-index] === 'X')){
            console.log(`Secondary diagonal is fully crossed!`);
            dIndex.push("Secondary")
            diagonalCrossed++;
            console.log("dIndex", dIndex);
        }
        
        // if(rowsCrossed > 0 && rIndex.length!=rowsCrossed){
        //     crossedRowCountIncrementor(rowsCrossed);
        // }
        if(rIndex.length + cIndex.length + dIndex.length === 5){
            const win = true;
            console.log(win);
            return win;
          }
          console.log(matrix)
    
    }, [matrix, isLocked])
    

  const handleNumberClick = (rowIndex, colIndex) => {
    if (isLocked && matrix[rowIndex][colIndex] !== 'X' && crossedRowCount.current <= 5) {
      // Cross the clicked number
      const newMatrix = matrix.map(row => row.map(cell => cell));
      newMatrix[rowIndex][colIndex] = 'X';
      setMatrix(newMatrix);
      
    } 
    else if (!isLocked) {
      // Fill in the value when not locked
      counterIncrementor();
      const numValue = counter.current;
      console.log(numValue);
      const newMatrix = matrix.map(row => row.map(cell => cell));
      newMatrix[rowIndex][colIndex] = numValue;
      setMatrix(newMatrix);
    
    }
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <h2>Number Matrix Game</h2>
      <table style={{ borderCollapse: 'collapse', margin: '20px auto' }}>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid black',
                    position: 'relative',
                  }}
                  onClick={() => {handleNumberClick(rowIndex, colIndex)}}
                >
                  {cell === 'X' ? 'X' : (cell || '' )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {!isLocked && (
        <button onClick={lockValues}>Lock Values</button>
      )}

      {/* {matrix.map((row, rowIndex) => {
        if (isRowCrossed(row)) {
          return renderCrossedRowLine(rowIndex);
        }
        return null;
      })} */}

      <style>
        {`
          @keyframes crossed-row {
            to {
              width: 0%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GameMatrix;