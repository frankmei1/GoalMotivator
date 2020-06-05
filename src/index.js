
/**
 * This is importing the react packages.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This line of code creates the const app object. 
 */
const App = () => {
    return <h1>Goal Motivator</h1>;
};


/**
 * ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.
 * 
 * ReactDom then render the app created, with corresponding root tag in the index html pages.
 * 
 */
ReactDOM.render(<App />, document.getElementById('root'));


console.log("goal motivator");

