### What is Manifest.json?

<p>
It is file for <i>progressive apps</i>, it important for extension chrome, or phone apps, when user take a shortcut for your website in home screen
</p>

[resource](<"[https//google.com](https://stackoverflow.com/questions/45186993/what-is-public-manifest-json-file-in-create-react-app)">)

---

### How many html file in react?

<p>It just only <bold>one<bold></p>
because our website will be SPA<i style="color:gray">-single page application-</i> Just View is dynamically change in the browser</p>

---

### What is Public Folder, and his job?

---

### What is serviceWorker file?

this file for progressive apps(phone mobile)

---

### What is app.test.js?

file for test our Reactjs

---

### What is Component in React?

Component is part of website and should each sub-component which child for Super Component which always called "App.js"

---

#### There are 2 types for Component:

- Statless Functional Component
- Stateful Class Component

Actually that's was old version.
Now, Functional Component became **Stateful** as well.

Modern React we keep/stick with Functional Component, because it is better than Class Component

##### `Functional Component` should has a `return` statment

```js
const Comp = () => {
  return <h1>Hello Functional Component</h1>;
};
```

##### `Class Component` must have a `render()` method instead of return statment

```js
class Comp extends React.Component {
  render() {
    return <h1>Welcome to Class Component</h1>;
  }
}
```

---

### What is meaning stateful vs. stateless?

**stateful** means this component holds, depend on data, which we can reuse it with different data again

**stateless** means this component doesn't hold data in his component and just used for view component

---

> Facebook has maybe **30,000** components

---

### functional component

accept props(object of properties) and return JSX (HTML view)

---

### What is "_Named export_"?

```js
// CompA.jsx
export const CompA = ()=> return <h1>Hello, World</h1>
```

in this case you cannot import this component with any name you want, only like exact name of component

```js
import { CompA } from "./components/CompA";
```

> Must name of Component is Pascal Convention

#### export default is as following:

```js
// CompA
const CompA = () => <h1>Hi, Poeple</h1>;

export default CompA;
```

in this case you can import this component with any name you want

```js
import myGreet from "./components/CompA";
```

### Which type of component is prefer over another?

if you have a chance to create your component with both ways...

- **_so use functional component as much as possible_**
- "**this**" keyword not common in `functions` than `class`
- solution without **state** is easier and fast, debugging fast
- mainly responsible for UI

other hand
**Class Component** :

1. Feature-Rich
   They Can maintain their own private data (state)

2. They have a complicated logic for UI, and most importantly provide lifescycle hooks

---

### What is JSX?

JSX -> Javascript-XML, and it is a syntax for help us to write components and tags, attributes, children, then translating to Pure Javascript used React Library

```js
const Comp = ()=> <p>hello</p>

<Comp name="about"/>

// translating to Pure JS
React.createElement({
     parent:"p"...,
     attributes:{"name":"about"}...,
     children:"hello"...
})

// React is an object which defined in library written in javascript
```

### Difference between JSX, Regular HTML?

| JSX         | HTML        |
| ----------- | ----------- |
| className   | class       |
| htmlFor     | for         |
| onClick     | onclick     |
| onMouseOver | onmouseover |
| tabIndex    | tabindex    |

Naming Convention of property is
**camelCase**

<!--  -->

##### Keep in mind

You can only return one element to render, no sibling
if you have sibling, so you have to wrap them in virtual fragment, or div

```js
// by virtual fragment
// eqv React.Fragment
<>
  <h1>Hello</h1>
  <p>Brother</p>
</>
```

```js
// components/Comp.jsx
const Component = (props) => {
  return <div>{props.children}</div>;
};
```

```js
<Component>
  <p>Here is Children props</p>
</Component>
```

result

```js
<div>
  <p>Here is Children props</p>
</div>
```

#### props

in Functions, props is parameter, then you use it

```js
function Cmp(props) {
  return <>{props.field}</>;
}
```

in Class, props is property

```js
this.props;
```

Also props is a immutable(changeable)
means their value cannot be changed

```js
props.name = "Anything else passed";
// throw an error
// name in props is read-only
```

---

#### State is mutable (changeable)

means you can change their values

##### comparison between props vs. state

props:

1. props get passed from parent to the component
2. (analogy)function parameter
3. because props came from parent and pass this props to children,parent own props, so props is immutable, not controlled by child component.
4. in functional component we use `props parameter`
   in class component we use `this.props`

state:

1. state is managed within the component
2. variables declared in the function body
3. state can be changed(mutable)
   because state declared within component, so it has fully controlled on it
4. in functional component we use
   `useState Hook`
   in class component we use
   declared property `state`.

both of them holds data, and influence on UI and how to be

[video](https://youtu.be/4ORZ1GmjaMc?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=148)

---

we use state, props for dynamic data in UI, when we click, or any event happen it will change

#### importance re-rendering whenever state is changing

so that we mustn't modify state directly (by equal)
correct way is using "setState"

<!--  -->

calls `setState` is Asynchronous.
so any calling function after its line, will be see previous version, not new version

so in `setState` accepts 2 param

1. for newState
2. callback executed after setting new state

so if you want know exact new state, or wanna da some action on new state, don't write after `setState`, write it in second parameter which callback, will be executed after setting new state

### `setState` accepts 2 forms

1. accepts as first arg new object, second arg is optional and it is callback will be called after setting new state, and after re-render is complete
   and it is exact like `componentDidUpdate` job!

2. second form, it accepts first arg callback that accepts 2arg (previous state),(previous props), if new state is depend on props, second arg is same callback like above

if i want do some calc or actions on new state
i write cycle `componentDidUpdate` which invoked after re-rendering

or use second argument in `setState` method in class
.

React group multiple `setState` if calling is in same function into one single `setState`
to enhance the performance

[source](https://youtu.be/uirRaVjRsf4?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=625)

<!--  -->

#### How to make Children Communicate with parent?

by props, specifically method passed as props from parent to child.

<!--  -->

##### What if i want send parameter from child component to parent component?

we use arrow function in child component and call our parent method which passed as props to child component
then pass it the parameter from child component

---

#### Why "key" prop for each item in list?

it helps react to render list efficiently.

it helps react to identify
which item in list has changed, added, removed

it helps react to handling UI Updating efficiently.

if items has a same key
and you changed one item of them, all of them will re-render again NOT only which changed!

A “key” is a special string attribute you need to include when creating lists of elements.
Keys give the elements a stable identity.
Keys help React identify which items have changed, are added, or are removed.
This results in a much more efficient update of the user interface.

when you add new element in list, or update list with new element, React make comparison with old list, and new list, compare first item in old list, and new list, etc...

if first match first there, move to next and do the same
even it find new element not found in old list, it will append it in old tree

and new tree becomes old tree

<!--  -->

Important Question

if i update my list, and made new element first item not last item?

react compare first item of old tree and first item in new tree (which is new element in list)

it finds out not matched!
re-render

second item in old, with second item in new?
not matched!
re-render
etc...

just added one item, it cause re-render entire list!

this is in-efficent, and problem

solution is using key
to make react compare with "key"

<!--  -->

#### What is Problems of Using ?

because everything for this element will be relied to "key" prop
when you do sort, add first(unshift), many things will cause error

listen to this [video]("https://youtu.be/xlPxnc5uUPQ?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&t=586")

this Video is SO SO SO Important (about keys of list)

---

When You Use Index of Item in List?

- when you don't change list, by adding, or removing, or sorting, filtered.
- items in your list doesn't have a unique id
  - solution is using (symbol || random)
- There are many packges you can use for generate Unique Id for lists to render or hashing a unique value from exciting property

**Avoid** using '_index as key prop_' as possible

Actually React uses index as key prop, when you didn't specify value for key, so it used as default mainly.

---

#### Styling In React

There are many options to use styling component in React.

1- Regular CSS Style Sheet
2- inline styling
3- CSS Modules
4- CSS in JS Libraries (Styled Components)
