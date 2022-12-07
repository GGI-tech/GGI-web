import React from 'react'

const Button = (props) => {
 
    return (
        <div id='' className='p-4 flex justify-center'>
            <a href={props.url} target="_blank" rel="noreferrer" className="bg-blue-700 hover:bg-blue-500 hover:scale-105  transition duration-400 text-white my-12 py-4 px-1 sm:px-4 md:px-10 border border-blue-500 rounded-full shadow-xl ">
                {props.children}
            </a>
        </div>
    )
}

export default Button