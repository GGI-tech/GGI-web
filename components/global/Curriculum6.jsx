const Curriculum6 = ({ data }) => {
  const topRow = data.slice(0, 3);
  const bottomRow = data.slice(3, 5);

  return (
    <div className="w-5/6 md:w-2/3 mx-auto py-10">
      {/* TOP ROW - 3 items */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        {topRow.map((e, i) => (
          <div key={i} className="text-center">
            <p
              className="pink font-bold text-xl mb-3 min-h-[5rem]"
              dangerouslySetInnerHTML={{ __html: e.title }}
            ></p>
            <p className="italic text-sm">{e.description}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM ROW - 2 items centered */}
      <div className="flex justify-center gap-8">
        {bottomRow.map((e, i) => (
          <div key={i} className="text-center w-full sm:w-1/3">
            <p
              className="pink font-bold text-xl mb-3 min-h-[5rem]"
              dangerouslySetInnerHTML={{ __html: e.title }}
            ></p>
            <p className="italic text-sm">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum6;
