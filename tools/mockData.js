const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    picture: "https://placeimg.com/150/150/fruits",
    price: 20,
    authorId: 2,
    categoryId: 1
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    picture: "https://placeimg.com/150/150/animals",
    price: 25,
    authorId: 1,
    categoryId: 1
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    picture: "https://placeimg.com/150/150/nature",
    price: 20,
    authorId: 1,
    categoryId: 1
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    picture: "https://placeimg.com/150/150/people",
    price: 20,
    authorId: 1,
    categoryId: 2
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    picture: "https://placeimg.com/150/150/arch",
    price: 20,
    authorId: 1,
    categoryId: 2
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    picture: "https://placeimg.com/150/150/fruits",
    price: 30,
    authorId: 1,
    categoryId: 1
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    picture: "https://placeimg.com/150/150/arch",
    price: 25,
    authorId: 1,
    categoryId: 2
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    picture: "https://placeimg.com/150/150/people",
    price: 35,
    authorId: 1,
    categoryId: 1
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    picture: "https://placeimg.com/150/150/nature",
    price: 20,
    authorId: 1,
    categoryId: 1
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    picture: "https://placeimg.com/150/150/animals",
    price: 25,
    authorId: 1,
    categoryId: 1
  }
];

const categories = [
  {
    id: 1,
    name: "IT & Software"
  },
  {
    id: 2,
    name: "Development"
  },
  {
    id: 3,
    name: "Business"
  },
  {
    id: 4,
    name: "Design"
  },
  {
    id: 5,
    name: "Marketing"
  },
  {
    id: 6,
    name: "Lifestyle"
  }
];
const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  categoryId: null
};

const newUser = {
  id: null,
  email: "",
  password: ""
};

const users = [];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  categories,
  authors,
  newUser,
  users
};
