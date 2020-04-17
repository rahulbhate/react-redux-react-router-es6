const getCourses = (courses, authors, { text, sortBy }) => {
  return authors.length === 0
    ? []
    : courses
        .map(course => {
          return {
            ...course,
            authorName: authors.find(a => a.id === course.authorId).name
          };
        })
        .filter(course => {
          const textMatch =
            course.title.toLowerCase().includes(text.toLowerCase()) ||
            course.category.toLowerCase().includes(text.toLowerCase());
          return textMatch;
        })
        .sort((course1, course2) => {
          if (sortBy === "title") {
            return course1.title.localeCompare(course2.title);
          } else if (sortBy === "category") {
            return course1.category < course2.category ? -1 : 1;
          }
        });
};
export default getCourses;
