import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

export default MyComponent;

// Functional components are simpler to write and easier to reason about because they are stateless, which means they don't have any internal state of their own. 
//They simply take in some props as input and return some JSX code as output.

// On the other hand, when you define a component using a class that extends React.Component, like in the example below, it's called a class component:

// import React from 'react';

// class MyComponent1 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, World!</h1>
//         <p>This is a custom React component.</p>
//       </div>
//     );
//   }
// }

// export default MyComponent1;

// Class components are more powerful because they can manage their own internal state using the setState method. 
//This means they can dynamically update their own content based on user interactions or changes to the data they depend on.

// In general, you would use a functional component for simple, stateless components and a class component for more complex, stateful components. 
//However, with the introduction of React Hooks, functional components can now also manage their own state, so the lines between the two approaches are becoming more blurred.

// In a typical React project, you would create multiple JavaScript files, each containing a different component or module of your application. 
//These files would be stored in a directory structure that makes sense for your project, and you would use the import and export statements to share code between them.

// For example, if you have a component called MyComponent that you want to use in another module, you would export it from its own JavaScript file using export default MyComponent;.
// Then, in the module where you want to use MyComponent, you would import it using import MyComponent from './MyComponent';.

// This modular approach to coding makes it easier to organize your code, reuse code across different parts of your application, and maintain your codebase over time.

// JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside your JavaScript files. 
//It's a way to define the structure and content of your React components in a more declarative and intuitive way.

// However, JSX is not a separate file type or extension. JSX code is still written in JavaScript files with the .js extension, 
//and then transpiled by a build tool like Babel into regular JavaScript code that can be interpreted by the browser or server.

// So, when you write a component in React, you typically write it in a JavaScript file with the .js extension, and use JSX syntax to define its structure and content

// In this example, we're defining a functional component called MyComponent, and using JSX syntax to render a div element with an h1 heading and a p paragraph.

// When this file is transpiled by Babel, the JSX code will be transformed into regular JavaScript code that looks like this:

// import React from 'react';

// function MyComponent() {
//   return React.createElement(
//     'div',
//     null,
//     React.createElement('h1', null, 'Hello, World!'),
//     React.createElement('p', null, 'This is a simple React component written in JSX.')
//   );
// }

// export default MyComponent;
//This transpiled code is then interpreted by the browser or server as regular JavaScript code.