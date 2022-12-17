import React from 'react'

const Button = (props) => {
 
    return (
        <div id='' className='flex justify-center'>
            <a href={props.url} target="_blank" rel="noreferrer" className="text-center bg-blue-700 hover:bg-blue-500 hover:scale-105  transition duration-400 text-white my-12 py-4 px-3 md:px-8 rounded-full shadow-xl whitespace-nowrap">
                {props.children}
            </a>
        </div>
    )
}

export default Button