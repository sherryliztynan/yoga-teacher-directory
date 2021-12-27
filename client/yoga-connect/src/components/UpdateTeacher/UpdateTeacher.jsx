const updateTeacherCity = (id) => {
    Axios.put("update", { city: newCity, id: id }).then(
      (response) => {
        setTeacherList(
          teacherList.map((teacher) => {
            return val.id == id
              ? {
                  id: teacher.id,
                  name: teacher.name,
                  country: teacher.country,
                  age: teacher.age,
                  position: teacher.position,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

return (
    <button
    onClick={() => {
      updateTeacherCity(teacher.id);
    }}
  >
    {" "}
    Update
  </button>

)