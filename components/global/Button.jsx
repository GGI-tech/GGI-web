import React from 'react'

const Button = (props) => {
 
    return (
        <div id='' className='flex justify-center'>
            <a href={props.url} target="_blank" rel="noreferrer" className="bg-blue-800 hover:bg-blue-500 lg:hover:scale-105  transition duration-400 text-white my-12 py-4 px-2 sm:px-3 md:px-8 border border-blue-500 rounded-full shadow-xl ">
                {props.children}
            </a>
        </div>
    )
}

export default Button