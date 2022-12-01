import React from 'react'

const Button = (props) => {
 
    return (
        <div id='' className='p-4 flex justify-center'>
            <a href={props.url} target="_blank" rel="noreferrer" className="bg-blue-700 hover:bg-blue-500 text-white  my-12 py-3 px-1 md:px-10 border border-blue-500 rounded-full shadow-lg ">
                {props.children}
            </a>
        </div>
    )
}

export default Button