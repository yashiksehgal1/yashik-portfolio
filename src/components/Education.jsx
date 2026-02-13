import React from "react";

const Education = () => {
  const data = [
    {
      title: "Secondary Education (10th)",
      year: "2015",
      board: "C.B.S.E",
      score: "7.8 CGPA",
    },
    {
      title: "Senior Secondary (12th)",
      year: "2016 - 2017",
      board: "P.S.E.B",
      score: "Aggregate of 60%",
    },
    {
      title: "Graduation (B.Sc)",
      year: "2017 - 2021",
      board: "Panjab University",
      score: "Aggregate of 60%",
    },
    {
      title: "D.C.A (Diploma in Computer Applications)",
      year: "2017 - 2018",
      board: "Rahat Computer Institute, Fazilka",
      score: "Aggregate of 80%",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-white/10 px-4 py-8 sm:px-6 md:px-10 lg:px-20 rounded-t-4xl">
      <div className="w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10 md:mb-14 font-semibold text-blue-200">
          Education
        </h2>

        {/* Desktop Table */}
        <table className="hidden md:table w-full text-lg text-white/75 bg-black rounded-2xl border-separate border-spacing-4">
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="bg-white/10 px-3 py-2 rounded-xl text-blue-200">
                  {item.title}
                </td>
                <td className="bg-white/10 px-3 py-2 rounded-xl">
                  {item.year}
                </td>
                <td className="bg-white/10 px-3 py-2 rounded-xl">
                  {item.board}
                </td>
                <td className="bg-white/10 px-3 py-2 rounded-xl">
                  {item.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Bullet List */}
        <div className="md:hidden space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-black/70 p-4 rounded-2xl border border-white/10"
            >
              <h3 className="text-blue-200 font-semibold mb-2">
                {item.title}
              </h3>
              <ul className="list-disc list-inside text-white/75 space-y-1">
                <li>
                  <span className="font-semibold"></span> {item.year}
                </li>
                <li>
                  <span className="font-semibold"></span> {item.board}
                </li>
                <li>
                  <span className="font-semibold"></span> {item.score}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
