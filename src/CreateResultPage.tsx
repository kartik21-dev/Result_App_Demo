import React from "react";
import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { NavLink } from "react-router-dom";

const CreateResultPage = () => {
  const subjects = ["English", "Math", "Science", "History", "Geography"];

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [rows, setRows] = useState([
    [subjects[0], "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addRow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setRows([
      ...rows,
      [subjects[0], "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ]);
  };

  const handleInputChange = (
    rowIndex: number,
    cellIndex: number,
    value: string
  ) => {
    const newRows = rows.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === cellIndex ? value : cell
      )
    );
    setRows(newRows);
    console.log("row change : " + rows);
  };

  const [classValue, setClassValue] = useState("");

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setClassValue(value);
  };

  const handleDropdownChange = (rowIndex: number, value: string) => {
    const newRows = rows.map((row, rIndex) =>
      rIndex === rowIndex ? [value, ...row.slice(1)] : row
    );
    setRows(newRows);
  };

  useEffect(() => {
    localStorage.setItem("form_data", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("table_rows", JSON.stringify(rows));
  }, [rows]);

  useEffect(() => {
    setFormData({
      ...formData,
      ["class"]: classValue,
    });
    localStorage.setItem("form_data", JSON.stringify(formData));
  }, [classValue]);

  const activitiesList = [
    "Attendance",
    "Craft Work",
    "Group Interaction",
    "Confidence",
    "Physical Fitness",
    "Participation in Activities",
    "Personal Cleanliness",
    "Discipline",
  ];

  const gradesList = ["A", "B", "C", "D", "E", "NA"];

  const [coActivity, setCoActivity] = useState([{ activity: "", grade: "" }]);
  const [saveCoActivity, setSaveCoActivity] = useState<any[][]>([]);

  const addCoActivity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCoActivity([...coActivity, { activity: "", grade: "" }]);
  };

  const handleCoActivityChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = coActivity.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setCoActivity(updatedRows);
  };

  useEffect(() => {
    const groupedData: any[][] = [];
    for (let i = 0; i < coActivity.length; i += 2) {
      groupedData.push([
        coActivity[i] || { activity: "", grade: "" },
        coActivity[i + 1] || { activity: "", grade: "" },
      ]);
    }

    setSaveCoActivity(groupedData);
    localStorage.setItem("coscholastic_data", JSON.stringify(groupedData));
  }, [coActivity]);

  const exActivitiesList = [
    "Attendance",
    "Craft Work",
    "Group Interaction",
    "Confidence",
    "Physical Fitness",
    "Participation in Activities",
    "Personal Cleanliness",
    "Discipline",
  ];

  const [exActivity, setExActivity] = useState([{ activity: "", grade: "" }]);
  const [saveExActivity, setSaveExActivity] = useState<any[][]>([]);

  const addExActivity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setExActivity([...exActivity, { activity: "", grade: "" }]);
  };

  const handleExActivityChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = exActivity.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setExActivity(updatedRows);
  };

  useEffect(() => {
    const groupedData: any[][] = [];
    for (let i = 0; i < exActivity.length; i += 2) {
      groupedData.push([
        exActivity[i] || { activity: "", grade: "" },
        exActivity[i + 1] || { activity: "", grade: "" },
      ]);
    }

    setSaveExActivity(groupedData);
    localStorage.setItem("exactivity_data", JSON.stringify(groupedData));
  }, [exActivity]);

  return (
    <div className="max-w-7xl mx-auto bg-white p-4 shadow-md relative page">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Student's Personal Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Please fill below details.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-1 sm:col-span-3">
                <label
                  htmlFor="student_name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Student name
                </label>
                <div className="mt-2">
                  <input
                    id="student_name"
                    name="student_name"
                    type="text"
                    autoComplete="student_name"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-3">
                <label
                  htmlFor="class"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Class
                </label>
                <div className="mt-2">
                  <select
                    id="class"
                    name="class"
                    autoComplete="class"
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                    value={classValue}
                    onChange={handleClassChange}
                  >
                    <option value="">Select an option</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                  </select>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-3">
                <label
                  htmlFor="sr_number"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  SR. Number
                </label>
                <div className="mt-2">
                  <input
                    id="sr_number"
                    name="sr_number"
                    type="text"
                    autoComplete="sr_number"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-3">
                <label
                  htmlFor="roll_number"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Roll Number
                </label>
                <div className="mt-2">
                  <input
                    id="roll_number"
                    name="roll_number"
                    type="text"
                    autoComplete="address-level2"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-3">
                <label
                  htmlFor="mother_name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Mother's Name
                </label>
                <div className="mt-2">
                  <input
                    id="mother_name"
                    name="mother_name"
                    type="text"
                    autoComplete="mother_name"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-3">
                <label
                  htmlFor="father_name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Father's Name
                </label>
                <div className="mt-2">
                  <input
                    id="father_name"
                    name="father_name"
                    type="text"
                    autoComplete="father_name"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {}

          <div className="bg-gray p-6">
            <div className="overflow-x-auto">
              <table
                className="min-w-full border-collapse border border-gray-300 shadow-lg bg-white"
                id="performanceTable"
              >
                <thead>
                  <tr>
                    <th
                      colSpan={Number("12")}
                      className="border border-gray-300 bg-blue-500 text-white text-center text-xl font-bold py-4"
                    >
                      Academic Performance - Scholastic Areas
                    </th>
                  </tr>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Subjects
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      1st Unit Test (40)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Exam Marks (50)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Practical (10)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Marks Obtained (100)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      2nd Unit Test (40)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Exam Marks (50)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Practical (10)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Marks Obtained (100)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Grand Total (200)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-100">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border border-gray-300 px-4 py-2"
                        >
                          {cellIndex === 0 ? (
                            <select
                              className="w-full border-none bg-transparent px-2 py-1 text-gray-700 outline-none appearance-none"
                              style={{
                                height: "2.5rem",
                                minWidth: "100px",
                                overflow: "visible",
                              }}
                              value={cell}
                              onChange={(e) =>
                                handleDropdownChange(rowIndex, e.target.value)
                              }
                            >
                              {subjects.map((subject, index) => (
                                <option key={index} value={subject}>
                                  {subject}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type="text"
                              className="w-full border-none"
                              value={cell}
                              onChange={(e) =>
                                handleInputChange(
                                  rowIndex,
                                  cellIndex,
                                  e.target.value
                                )
                              }
                            />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <button
                  onClick={addRow}
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                >
                  <i className="fas fa-plus"></i> Add Row
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray p-6">
            {/* Input Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 shadow-lg bg-white">
                <thead>
                  <tr>
                    <th
                      colSpan={Number("2")}
                      className="border border-gray-300 bg-blue-500 text-white text-center text-xl font-bold py-4"
                    >
                      Co-curricular Activities
                    </th>
                  </tr>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Activity
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coActivity.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        <select
                          className="w-full border-none bg-transparent px-2 py-1 text-gray-700 outline-none appearance-none"
                          value={row.activity}
                          onChange={(e) =>
                            handleCoActivityChange(
                              index,
                              "activity",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select Activity</option>
                          {activitiesList.map((activity, idx) => (
                            <option key={idx} value={activity}>
                              {activity}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <select
                          className="w-full border-none bg-transparent px-2 py-1 text-gray-700 outline-none appearance-none"
                          value={row.grade}
                          onChange={(e) =>
                            handleCoActivityChange(
                              index,
                              "grade",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select Grade</option>
                          {gradesList.map((grade, idx) => (
                            <option key={idx} value={grade}>
                              {grade}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Buttons */}
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                  onClick={addCoActivity}
                >
                  <i className="fas fa-plus"></i> Add Row
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray p-6">
            {/* Input Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 shadow-lg bg-white">
                <thead>
                  <tr>
                    <th
                      colSpan={Number("2")}
                      className="border border-gray-300 bg-blue-500 text-white text-center text-xl font-bold py-4"
                    >
                      Extra-curricular Activities
                    </th>
                  </tr>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Activity
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {exActivity.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        <select
                          className="w-full border-none bg-transparent px-2 py-1 text-gray-700 outline-none appearance-none"
                          value={row.activity}
                          onChange={(e) =>
                            handleExActivityChange(
                              index,
                              "activity",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select Activity</option>
                          {exActivitiesList.map((activity, idx) => (
                            <option key={idx} value={activity}>
                              {activity}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <select
                          className="w-full border-none bg-transparent px-2 py-1 text-gray-700 outline-none appearance-none"
                          value={row.grade}
                          onChange={(e) =>
                            handleExActivityChange(
                              index,
                              "grade",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Select Grade</option>
                          {gradesList.map((grade, idx) => (
                            <option key={idx} value={grade}>
                              {grade}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Buttons */}
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                  onClick={addExActivity}
                >
                  <i className="fas fa-plus"></i> Add Row
                </button>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              Other Details
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Please fill below details.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="total_attendance"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  TOTAL ATTENDANCE
                </label>
                <div className="mt-2">
                  <input
                    id="total_attendance"
                    name="total_attendance"
                    type="text"
                    autoComplete="total_attendance"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="attending_days"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  ATTENDING DAYS
                </label>
                <div className="mt-2">
                  <input
                    id="attending_days"
                    name="attending_days"
                    type="text"
                    autoComplete="attending_days"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="teacher_remark"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  TEACHER REMARK
                </label>
                <div className="mt-2">
                  <input
                    id="teacher_remark"
                    name="teacher_remark"
                    type="text"
                    autoComplete="teacher_remark"
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <NavLink
            to="/result"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default CreateResultPage;
