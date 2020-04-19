const getCourses = (courses, authors, categories, { text, sortBy }) => {
  return authors.length === 0 || categories.length === 0
    ? []
    : courses
        .map(course => {
          return {
            ...course,
            authorName: authors.find(a => a.id === course.authorId).name,
            category: categories.find(a => a.id === course.categoryId).name
          };
        })
        .filter(course => {
          const textMatch =
            course.title.toLowerCase().includes(text.toLowerCase()) ||
            course.authorName.toLowerCase().includes(text.toLowerCase()) ||
            course.category.toLowerCase().includes(text.toLowerCase());
          return textMatch;
        })
        .sort((course1, course2) => {
          if (sortBy === "title") {
            return course1.title.localeCompare(course2.title);
          } else if (sortBy === "category") {
            return course1.category.localeCompare(course2.category);
          } else if (sortBy === "authorname") {
            return course1.authorName.localeCompare(course2.authorName);
          }
        });
};
export default getCourses;
