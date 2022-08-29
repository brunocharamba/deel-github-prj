## What is the difference between Component and PureComponent? give an example where it might break my app.

A component can have states, the PureComponent is a static component, without states, effects/lifecycle methods and so. It's faster, but can't handle dynamic data.

## Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

To be honest, I don't know this one or don't remember, as I'm working with functions instead of classes for a time now.

## Describe 3 ways to pass information from a component to its PARENT.

Well, we can pass it by using callbacks from the child to parent, or with a State Management library like Redux, MOBx, Zustand, etc... or we can also use the Context API.

## Give 2 ways to prevent components from re-rendering.

Take care to not use the useEffect wrongly, as you can set states without the need to do it
Use some hooks like useMemo and useCallback.

## What is a fragment and why do we need it? Give an example where it might break my app.

Fragment is like an "empty" element that serves only to aggregate other children elements inside it. We can use it as "Fragment" or with this syntax "<></>". It is used to avoid returning two or more elements "side by side", which will break the app, as just ONE parent component can be rendered.

So if you have something like that, it will break the app:
`return (<div></div><span></span>)`

The Fragment will fix that:
`return (<><div></div><span></span></>)`

## Give 3 examples of the HOC pattern.

You can pass properties down some components and reutilize them in others like the Material UI uses with the "withStyles", which pass styles to the component, or the react router uses with the "withRouter" to pass some routing parameters to "pages", and other ones. To be honest, I can't remember another one.

## what's the difference in handling exceptions in promises, callbacks and async...await.

In Promises, you can use the .catch method to handle the exceptions. For callbacks, usually you have another parameter that gives you the error, and for the async/await, you can use the Try/Catch block to handle the exceptions.
I think you can also use the try/catch block to get exceptions in Promises.

## How many arguments does setState take and why is it async.

Two arguments, the value and a callback. The callback is triggered after the state finishes the update.
Because if it was synchronous, it will probably freeze the UI while the state is changing.

## List the steps needed to migrate a Class to Function Component.

First, you will need to recreate the body of the component, using something like "function App" or like an arrow function "const App = () => {}"
After that, you need to convert the lifecycle methods to useEffect hooks.
Remove the state variable to use the useState hook.
Remove the render method and replace it with the return statement
And change the legacy methods to functions (normal ones or arrows)

## List a few ways styles can be used with components.

You can use the class names from the CSS directly on the className property.
You can also use some CSS-in-JS libraries like Styled Components to inject as a variable the CSS inside the className.
You can also use the CSS properties directly inside the "style" tag
And is also possible to use some pre-defined libraries like Tailwind, which provides basic CSS classes

## How to render an HTML string coming from the server.

As I used in this project, the "dangerouslySetInnerHTML" is one way to inject some HTML code inside a DOM element. But, as you can see on the name, the better way to use it is to parse and remove certain characters before injecting them into the DOM element.
`<span dangerouslySetInnerHTML={{ __html: "<div>Some content here...</div>" }} />`
