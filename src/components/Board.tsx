import React, { useEffect, useReducer, useState } from 'react'
import Draggable from "react-draggable";
import bknight from '../assets/bknight.svg.png'
import wknight from '../assets/wknight.svg.png'
import bpawn from '../assets/bpawn.svg.png'
import wpawn from '../assets/wPawn.svg.png'
import bking from '../assets/bking.svg.png'
import wking from '../assets/wking.svg.png'
import bqueen from '../assets/bqueen.svg.png'
import wqueen from '../assets/wqueen.svg.png'
import brook from '../assets/brook.svg.png'
import wrook from '../assets/wRook.svg.png'
import bbishop from '../assets/bbishop.svg.png'
import wbishop from '../assets/wbishop.svg.png'

//class for the board squares
class Square {
    piece: any | null
    row: number | null
    column: number | string | null
    color: string | null
    constructor(piece: any | null, row: number | null, column: number | string | null, color: string | null) {
        this.piece = piece
        this.row = row
        this.column = column
        this.color = color
    }
}

//array with a length of 64 to represent the 64 squares on the chess board



const Board = () => {
const [displayBoard, setDisplayBoard] = useState<any>([])
const chessBoardAsArray = new Array(64)
useEffect(() => {
    //create a new board
    let chessBoard = new Array(8)
    //create a new row
    for(let i = 0; i < chessBoard.length; i++) {
        chessBoard[i] = new Array(8)
    }
    //create a new column
    for(let i = 0; i < chessBoard.length; i++) {
        for(let j = 0; j < chessBoard[i].length; j++) {
            chessBoard[i][j] = new Square(null, Math.abs(i-8), j+1, null)
        }
    }
    //set the color of the squares
    for(let i = 0; i < chessBoard.length; i++) {
        for(let j = 0; j < chessBoard[i].length; j++) {
            if(i % 2 === 0) {
                if(j % 2 === 0) {
                    chessBoard[i][j].color = 'white'
                } else {
                    chessBoard[i][j].color = 'green'
                }
            } else {
                if(j % 2 === 0) {
                    chessBoard[i][j].color = 'green'
                } else {
                    chessBoard[i][j].color = 'white'
                }
            }
        }
    }
    //set the pieces on the board
    for(let i = 0; i < chessBoard.length; i++) {
        for(let j = 0; j < chessBoard[i].length; j++) {
            if(i === 0) {
                if(j === 0 || j === 7) {
                    chessBoard[i][j].piece = brook
                } else if(j === 1 || j === 6) {
                    chessBoard[i][j].piece = bknight
                } else if(j === 2 || j === 5) {
                    chessBoard[i][j].piece = bbishop
                } else if(j === 3) {
                    chessBoard[i][j].piece = bqueen
                } else if(j === 4) {
                    chessBoard[i][j].piece = bking
                }
            } else if(i === 1) {
                chessBoard[i][j].piece = bpawn
            } else if(i === 6) {
                chessBoard[i][j].piece = wpawn
            } else if(i === 7) {
                if(j === 0 || j === 7) {
                    chessBoard[i][j].piece = wrook
                } else if(j === 1 || j === 6) {
                    chessBoard[i][j].piece = wknight
                } else if(j === 2 || j === 5) {
                    chessBoard[i][j].piece = wbishop
                } else if(j === 3) {
                    chessBoard[i][j].piece = wqueen
                } else if(j === 4) {
                    chessBoard[i][j].piece = wking
                }
            }
        }
    }
    //convert the 2d array to a 1d array
    let index = 0
    for(let i = 0; i < chessBoard.length; i++) {
        for(let j = 0; j < chessBoard[i].length; j++) {
            chessBoardAsArray[index] = chessBoard[i][j]
            index++
        }
    }

    //convert columns to letters
    for(let i = 0; i < chessBoardAsArray.length; i++) {
        if(chessBoardAsArray[i].column === 1) {
            chessBoardAsArray[i].column = 'A'
        } else if(chessBoardAsArray[i].column === 2) {
            chessBoardAsArray[i].column = 'B'
        } else if(chessBoardAsArray[i].column === 3) {
            chessBoardAsArray[i].column = 'C'
        } else if(chessBoardAsArray[i].column === 4) {
            chessBoardAsArray[i].column = 'D'
        } else if(chessBoardAsArray[i].column === 5) {
            chessBoardAsArray[i].column = 'E'
        } else if(chessBoardAsArray[i].column === 6) {
            chessBoardAsArray[i].column = 'F'
        } else if(chessBoardAsArray[i].column === 7) {
            chessBoardAsArray[i].column = 'G'
        } else if(chessBoardAsArray[i].column === 8) {
            chessBoardAsArray[i].column = 'H'
        }
    }


    //set the state of the board
    setDisplayBoard(chessBoardAsArray)
    }, [])

    return (
    <>
    <div className="flex w-screen h-screen items-center justify-center">
    <div className='grid grid-cols-8 grid-rows-8'>
        {displayBoard?.map((square:any, index:number) => 
                <div style={{background: square.color }} className="w-28 h-28 flex flex-col items-center justify-center text-black font-bold" key={index}>

                    <div className='flex w-[100%] justify-start mb-auto'>
                    {square.column === 'A' &&<div>{square.row}</div>}
                    {square.row === 1 && <div>{square.column}</div>}
                    </div>

                    {square.piece && 
                        <img src={square.piece} className='mb-4 w-20 h-20' />
                    }
                </div>
        )}
        </div>
    </div>

    </>
  )
}

export default Board 
    // function checkPieceLocation(piece: React.MouseEvent<HTMLDivElement, MouseEvent>, data: any, e: any) {
    //     let pieceLocation = data.target.getBoundingClientRect()
    //     squaresRef.current.forEach((square:any) => {
    //         if(pieceLocation.bottom <= square.location.bottom && pieceLocation.top >= square.location.top && pieceLocation.left >= square.location.left && pieceLocation.right <= square.location.right) {
    //         //   console.log("pieceLocation--->", pieceLocation)
    //         //   console.log("square.location--->", square.location)
    //         //   console.log('square element ---->' , square.element)
    //           console.log("square --->", square.element)
    //             }
    //             })
    // } 
