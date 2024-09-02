import { event } from "nextjs-google-analytics";
import { React, useState } from 'react'
const Button = (props) => {
    const [page, setPage] = useState("");

    function handleClick(e) {

        setPage(props.page)
        event("apply_button_click", {
            category: "Button",
            label: page,
        });
        setPage("");
    }

    return (
        <div id='' onClick={handleClick} className='flex justify-center font-serif'>
            {/* <a href={props.url} target="_blank" rel="noreferrer" className="md:text-base text-lg text-center bg-blue-700 hover:bg-yellow-500 hover:scale-105  transition duration-500 text-white mt-12 md:p-5 py-4 px-3 md:px-8 rounded-2xl shadow-xl whitespace-nowrap">
                {props.children}
            </a> */}
            <a href={props.url} target="_blank" rel="noreferrer noopener" className="mt-12  rounded-xl px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300 whitespace-nowrap">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 ease"></span>
                <span className="relative">  {props.children}</span>
            </a>
        </div>
    )
}

export default Button