import React from 'react'
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

  return (
    <>
    <div className="flex w-screen h-screen items-center justify-center">
        <div className='grid grid-cols-8 grid-rows-8'>
            {
           Array(8).fill(0).map((i, index1) => {
            if(index1 % 2 === 0) {
                return Array(4).fill(0).map((i, index2) => 
                    <>
                    <div className="h-28 w-28 bg-white border-[1px] flex items-center border-gray-300 font-bold">
                        <div className='mb-auto text-sm'>
                        {Math.abs(index1-8)}
                        {index2 == 0? "A":
                        index2 == 1? "C":
                        index2 == 2? "E":
                        index2 == 3? "G":
                        null}
                        </div>
                        {Math.abs(index1-8) == 2 &&
                        <img src={wpawn} className="w-[5rem] mr-[19.5px]" />
                         }    
                        {Math.abs(index1-8) == 8 && index2 == 0 &&
                        <img src={brook} className="w-[5rem] mr-[19.5px]" />
                        }
                        {Math.abs(index1-8) == 8 && index2 == 3 &&
                        <img src={bknight} className="w-[5rem] mr-[19.5px]" />
                        }
                        {Math.abs(index1-8) == 8 && index2 == 1 &&
                        <img src={bbishop} className="w-[5rem] mr-[19.5px]" />
                        }
                        {Math.abs(index1-8) == 8 && index2 == 2 &&
                         <img src={bking} className="w-[5rem] mr-[19.5px]" />
                        }
                        </div>
                    
                    <div className="h-28 w-28 bg-green-500 border-[1px] flex items-center border-gray-300 font-bold">
                    <div className='mb-auto text-sm'>
                        {Math.abs(index1-8)}
                    {index2 == 0? "B":
                    index2 == 1? "D":
                    index2 == 2? "F":
                    index2 == 3? "H":
                    null}
                    </div>
                    {Math.abs(index1-8) == 2 &&
                    <img src={wpawn} className="w-[5rem] mr-[19.5px]" />
                     }   
                    {Math.abs(index1-8) == 8 && index2 == 0 &&
                    <img src={bknight} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 8 && index2 == 3 &&
                    <img src={brook} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 8 && index2 == 1 &&
                    <img src={bqueen} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 8 && index2 == 2 &&
                    <img src={bbishop} className="w-[5rem] mr-[19.5px]" />
                    }
                    </div>
                    </>    
            )} else {
                return Array(4).fill(0).map((i, index3) =>
                    <>
                    <div className="h-28 w-28 bg-green-500 border-[1px] flex items-center border-gray-300 font-bold">
                    <div className='mb-auto text-sm'>
                    {Math.abs(index1-8)} 
                    {index3 == 0? "A":
                    index3 == 1? "C":
                    index3 == 2? "E":
                    index3 == 3? "G":
                    null}
                    </div>
                    {Math.abs(index1-8) == 7 && 
                    <img src={bpawn} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 1 && index3 == 0 &&
                        <img src={wrook} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 1 && index3 == 1 &&
                    <img src={wbishop} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 1 && index3 == 2 &&
                    <img src={wking} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 1 && index3 == 3 &&
                    <img src={wknight} className="w-[5rem] mr-[19.5px]" />
                    }
                    </div>
                    <div className="h-28 w-28 bg-white border-[1px] flex items-center border-gray-300 font-bold">
                    <div className='mb-auto text-sm'>
                    {Math.abs(index1-8)} 
                    {index3 == 0? "B":
                    index3 == 1? "D":
                    index3 == 2? "F":
                    index3 == 3? "H":
                    null}
                    </div>
                    {Math.abs(index1-8) == 7 && 
                    <img src={bpawn} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 1 && index3 == 3 &&
                        <img src={wrook} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 1 && index3 == 1 &&
                    <img src={wqueen} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 1 && index3 == 2 &&
                    <img src={wbishop} className="w-[5rem] mr-[19.5px]" />
                    }
                    {Math.abs(index1-8) == 1 && index3 == 0 &&
                    <img src={wknight} className="w-[5rem] mr-[19.5px]" />
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