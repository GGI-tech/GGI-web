
const Container = (props) => {
    return (
        <div className='px-8 text-lg lg:w-2/3 mx-auto'>
            {props.children}
        </div>

    );
};

export default Container;
