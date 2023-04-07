import React from 'react'

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
                    <div className="h-28 w-28 bg-white border-[1px] border-gray-300">{index1 + 1} 1</div>
                    <div className="h-28 w-28 bg-green-500 border-[1px] border-gray-300">{index1 + 1} 0</div>
                    </>    
            )} else {
                return Array(4).fill(0).map((i, index3) =>
                    <>
                    <div className="h-28 w-28 bg-green-500 border-[1px] border-gray-300">{index1 + 1} 0</div>
                    <div className="h-28 w-28 bg-white border-[1px] border-gray-300">{index1 + 1} 1</div>
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