import React, { useRef } from 'react'
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


const Board = () => {
    const squaresRef = useRef<any>([])

    function checkPieceLocation(piece: React.MouseEvent<HTMLDivElement, MouseEvent>, data: any, e: any) {
        let pieceLocation = data.target.getBoundingClientRect()
        squaresRef.current.forEach((square:any) => {
            if(pieceLocation.bottom <= square.location.bottom && pieceLocation.top >= square.location.top && pieceLocation.left >= square.location.left && pieceLocation.right <= square.location.right) {
              console.log("pieceLocation--->", pieceLocation)
              console.log("square.location--->", square.location)
              console.log('square element ---->' , square.element)
              console.log("square --->", square.element.id)
                }
                })
    }    
    return (
    <>
    <div className="flex w-screen h-screen items-center justify-center">
        <div className='grid grid-cols-8 grid-rows-8'>
            {
           Array(8).fill(0).map((i, index1) => {
            if(index1 % 2 === 0) {
                return Array(4).fill(0).map((_, index2) => 
                    <>
                    <div 
                    ref={el => el != null && squaresRef.current.push({"element": el.id, "location": el.getBoundingClientRect()})}
                    id={`white-${index2 == 0? "A":
                        index2 == 1? "C":
                        index2 == 2? "E":
                        index2 == 3? "G":
                        null}-${Math.abs(index1-8)}`} 
                        className="h-28 w-28 bg-white border-[1px] flex items-center border-gray-300 font-bold">
                        <div className='mb-auto text-sm'>
                        {Math.abs(index1-8)}
                        {index2 == 0? "A":
                        index2 == 1? "C":
                        index2 == 2? "E":
                        index2 == 3? "G":
                        null}
                        </div>
                        {Math.abs(index1-8) == 2 &&
                        <Draggable 
                        onStart={(e, data) => {}} 
                        onStop={(e, data) => checkPieceLocation(e?.target?.attributes[0].nodeValue, e, data)}>
                        <img 
                        src={wpawn}
                        className="w-[5rem] mr-[19.5px]" />
                        </Draggable>
                         }    
                        {Math.abs(index1-8) == 8 && index2 == 0 &&
                        <Draggable 
                        onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                        onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                        <img src={brook} className="w-[5rem] mr-[19.5px]" />
                        </Draggable>
                        }
                        {Math.abs(index1-8) == 8 && index2 == 3 &&
                        <Draggable 
                        onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                        onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                        <img src={bknight} className="w-[5rem] mr-[19.5px]" />
                        </Draggable>
                        }
                        {Math.abs(index1-8) == 8 && index2 == 1 &&
                        <Draggable 
                        onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                        onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                        <img src={bbishop} className="w-[5rem] mr-[19.5px]" />
                        </Draggable>
                        }
                        {Math.abs(index1-8) == 8 && index2 == 2 &&
                        <Draggable 
                        onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                        onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                        <img src={bking} className="w-[5rem] mr-[19.5px]" />
                        </Draggable>
                        }
                        </div>
                    
                    <div 
                    ref={el => el != null && squaresRef.current.push({"element": el, "location": el.getBoundingClientRect()})}
                    id={`green-${index2 == 0? "B":
                        index2 == 1? "D":
                        index2 == 2? "F":
                        index2 == 3? "H":
                        null}-${Math.abs(index1-8)}`}  
                        className="h-28 w-28 bg-green-500 border-[1px] flex items-center border-gray-300 font-bold">
                    <div className='mb-auto text-sm'>
                        {Math.abs(index1-8)}
                    {index2 == 0? "B":
                    index2 == 1? "D":
                    index2 == 2? "F":
                    index2 == 3? "H":
                    null}
                    </div>
                    {Math.abs(index1-8) == 2 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wpawn} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                     }   
                    {Math.abs(index1-8) == 8 && index2 == 0 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={bknight} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 8 && index2 == 3 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={brook} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 8 && index2 == 1 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={bqueen} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 8 && index2 == 2 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={bbishop} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    </div>
                    </>    
            )} else {
                return Array(4).fill(0).map((_, index3) =>
                    <>
                    <div 
                    ref={el => el != null && squaresRef.current.push({"element": el, "location": el.getBoundingClientRect()})}
                    id={`white-${index3 == 0? "A":
                        index3 == 1? "C":
                        index3 == 2? "E":
                        index3 == 3? "G":
                        null}-${Math.abs(index1-8)}`}  
                    className="h-28 w-28 bg-green-500 border-[1px] flex items-center border-gray-300 font-bold">
                    <div className='mb-auto text-sm'>
                    {Math.abs(index1-8)} 
                    {index3 == 0? "A":
                    index3 == 1? "C":
                    index3 == 2? "E":
                    index3 == 3? "G":
                    null}
                    </div>
                    {Math.abs(index1-8) == 7 && 
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={bpawn} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 1 && index3 == 0 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wrook} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 1 && index3 == 1 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wbishop} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 1 && index3 == 2 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wking} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 1 && index3 == 3 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wknight} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    </div>
                    <div 
                    ref={el => el != null && squaresRef.current.push({"element": el, "location": el.getBoundingClientRect()})}
                    id={`white-${index3 == 0? "B":
                        index3 == 1? "D":
                        index3 == 2? "F":
                        index3 == 3? "H":
                        null}-${Math.abs(index1-8)}`}  className="h-28 w-28 bg-white border-[1px] flex items-center border-gray-300 font-bold">
                    <div className='mb-auto text-sm'>
                    {Math.abs(index1-8)} 
                    {index3 == 0? "B":
                    index3 == 1? "D":
                    index3 == 2? "F":
                    index3 == 3? "H":
                    null}
                    </div>
                    {Math.abs(index1-8) == 7 && 
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={bpawn} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 1 && index3 == 3 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wrook} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 1 && index3 == 1 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wqueen} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }
                    {Math.abs(index1-8) == 1 && index3 == 2 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wbishop} className="w-[5rem] mr-[19.5px]" />
                    </Draggable> 
                    }
                    {Math.abs(index1-8) == 1 && index3 == 0 &&
                    <Draggable 
                    onStart={(e, data) => console.log(e?.target?.attributes[0].nodeValue)} 
                    onStop={(e, data) => console.log(e?.target?.attributes[0].nodeValue)}>
                    <img src={wknight} className="w-[5rem] mr-[19.5px]" />
                    </Draggable>
                    }

                    </div>
                    </>       
            )}
        }
           )}
        </div>
    </div>
    </>
  )
}

export default Board