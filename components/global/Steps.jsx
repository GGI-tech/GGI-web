import React, { useState } from "react";
import Container from "./Container";

const Steps = ({ data }) => {
  const [open, setOpen] = useState(Array(data.length).fill(false));

  const toggle = (id) => {
    setOpen((prev) =>
      prev.map((v, i) => (i === id ? !v : v))
    );
  };
  const shouldShowLearnMore = (html, minChars = 300) => {
    if (!html) return false;

    // Strip HTML tags
    const text = html.replace(/<[^>]*>/g, "");
    return text.length >= minChars;
  };

  return (
    <Container>
      {/* ONE CARD PER ROW */}
      <div className="flex flex-col gap-16">
        {data.map((e) => {
          return (
            <div
              key={e.id}
              className="
                flex flex-col md:flex-row
                bg-[#fffaf7] rounded-xl shadow-md overflow-hidden
                transition-transform duration-300 hover:-translate-y-1
              "
            >
              {/* IMAGE — ALWAYS LEFT */}
              <div className="md:w-1/2 h-64 md:h-[380px]">
                <img
                  src={e.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2
                  className="pink font-sans font-bold text-2xl mb-4"
                  dangerouslySetInnerHTML={{ __html: e.ques }}
                />

                <div
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: e.ans[0] }}
                />

                {!open[e.id] &&
                  e.ans[1] &&
                  shouldShowLearnMore(e.ans[0], 300) && (
                    <p
                      className="mt-4 font-bold text-blue-700 cursor-pointer"
                      onClick={() => toggle(e.id)}
                    >
                      Learn more ..
                    </p>
                )}

                {open[e.id] && (
                  <div
                    className="mt-4 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: e.ans[1] }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Steps;
