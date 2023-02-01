
const Button = (props) => {
 
    return (
        <div id='' className='flex justify-center font-serif'>
            <a href={props.url} target="_blank" rel="noreferrer" className="md:text-base text-lg text-center bg-blue-700 hover:bg-yellow-500 hover:scale-105  transition duration-500 text-white mt-12 md:p-5 py-4 px-3 md:px-8 rounded-2xl shadow-xl whitespace-nowrap">
                {props.children}
            </a>
        </div>
    )
}

export default Button