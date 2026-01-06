import React, { useMemo, useRef, useState } from "react";

export default function SubmitData() {
  // options
  const hobbies = useMemo(
    () => [
      { label: "Music", value: "music" },
      { label: "Movie", value: "movie" },
      { label: "Plastic", value: "plastic" },
    ],
    []
  );

  const roles = useMemo(
    () => ["General Staff", "Admin", "Manager", "Developer"],
    []
  );

  // refs (hint from your teacher)
  const hobbyRef = useRef([]); // will store checkbox elements
  const usernameRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);

  // state
  const [gender, setGender] = useState(""); // controlled
  const [role, setRole] = useState(roles[0]); // controlled

  const [submitted, setSubmitted] = useState(null); // null = show form, object = show result

  function handleSubmit(e) {
    e.preventDefault();

    const selectedHobbies = hobbyRef.current
      .filter((el) => el && el.checked)
      .map((el) => el.value);

    const data = {
      username: usernameRef.current?.value?.trim() || "",
      firstname: firstnameRef.current?.value?.trim() || "",
      lastname: lastnameRef.current?.value?.trim() || "",
      gender,
      hobbies: selectedHobbies,
      role,
    };

    setSubmitted(data);
  }

  function handleBack() {
    // reset submitted view back to form
    setSubmitted(null);

    // (optional) keep inputs as-is OR reset them:
    // usernameRef.current.value = "";
    // firstnameRef.current.value = "";
    // lastnameRef.current.value = "";
    // setGender("");
    // setRole(roles[0]);
    // hobbyRef.current.forEach(el => { if (el) el.checked = false; });
  }

  // ✅ same component renders both views using ternary
  return (
    <div style={{ padding: 24, fontFamily: "serif" }}>
      <h2>Registration Form</h2>

      {submitted ? (
        // ===== Submission View =====
        <div>
          <h3>Submitted Data</h3>

          <p>
            <b>Username:</b> {submitted.username || "-"}
          </p>
          <p>
            <b>Firstname:</b> {submitted.firstname || "-"}
          </p>
          <p>
            <b>Lastname:</b> {submitted.lastname || "-"}
          </p>
          <p>
            <b>Gender:</b> {submitted.gender || "-"}
          </p>
          <p>
            <b>Hobbies:</b>{" "}
            {submitted.hobbies.length ? submitted.hobbies.join(", ") : "-"}
          </p>
          <p>
            <b>Role:</b> {submitted.role || "-"}
          </p>

          <button onClick={handleBack}>Back to form</button>
        </div>
      ) : (
        // ===== Form View =====
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 10 }}>
            <label>
              <b>Username</b>
            </label>
            <br />
            <input type="text" ref={usernameRef} />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>
              <b>Firstname</b>
            </label>
            <br />
            <input type="text" ref={firstnameRef} />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>
              <b>Lastname</b>
            </label>
            <br />
            <input type="text" ref={lastnameRef} />
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>
              <b>Gender</b>
            </label>
            <br />
            <label style={{ marginRight: 12 }}>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
            </label>
          </div>

          <div style={{ marginBottom: 10 }}>
            <label>
              <b>Hobbies</b>
            </label>
            <br />
            {hobbies.map((item, index) => (
              <div key={item.value}>
                <input
                  type="checkbox"
                  id={item.value}
                  name="hobbies"
                  value={item.value}
                  ref={(el) => (hobbyRef.current[index] = el)}
                />
                <label htmlFor={item.value} style={{ marginLeft: 6 }}>
                  {item.label}
                </label>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 14 }}>
            <label>
              <b>Role</b>
            </label>
            <br />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              {roles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
