<div align="center">
  <h1> 30 Days Of React: Props </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> October, 2020</small>
</sub>

</div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a014124 (ns)

[<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>](../06_Day_Map_List_Keys/06_map_list_keys.md)
<<<<<<< HEAD
=======
</div>
=======
>>>>>>> 2d39068 (ns)

<<<<<<< HEAD
[<< Day 4](../30-Days-Of-React/04_Day_Component/04_components.md) | [Day 6 >>]()
>>>>>>> a95ca32 (Day_5)
=======
[<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>]()
>>>>>>> 2c4d226 (Day_5)
=======
>>>>>>> 7aaab6b (day_7)
=======

[<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>](../06_Day_Map_List_Keys/06_map_list_keys.md)
>>>>>>> upstream/master

![30 Days of React banner](../images/30_days_of_react_banner_day_5.jpg)

- [Props](#props)
  - [Props in Functional Component](#props-in-functional-component)
  - [What is props?](#what-is-props)
  - [Props object](#props-object)
    - [Different data type props](#different-data-type-props)
    - [String props type](#string-props-type)
    - [Number props type](#number-props-type)
    - [Boolean props type](#boolean-props-type)
    - [Array props type](#array-props-type)
    - [Object props type](#object-props-type)
    - [Function prop types](#function-prop-types)
  - [Destructuring props](#destructuring-props)
  - [propTypes](#proptypes)
  - [defaultProps](#defaultprops)
- [Exercises: Components and Props](#exercises-components-and-props)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
<<<<<<< HEAD
=======
>>>>>>> a95ca32 (Day_5)
=======
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
>>>>>>> 3929034 (Day_7 has been published)
=======
  - [Exercises: Level 3](#exercises-level-3)
>>>>>>> 52fa244 (polishing)
=======
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)
>>>>>>> upstream/master

# Props

## Props in Functional Component

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> upstream/master
In the previous day, we saw how to inject different data types to React component JSX. Now, let us see how we use it in component and also how to pass different data as props.

## What is props?

Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data.

<<<<<<< HEAD
<<<<<<< HEAD
I hope you are familiar with JavaScript function. Most of the time, functions with parameters are smart and they can take dynamic data likewise props is a way we pass data or parameter to a component. Let's see the difference between a function and a component.
=======
In the previous day, we saw how to inject dynamic data types to React component JSX. Now, let us see how we use dynamic data in component and also how to pass data as props.
=======
In the previous day, we saw how to inject different data types to React component JSX. Now, let us see how we use it in component and also how to pass different data as props.
>>>>>>> 37d04cb (cleaning day_5)

## What is props?

Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data.

<<<<<<< HEAD
I hope you are familiar with JavaScript function. Most of the time, functions with parameters are smart and they can take dynamic data likewise props is a way we pass data or parameter to a component. Let's see the deference between a function and a component.
>>>>>>> a95ca32 (Day_5)
=======
I hope you are familiar with JavaScript function. Most of the time, functions with parameters are smart and they can take dynamic data likewise props is a way we pass data or parameter to a component. Let's see the difference between a function and a component.
>>>>>>> 37d04cb (cleaning day_5)
=======
I hope you are familiar with the JavaScript function. Most of the time, functions with parameters are smart and they can take dynamic data likewise props is a way we pass data or parameter to a component. Let's see the difference between a function and a component.
>>>>>>> 5cfcdee (Addressing some minor typos)
=======
I hope you are familiar with the JavaScript function. Most of the time, functions with parameters are smart and they can take dynamic data likewise props is a way we pass data or parameter to a component. Let's see the difference between a function and a component.
>>>>>>> upstream/master

```js
// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// calling a functons

getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

//component syntax

// User component, component should start with an uppercase
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
=======
// calling or instantiating a component
>>>>>>> a95ca32 (Day_5)
=======
// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
>>>>>>> 37d04cb (cleaning day_5)
=======
// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
>>>>>>> upstream/master
<User firstName = 'Asabeneh', lastName='Yetayeh' country = 'Finland' />
```

In the previous section, we injected data as follows and today we will change these data to props.

```js
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 4, 2020'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {author.firstName} {author.lastName}
      </p>
      <small>{date}</small>
    </div>
  </header>
)
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Instead of injecting data we can also pass the data as a props. React props is similar to parameters in function.
=======
Instead of injecting data we can also pass the data as a prop. React props are similar to parameters in functions.
>>>>>>> 5cfcdee (Addressing some minor typos)
=======
Instead of injecting data we can also pass the data as props. React props are similar to parameters in functions.
>>>>>>> 949e393 (reverting some changes to make the use of word props consistent)
=======
Instead of injecting data we can also pass the data as props. React props are similar to parameters in functions.
>>>>>>> upstream/master

## Props object

React props is an object which you get instantly when you create a React component. Before we pass properties to the component, let's check what do we get in the props object.

<<<<<<< HEAD
=======
Instead of injecting data we can also pass the data as a props. React props is similar to parameters in function. React props is an object which you get instantly when you create a component. Before that let's check what do we get in the props object.

## Props object

>>>>>>> a95ca32 (Day_5)
=======
Instead of injecting data we can also pass the data as a props. React props is similar to parameters in function.

## Props object

React props is an object which you get instantly when you create a React component. Before we pass properties to the component, let's check what do we get in the props object.

>>>>>>> 37d04cb (cleaning day_5)
=======
>>>>>>> upstream/master
```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // empty object, {}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> a95ca32 (Day_5)
=======

>>>>>>> 37d04cb (cleaning day_5)
=======

>>>>>>> upstream/master
// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
In the above console.log(props), you would get an empty object({}). That means if you do not pass any attributes or properties when you instantiate the component, the props will be empty otherwise it will be populated with the data you passed as attributes and the proper name of these attributes are props.

Let's start with a simple example. In the example below, the welcome string has been passed as props in the Header components.
=======
In the above console.log(props), you would get an empty object({}). That means if you do not pass any attribute to when you instantiate the component the props will be empty otherwise it will be populated with the data you passed as attributes and the proper name of these attributes are props.

Let's start with a simple example. In the example below, the welcome message data injected as props in the Header components.
>>>>>>> a95ca32 (Day_5)
=======
In the above console.log(props), you would get an empty object({}). That means if you do not pass any attributes or properties when you instantiate the component, the props will be empty otherwise it will be populated with the data you passed as attributes and the proper name of these attributes are props.

Let's start with a simple example. In the example below, the welcome string has been passed as props in the Header components.
>>>>>>> 37d04cb (cleaning day_5)
=======
In the above console.log(props), you would get an empty object({}). That means if you do not pass any attributes or properties when you instantiate the component, the props will be empty otherwise it will be populated with the data you passed as attributes and the proper name of these attributes are props.

Let's start with a simple example. In the example below, the welcome string has been passed as props in the Header components.
>>>>>>> upstream/master

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // {welcome:'Welcome to 30 Days Of React'}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header welcome='Welcome to 30 Days Of React' />
    </div>
  )
}

const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master

ReactDOM.render(<App />, rootElement)
```

Now, when you do console.log(props) you should get the following object, that means the welcome property we passed to the Header component can be found inside the props object.
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

<<<<<<< HEAD
Now, when you do console.log(props) you should get the following object, that means all the props we passed to the Header component can be found a props object.
>>>>>>> a95ca32 (Day_5)
=======
Now, when you do console.log(props) you should get the following object, that means the welcome property we passed to the Header component can be found inside the props object.
>>>>>>> 37d04cb (cleaning day_5)
=======
>>>>>>> upstream/master

```js
{
  welcome: 'Welcome to 30 Days Of React'
}
```

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
As you can see in the above code, we passed only a single props to Header component, the welcome props. A component can have one or many props. Props could be different data types. It could be a string, number, boolean, array, object or a function. We will cover different kind of props in the next sections.
=======
As you can see in the above code, the data passed as props to Header component.

A component has one or many props. Props could be a string, number, boolean, array, object or a function. We will cover differ different kind of props in this sections.
>>>>>>> a95ca32 (Day_5)
=======
As you can see in the above code, we passed only a single props to Header component, the welcome props. A component can have one or many props. Props could be different data types. It could be a string, number, boolean, array, object or a function. We will cover different kind of props in the next sections.
>>>>>>> 37d04cb (cleaning day_5)
=======
As you can see in the above code, we passed only single props to Header component, the welcome props. A component can have one or many props. Props could be different data types. It could be a string, number, boolean, array, object or a function. We will cover different kind of props in the next sections.
>>>>>>> 949e393 (reverting some changes to make the use of word props consistent)
=======
As you can see in the above code, we passed only single props to Header component, the welcome props. A component can have one or many props. Props could be different data types. It could be a string, number, boolean, array, object or a function. We will cover different kind of props in the next sections.
>>>>>>> upstream/master

### Different data type props

### String props type

The data type of the props we pass an attribute to the component is a string.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props)
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => (
  <div className='app'>
    <Header
      welcome='Welcome to 30 Days Of React'
      title='Getting Started React'
      subtitle='JavaScript Library'
      firstName='Asabeneh'
      lastName='Yetayeh'
      date='Oct 4, 2020'
    />
  </div>
)

const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master
ReactDOM.render(<App />, rootElement)
```

If you check on the browser console, you will get the following object.

```js
{
firstName: "Asabeneh",
lastName: "Yetayeh",
date: "Oct 4, 2020"
subtitle: "JavaScript Library"
title: "Getting Started React"
welcome: "Welcome to 30 Days Of React"
}
```

Since you are a JavaScript ninja by now, you know what do do with this object.

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
As you can see from the above example, the value of the props are written statically. However, if we want to apply some logic it is hard to implement with statically written data, so it will be better to use a variable as props. Let's see the following example:
=======
As you can see from the above example, the value of the props are written statically. However, if we want to apply some logic it is hard to implement with statically written data, so it better to use a variable as props. Let's see the following example:
>>>>>>> a95ca32 (Day_5)
=======
As you can see from the above example, the value of the props are written statically. However, if we want to apply some logic it is hard to implement with statically written data, so it will be better to use a variable as props. Let's see the following example:
>>>>>>> 37d04cb (cleaning day_5)
=======
As you can see from the above example, the value of the props are written statically. However, if we want to apply some logic it is hard to implement with statically written data, so it will be better to use a variable as props. Let's see the following example:
>>>>>>> upstream/master

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => (
  <header>
    <div className='header-wrapper'>
      <h1>{props.welcome}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <small>{props.date}</small>
    </div>
  </header>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const welcome = 'Welcome to 30 Days Of React'
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const firstName = 'Asabeneh'
  const lastName = 'Yetayeh'
  const date = 'Oct 4, 2020'

  return (
    <div className='app'>
      <Header
        welcome={welcome}
        title={title}
        subtitle={subtitle}
        firstName={firstName}
        lastName={lastName}
        date={date}
      />
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master
ReactDOM.render(<App />, rootElement)
```

### Number props type

Let's use a number props to a component

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  let currentYear = 2020
  let birthYear = 1820
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  return (
    <div className='app'>
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master
ReactDOM.render(<App />, rootElement)
```

### Boolean props type

We can pass boolean data types to a React component.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  let currentYear = 2020
  let birthYear = 2015
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const age = currentYear - birthYear // 15 years
=======
  const age = currentYear - birthYear // 200 years
>>>>>>> a95ca32 (Day_5)
=======
  const age = currentYear - birthYear // 15 years
>>>>>>> 37d04cb (cleaning day_5)
=======
  const age = currentYear - birthYear // 15 years
>>>>>>> upstream/master

  let status = age >= 18

  return (
    <div className='app'>
      <Status status={status} />
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master
ReactDOM.render(<App />, rootElement)
```

### Array props type

In programming arrays and objects are the most frequently used data structure to solve different problems and store data in a more structured way. Therefore, we encounter data in the form of an array quite often. Let's pass an array as props to a component

```js
import React from 'react'
import ReactDOM from 'react-dom'

const Skills = (props) => <ul>{props.skills}</ul>

const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

If you see the result on the browser, the skills elements needs formatting. Therefore before we render, it should have some elements between each skill. To modify the array and to add a li element we can use map method. You should be very familiar with the functional programming map, filter and reduce to feel good at React if not please go back to day 1 JavaScript refresher. Let's apply map to modify the array.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Skills Component
const Skills = (props) => {
  // modifying the skills array
  const skillList = props.skills.map((skill) => <li>{skill}</li>)
  return <ul>{skillList}</ul>
}

const App = () => (
  <div className='app'>
    <Skills skills={['HTML', 'CSS', 'JavaScript']} />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

We will go in-depth about list and map in other sections. Now, let's see an object as a props.

### Object props type

We may pass an object as props to a React component. Let's see an example.
We can change the previous Header props to object. For the time being let's change a few properties for better understanding.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

Now, let's change all the previous Header properties to an object.

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    date: new Date(), // date needs to be formatted to a human readable format
=======
    date: new Date(),
>>>>>>> a95ca32 (Day_5)
=======
    date: new Date(), // date needs to be formatted to a human readable format
>>>>>>> 37d04cb (cleaning day_5)
=======
    date: new Date(), // date needs to be formatted to a human readable format
>>>>>>> upstream/master
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6f350ce (Day_6)
ReactDOM.render(<App />, rootElement)
```

<<<<<<< HEAD
<<<<<<< HEAD
When we use object as props we usually destructure the data to access the values. Destructuring makes our code easy to read. We will see soon destructuring of props but before that let's see function as a props for a React component.
=======
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

<<<<<<< HEAD
When we use object as props we usually destructure the data to access the values. Destructuring make our code easy to read. We will see soon destructuring of props but before that let's see function as a props for a React component.
>>>>>>> a95ca32 (Day_5)
=======
When we use object as props we usually destructure the data to access the values. Destructuring makes our code easy to read. We will see soon destructuring of props but before that let's see function as a props for a React component.
>>>>>>> 37d04cb (cleaning day_5)
=======
When we use an object as "props" we usually destructure the data to access the values. Destructuring makes our code easy to read. We will soon see the destructuring of "props" but before that let's see function as "props" for a React component.
>>>>>>> 5cfcdee (Addressing some minor typos)
=======
When we use an object as props we usually destructure the data to access the values. Destructuring makes our code easy to read. We will soon see the destructuring of props but before that let's see function as props for a React component.
>>>>>>> 949e393 (reverting some changes to make the use of word props consistent)
=======
ReactDOM.render(<App />, rootElement)
```

When we use an object as props we usually destructure the data to access the values. Destructuring makes our code easy to read. We will soon see the destructuring of props but before that let's see function as props for a React component.
>>>>>>> upstream/master

### Function prop types

We can pass a function as props type to a React component. Let's see some examples

```js
import React from 'react'
import ReactDOM from 'react-dom'

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> upstream/master
// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const sayHi = () => {
    alert('Hi')
  }

  return (
    <div className='app'>
      <Button text='Say Hi' onClick={sayHi} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

Even we can write a function inside the curly bracket

```js
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Button text='Say Hi' onClick={() => alert('Hi')} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

Now, lets implement different functions as props

```js
import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD
=======
// Function to display time in Mon date, year format eg Oct 4, 2020
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
=======
// A button component
>>>>>>> 37d04cb (cleaning day_5)

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const sayHi = () => {
    alert('Hi')
  }

  return (
    <div className='app'>
      <Button text='Say Hi' onClick={sayHi} />
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> a95ca32 (Day_5)
=======
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

Even we can write function inside the curly bracket

```js
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Button text='Say Hi' onClick={() => alert('Hi')} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

Now, lets implement different functions as a props

```js
import React from 'react'
import ReactDOM from 'react-dom'
>>>>>>> 37d04cb (cleaning day_5)
=======
>>>>>>> upstream/master

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Button text='Greet People' onClick={greetPeople} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Button text='Show Time' onClick={() => alert(new Date())} />
=======
>>>>>>> a95ca32 (Day_5)
=======
      <Button text='Show Time' onClick={() => alert(new Date())} />
>>>>>>> 37d04cb (cleaning day_5)
=======
      <Button text='Show Time' onClick={() => alert(new Date())} />
>>>>>>> upstream/master
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master
ReactDOM.render(<App />, rootElement)
```

In the above example, onClick is a props to hold the greetPeople function. HTML has onclick, onmouseover, onhover, onkeypress and etc event handlers. In React, these handlers are in camelCase. For instance onClick, onMouseOver, onKeyPress etc. We will cover events in React in detail in other section.

Let's see some more functions as props to give a clear understanding how to handle function as props in a React component.

This component shows month, date and year as an alert box.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Function to display time in Mon date, year format eg Oct 4, 2020
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const handleTime = () => {
    alert(showDate(new Date()))
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> upstream/master
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  return (
    <div className='app'>
      <Button text='show time' onClick={handleTime} />
      <Button text='Greet People' onClick={greetPeople} />
<<<<<<< HEAD
=======

  return (
    <div className='app'>
      <Button text='show time' onClick={handleTime} />
>>>>>>> a95ca32 (Day_5)
=======
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  return (
    <div className='app'>
      <Button text='show time' onClick={handleTime} />
      <Button text='Greet People' onClick={greetPeople} />
>>>>>>> 37d04cb (cleaning day_5)
=======
>>>>>>> upstream/master
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master
ReactDOM.render(<App />, rootElement)
```

## Destructuring props

By now, I believe you are a JavaScript ninja and you know about destructing arrays and objects. Destructuring code to some extent makes easy to read. Let us destructure the props in Header component. Everything we passed as props is stored in props object. Therefore, props is an object and we can destructure the properties. Let's destructure some of the props we wrote in object props example. We can destructure in many ways:

1. Step by step destructuring

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

2. Destructuring in one line

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data

  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master
ReactDOM.render(<App />, rootElement)
```

3. Destructuring the props inside the parenthesis

```js
import React from 'react'
import ReactDOM from 'react-dom'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 6f350ce (Day_6)
=======
>>>>>>> upstream/master
ReactDOM.render(<App />, rootElement)
```

Now, let's destructure all the components we had and assemble them together. We pass props from one component to another typically from parent to a child component.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
For instance in the Main component techs, user, greetPeople and handleTime props have been passed from the parent component Main to child components TechList and UserCard. Below, you will get all the codes destructured and cleaned.
=======
For instance in the Main component techs and user props have been passed from the parent component Main to child components TechList and UserCard. Below, you will get all the codes destructured and cleaned.
>>>>>>> a95ca32 (Day_5)
=======
For instance in the Main component techs, user, greetPeople and handleTime  props have been passed from the parent component Main to child components TechList and UserCard. Below, you will get all the codes destructured and cleaned.
>>>>>>> 37d04cb (cleaning day_5)
=======
For instance in the Main component techs, user, greetPeople and handleTime props have been passed from the parent component Main to child components TechList and UserCard. Below, you will get all the codes destructured and cleaned.
>>>>>>> 6eaa930 (day_5 has been cleaned)
=======
For instance in the Main component techs, user, greetPeople and handleTime props have been passed from the parent component Main to child components TechList and UserCard. Below, you will get all the codes destructured and cleaned.
>>>>>>> upstream/master

```js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 02516c4 (day_5 has been cleaned)
=======
>>>>>>> upstream/master
// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// CSS styles in JavaScript Object
=======
>>>>>>> 02516c4 (day_5 has been cleaned)
=======
// CSS styles in JavaScript Object
>>>>>>> 6f350ce (Day_6)
=======
// CSS styles in JavaScript Object
>>>>>>> upstream/master
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
<<<<<<< HEAD
=======
// Main Component
<<<<<<< HEAD
const Main = ({ user, techs }) => (
>>>>>>> a95ca32 (Day_5)
=======
const Main = ({ user, techs, greetPeople, handleTime }) => (
>>>>>>> 37d04cb (cleaning day_5)
=======
>>>>>>> upstream/master
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
=======
>>>>>>> a95ca32 (Day_5)
=======
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={handleTime} />
>>>>>>> 37d04cb (cleaning day_5)
=======
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
>>>>>>> 02516c4 (day_5 has been cleaned)
=======
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
>>>>>>> upstream/master
    </div>
  </main>
)

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <p>Copyright {copyRight.getFullYear()}</p>
=======
      <p>{copyRight.getFullYear()}</p>
>>>>>>> a95ca32 (Day_5)
=======
      <p>Copyright {copyRight.getFullYear()}</p>
>>>>>>> 6eaa930 (day_5 has been cleaned)
=======
      <p>Copyright {copyRight.getFullYear()}</p>
>>>>>>> upstream/master
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    date: new Date(), // date needs to be formatted to a human readable format
=======
    date: new Date(),
>>>>>>> a95ca32 (Day_5)
=======
    date: new Date(), // date needs to be formatted to a human readable format
>>>>>>> 02516c4 (day_5 has been cleaned)
=======
    date: new Date(), // date needs to be formatted to a human readable format
>>>>>>> upstream/master
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 37d04cb (cleaning day_5)
=======
>>>>>>> upstream/master
  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> upstream/master
  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
<<<<<<< HEAD
=======
  return (
    <div className='app'>
      <Header data={data} />
      <Main user={user} techs={techs} />
>>>>>>> a95ca32 (Day_5)
=======
  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
>>>>>>> 37d04cb (cleaning day_5)
=======
>>>>>>> upstream/master
      <Footer copyRight={date} />
    </div>
  )
}
const rootElement = document.getElementById('root')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
// we render the JSX element using the ReactDOM package
=======
>>>>>>> 6f350ce (Day_6)
ReactDOM.render(<App />, rootElement)
```

<<<<<<< HEAD
```js
import React from 'react'
import ReactDOM from 'react-dom'

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 4, 2020'

const copyRight = 'Copyright 2020'
const techs = ['HTML', 'CSS', 'JavaScript']

// Header Component
const Header = (props) => (
  <header>
    <div className='header-wrapper'>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>
        {props.author.firstName} {props.author.lastName}
      </h3>
      <p>{props.date}</p>
    </div>
  </header>
)

// User Card Component
const UserCard = ({ firstName, lastName, image }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// TechList Component
const TechList = (props) => {
  const techsFormatted = props.techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
    </div>
  </main>
)

// Footer Component
const Footer = (props) => (
  <footer>
    <div className='footer-wrapper'>
      <p>{props.copyRight}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header
      welcome={welcome}
      title={title}
      subtitle={subtitle}
      author={author}
      date={date}
    />
    <Main />
    <Footer copyRight={copyRight} />
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
>>>>>>> a95ca32 (Day_5)
ReactDOM.render(<App />, rootElement)
```

=======
>>>>>>> 02516c4 (day_5 has been cleaned)
=======
ReactDOM.render(<App />, rootElement)
```

>>>>>>> upstream/master
## propTypes

The propTypes package helps us to assign the data types of the props we passed to a component.

## defaultProps

The defaultProps can be used when we want to have some default prop types for a component.

We will cover propTypes in detail in other sections.

# Exercises: Components and Props

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3929034 (Day_7 has been published)
=======
>>>>>>> upstream/master
## Exercises: Level 1

1. What is props in a React component ?
2. How do you access props in a React component ?
3. What data types can we pass as props to components ?
4. What is a propTypes?
5. What is a default propTypes?

## Exercises: Level 2

1. Create a functional component and display the following images
   ![Front end](../images/frontend_technologies.png)
<<<<<<< HEAD
<<<<<<< HEAD
=======
1.Create functional components and display the following images
![Front end](../images/frontend_technologies.png)
>>>>>>> a95ca32 (Day_5)
=======
>>>>>>> 3929034 (Day_7 has been published)
=======
>>>>>>> upstream/master

2. Use functional component to create the following design

![News Letter](../images/news_letter_design.png)

## Exercises: Level 3

1.  Use the given hexadecimal color generator in the example to create these random colors. If you don't know how to generate the hexadecimal color you can use [dummy data generator](https://www.30daysofreact.com/dummy-data)

![Hexadecimal colors](../images/hexadecimal_color_exercise.png)

2. Use functional component to design the following user card.

![User Card](../images/user_card_design_jsx.png)

🎉 CONGRATULATIONS ! 🎉
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

[<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>](../06_Day_Map_List_Keys/06_map_list_keys.md)
<<<<<<< HEAD
=======
[<< Day 4](../30-Days-Of-React/04_Day_Component/04_components.md) | [Day 6 >>]()
>>>>>>> a95ca32 (Day_5)
=======

<<<<<<< HEAD
[<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>]()
>>>>>>> 2c4d226 (Day_5)
=======
[<< Day 4](../04_Day_Component/04_components.md) | [ >>](../06_Day_Map_List_Keys/05_map_list_keys.md)
>>>>>>> f6a8709 (minor fixes)
=======
>>>>>>> 7aaab6b (day_7)
=======

[<< Day 4](../04_Day_Component/04_components.md) | [Day 6 >>](../06_Day_Map_List_Keys/06_map_list_keys.md)
>>>>>>> upstream/master
