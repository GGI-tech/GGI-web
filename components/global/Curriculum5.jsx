const Curriculum5 = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-5/6 md:w-2/3 mx-auto py-10">
            {data.slice(0, 6).map((e, i) => (
                <div key={i} className="text-center">
                    <p
                        className="pink font-bold font-sans text-xl mb-3 min-h-[5rem]"
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    ></p>
                    <p className="italic text-sm">{e.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Curriculum5;
