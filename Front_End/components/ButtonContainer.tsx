import React from 'react'

const ButtonContainer = (props) => {
  return (
    <div>
        <button 
            className='bg-[#B1E3ED] transition-all font-bold max-w-7xl py-3 px-5 my-10 rounded hover:bg-teal-200 focus:outline-none focus:shadow-outline' 
            onClick={props.onClickAction}
        >
        {props.name}
    </button>
    </div>
  )
}

export default ButtonContainer