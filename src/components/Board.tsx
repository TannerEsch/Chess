import React from 'react'

const Board = () => {
    // function checkLocation(index1:number, index2:number) {
    //     let num;
    //     switch(index1) {
    //         case 1:
    //             index2 == 0? num = 1: index2 == 1? num = 3: index2==2? 5: num = 7
    //         break
    //     }
    // }

  return (
    <>
    <div className="flex w-screen h-screen items-center justify-center">
        <div className='grid grid-cols-8 grid-rows-8'>
            {
           Array(8).fill(0).map((i, index1) => {
            console.log(index1)
            if(index1 % 2 === 0) {
                return Array(4).fill(0).map((i, index2) => 
                    <>
                    <div className="h-28 w-28 bg-white border-[1px] border-gray-300">{Math.abs(index1-8)} </div>
                    <div className="h-28 w-28 bg-green-500 border-[1px] border-gray-300">{Math.abs(index1-8)}</div>
                    </>    
            )} else {
                return Array(4).fill(0).map((i, index3) =>
                    <>
                    <div className="h-28 w-28 bg-green-500 border-[1px] border-gray-300">
                    {Math.abs(index1-8)} 
                    {Math.abs(index1-8) == 1 && index3 == 0? "A":null}
                    {Math.abs(index1-8) == 1 && index3 == 1? "C":null}
                    {Math.abs(index1-8) == 1 && index3 == 2? "E":null}
                    {Math.abs(index1-8) == 1 && index3 == 3? "G":null}

                    </div>
                    <div className="h-28 w-28 bg-white border-[1px] border-gray-300">
                    {Math.abs(index1-8)} 
                    {Math.abs(index1-8) == 1 && index3 == 0? "B":null}
                    {Math.abs(index1-8) == 1 && index3 == 1? "D":null}
                    {Math.abs(index1-8) == 1 && index3 == 2? "F":null}
                    {Math.abs(index1-8) == 1 && index3 == 3? "H":null}

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