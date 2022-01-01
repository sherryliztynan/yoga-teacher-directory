const updateTeacherCity = (id) => {
    Axios.put("update", { city: newCity, id: id }).then(
      (response) => {
        setTeacherList(
          teacherList.map((teacher) => {
            return teacher.id == id
              ? {
                  id: teacher.id,
                  name: teacher.name,
                  city: teacher.city,
                  instagram: teacher.instagram,
                  specialty: teacher.specialty,
                }
              : teacher;
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