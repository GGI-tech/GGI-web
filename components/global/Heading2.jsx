
const Heading2 = ({children,margin}) => {
    return (
        <div id='' className={`mb-12 mt-48 ${margin?'md:mt-'+margin:'md:mt-72'}`}>
            <h1 className='mx-auto primary px-2 md:w-4/5 xl:w-3/5 text-justify leading-relaxed font-sans font-bold'>{children}</h1>
        </div>
    );
};

export default Heading2;