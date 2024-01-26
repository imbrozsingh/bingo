import React, { useState, useRef, useEffect } from 'react';
import "./Table.css";
import { useNavigate } from 'react-router-dom';

const GameMatrix = () => {

  const [isLocked, setIsLocked] = useState(false);
  const [matrix, setMatrix] = useState(Array.from({ length: 5 }, () => Array(5).fill(null)));
  const [showGameOverAnimation, setShowGameOverAnimation] = useState(false);
  const [isCellClicked, setIsCellClicked] = useState(false);
  const [crossedRow, setCrossedRow] = useState([]);
  const [crossedColumn, setCrossedColumn] = useState([]);
  const [crossedDiagonal, setCrossedDiagonal] = useState([]);
  
  const win = useRef(false);
  const counter = useRef(0);
  //   const [counter, setCounter] = useState(0);
  //   const [crossedRowCount, setCrossedRowCount] = useState(0);
    const crossedRowCount = useRef(0);

  const counterIncrementor = () => {
    //   counter.current = (counter.current%25)+1;
      if(counter.current !== 25){
        counter.current += 1;
      }
      else{
        counter.current = counter;
      }
    }
    // const lockValues = () => {
    //   if(counter.current == 25)
    //       setIsLocked(true);
    //   else
    //       setIsLocked(false);
    // };
      // Function to check if a row is fully crossed
  
//   const checkCrossedRow = () => {
    
    
//   }
    
    // const crossedRowCountIncrementor = () => {
    //     crossedRowCount.current++;
    //     console.log("Number of rows crossed",crossedRowCount);
    // }

    useEffect(() => {
      if(win.current!==true){
        let rowsCrossed, columnsCrossed, diagonalCrossed = 0;
        let rIndex = [];
        let cIndex = [];
        let dIndex = [];
        
        const setCrossedRows = () => {
          setCrossedRow(rIndex);
      }
      const setCrossedColumns = () => {
        setCrossedColumn(cIndex);
    }
    const setCrossedDiagonals = () => {
      setCrossedDiagonal(dIndex);
  }

        matrix.forEach((row, rowIndex) => {
            if(row.every(cell => cell === 'X')){
                console.log(`Row ${rowIndex + 1} is fully crossed horizontally!`);
                rIndex.push(rowIndex);
                setCrossedRows();
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
              setCrossedColumns();
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
            setCrossedDiagonals();
            diagonalCrossed++;
            console.log("dIndex", dIndex);
        }
        if(matrix.every((row, index) => row[matrix.length-1-index] === 'X')){
            console.log(`Secondary diagonal is fully crossed!`);
            dIndex.push("Secondary")
            setCrossedDiagonals();
            diagonalCrossed++;
            console.log("dIndex", dIndex);
        }
        
        // if(rowsCrossed > 0 && rIndex.length!=rowsCrossed){
        //     crossedRowCountIncrementor(rowsCrossed);
        // }
        if(rIndex.length + cIndex.length + dIndex.length >= 5){
            win.current = true;
            setShowGameOverAnimation(true);
            return;
          }
          console.log(matrix)}
    
    }, [matrix, isLocked])
    

    const handleNumberClick = (rowIndex, colIndex) => {
    if (isLocked && matrix[rowIndex][colIndex] !== 'X' && crossedRowCount.current <= 5 && !win.current) {
      // Cross the clicked number
      const newMatrix = matrix.map(row => row.map(cell => cell));
      newMatrix[rowIndex][colIndex] = 'X';
      setMatrix(newMatrix);
      setIsCellClicked(true);
      
    } 
    else if (!isLocked) {
      // Fill in the value when not locked
      counterIncrementor();
      const numValue = counter.current;
      console.log(numValue);
      const newMatrix = matrix.map(row => row.map(cell => cell));
      if(newMatrix[rowIndex][colIndex] != null){
          counter.current-- ;
      }
      else{newMatrix[rowIndex][colIndex] = numValue;
      setMatrix(newMatrix);}
      if(numValue === 25){
        setIsLocked(true);
      }
    
    }
  };

  // const handleAnimationEnd = () => {
  //   setShowGameOverAnimation(false);
  // }

  const handleAutoFill = () => {
    const autoFilledMatrix = generateRandomMatrix();
    setIsLocked(true);
    setMatrix(autoFilledMatrix);
    setIsCellClicked(false);
  };


  const navigate = useNavigate();
  const handlePlayAgain = () => {
    navigate('/');
    const emptyMatrix = generateEmptyMatrix();
    setIsLocked(false);
    setMatrix(emptyMatrix);
    setIsCellClicked(false);
    win.current = false;
    setCrossedRow([]);
    setCrossedColumn([]);
    setCrossedDiagonal([]);
    crossedRowCount.current = 0;
    counter.current = 0;
    setShowGameOverAnimation(false);
  }

  const handleReset = () => {
    const emptyMatrix = generateEmptyMatrix();
    setIsLocked(false);
    setMatrix(emptyMatrix);
    setIsCellClicked(false);
    win.current = false;
    setCrossedRow([]);
    setCrossedColumn([]);
    setCrossedDiagonal([]);
    crossedRowCount.current = 0;
    counter.current = 0;
    setShowGameOverAnimation(false);
  }

  const generateRandomMatrix = () => {
    const numbers = Array.from({length: 25}, (_, index) => index + 1);
    const shuffledNumbers = shuffleArray(numbers);

    let autoFilledMatrix = Array.from({length: 5}, () => Array(5).fill(null));

    for(let rowIndex = 0; rowIndex < 5; rowIndex++){
      for(let colIndex = 0; colIndex < 5; colIndex++){
        autoFilledMatrix[rowIndex][colIndex] = shuffledNumbers[rowIndex * 5 + colIndex];
      }
    }
    return autoFilledMatrix
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const generateEmptyMatrix = () => {
    const emptyMatrix = Array.from({length: 5}, () => Array(5).fill(null));

    return emptyMatrix
  }
  
  const setBingoColor = (letterIndex) => {
    if(crossedRow.length+crossedColumn.length+crossedDiagonal.length>=letterIndex){
      return '#F3B462';
    }
    else{
      return "#F06060";
    }
    // if(crossedColumn.includes(letterIndex)){
    //   return "red";
    // }
    // if(crossedDiagonal.includes(letterIndex)){
    //   return "red";
    // }
  }
  
  return (
    <div style={{ textAlign: 'center', position: 'relative', fontSize: '0.5vw' }}>
      <h2 style={{ fontSize: '3.5vw', letterSpacing: '0.8vw' }}>
        <span className='bingoHeading' style={{ color: setBingoColor(1) }}>B</span>
        <span className='bingoHeading' style={{ color: setBingoColor(2) }}>I</span>
        <span className='bingoHeading' style={{ color: setBingoColor(3) }}>N</span>
        <span className='bingoHeading' style={{ color: setBingoColor(4) }}>G</span>
        <span className='bingoHeading' style={{ color: setBingoColor(5) }}>O</span>
      </h2>
      <table style={{ borderCollapse: 'separate', margin: '2rem auto', padding: '10px', fontSize: '2vw' }}>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    width: '2em',
                    height: '2em',
                    border: '1px solid grey',
                    position: 'relative',
                    borderRadius: '1.5rem',
                    color: crossedRow.includes(rowIndex) || crossedColumn.includes(colIndex) || (crossedDiagonal.includes("Main") && rowIndex === colIndex) || (crossedDiagonal.includes("Secondary") && rowIndex === matrix.length - 1 - colIndex) ? '#F2EBC0' : 'white',
                    backgroundColor: crossedRow.includes(rowIndex) || crossedColumn.includes(colIndex) || (crossedDiagonal.includes("Main") && rowIndex === colIndex) || (crossedDiagonal.includes("Secondary") && rowIndex === matrix.length - 1 - colIndex) ? '#F3B462' : '#F06060',
                    borderColor: crossedRow.includes(rowIndex) || crossedColumn.includes(colIndex) || (crossedDiagonal.includes("Main") && rowIndex === colIndex) || (crossedDiagonal.includes("Secondary") && rowIndex === matrix.length - 1 - colIndex) ? '#F2EBC0' : 'grey',
                    boxShadow: crossedRow.includes(rowIndex) || crossedColumn.includes(colIndex) || (crossedDiagonal.includes("Main") && rowIndex === colIndex) || (crossedDiagonal.includes("Secondary") && rowIndex === matrix.length - 1 - colIndex) ? '0 0 10px #F2EBC0 inset' : '',
                    transition:  'all 0.3s linear',
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

      {/* {!isLocked && !isCellClicked && (
        <button onClick={lockValues}>Lock Values
        <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
        </button>
      )} */}
      {!isCellClicked && <button onClick={handleAutoFill}><span>Auto-Fill</span>
      <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
  </button>}
  {!isCellClicked && <button onClick={handleReset}><span>Reset</span>
      <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
  </button>}

      {showGameOverAnimation && (
        <div>
          {isCellClicked && <button className='game-over-animation' onClick={handlePlayAgain}>
          <span>You Win! Play Again?</span>
          <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
        </button>}
        </div>
      )}

      <style>
        {`
          .game-over-animation {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 25%;
            height: 10%;
            font-size: 24px;
            color: darkgreen;
            background-color: white;
            animation: fadeInOut 3s ease-in-out;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            letter-spacing: 0.3vw;  
          }

          @keyframes crossed-row {
            to {
              width: 0%;
            }
          }
          @keyframes fadeInOut {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GameMatrix;