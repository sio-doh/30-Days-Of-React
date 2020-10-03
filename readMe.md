<div>
<img align="right" width="100%"  src="./images/30_days_of_react.jpg" />
</div>

<div align="center">

  <h1> 30 Days Of React</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author: <a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> October, 2020</small></sub>

</div>

| # Day |                                                                Topics                                                        |
| ----- | :--------------------------------------------------------------------------------------------------------------------------: |
| 00    | [Introduction](#introduction)<br> [How to Use Repo](#how-to-use-repo)<br> [Requirements](#requirements)<br> [Setup](#setup)  |
| 01    |                       [JavaScript Refresher](./01_Day_JavaScript_Refresher/01_javascript_refresher.md)                       |
| 02    |                      [Getting Started React](./02_Day_Introduction_to_React/02_introduction_to_react.md)                     |
| 03    |                                    [Setting Up](./03_Day_Setting_Up/03_day_setting_up.md)                                    |

🧡🧡🧡 HAPPY CODING 🧡🧡🧡<div>
<small>Support [**Asabeneh**](https://www.patreon.com/asabeneh?fan_landing=true) to create more educational materials</small>  
[<img src = './images/become_patreon.png' alt='become-asabeneh-patreon' title='click' />](https://www.patreon.com/asabeneh?fan_landing=true)

</div>

___

- [Introduction](#introduction)
- [Requirements](#requirements)
- [How to Use Repo](#how-to-use-repo)
  - [Star and Fork this Repo](#star-and-fork-this-repo)
  - [Clone your fork](#clone-your-fork)
  - [Create a New Branch](#create-a-new-branch)
  - [Structure Exercise Solutions](#structure-exercise-solutions)
  - [Commit Exercise Solutions](#commit-exercise-solutions)
  - [Update your Fork Daily](#update-your-fork-daily)
- [Setup](#setup)
  - [Install Node.js](#install-nodejs)
  - [Browser](#browser)
    - [Installing Google Chrome](#installing-google-chrome)
    - [Opening Google Chrome Console](#opening-google-chrome-console)
    - [Writing Code on Browser Console](#writing-code-on-browser-console)
      - [Console.log](#consolelog)
      - [Console.log with Multiple Arguments](#consolelog-with-multiple-arguments)
      - [Comments](#comments)
      - [Syntax](#syntax)
    - [Arithmetics](#arithmetics)
  - [Code Editor](#code-editor)
    - [Installing Visual Studio Code](#installing-visual-studio-code)
    - [How to Use Visual Studio Code](#how-to-use-visual-studio-code)
- [Adding JavaScript to a Web Page](#adding-javascript-to-a-web-page)
  - [Inline Script](#inline-script)
  - [Internal Script](#internal-script)
  - [External Script](#external-script)
  - [Multiple External Scripts](#multiple-external-scripts)
- [JavaScript Refresher](#javascript-refresher)
- [1. Variables](#1-variables)
- [2. Data types](#2-data-types)
- [3. Arrays](#3-arrays)
  - [How to create an empty array](#how-to-create-an-empty-array)
  - [How to create an array with values](#how-to-create-an-array-with-values)
  - [Creating an array using split](#creating-an-array-using-split)
  - [Accessing array items using index](#accessing-array-items-using-index)
  - [Modifying array element](#modifying-array-element)
  - [Methods to manipulate array](#methods-to-manipulate-array)
    - [Array Constructor](#array-constructor)
    - [Creating static values with fill](#creating-static-values-with-fill)
    - [Concatenating array using concat](#concatenating-array-using-concat)
    - [Getting array length](#getting-array-length)
    - [Getting index of an element in an array](#getting-index-of-an-element-in-an-array)
    - [Getting last index of an element in array](#getting-last-index-of-an-element-in-array)
    - [Checking array](#checking-array)
    - [Converting array to string](#converting-array-to-string)
    - [Joining array elements](#joining-array-elements)
    - [Slice array elements](#slice-array-elements)
    - [Splice method in array](#splice-method-in-array)
    - [Adding item to an array using push](#adding-item-to-an-array-using-push)
    - [Removing the end element using pop](#removing-the-end-element-using-pop)
    - [Removing an element from the beginning](#removing-an-element-from-the-beginning)
    - [Add an element from the beginning](#add-an-element-from-the-beginning)
    - [Reversing array order](#reversing-array-order)
    - [Sorting elements in array](#sorting-elements-in-array)
  - [Array of arrays](#array-of-arrays)
  - [💻 Exercise](#-exercise)
    - [Exercise: Level 1](#exercise-level-1)
    - [Exercise: Level 2](#exercise-level-2)
    - [Exercise: Level 3](#exercise-level-3)
- [4. Conditionals](#4-conditionals)
  - [If](#if)
  - [If Else](#if-else)
  - [If Else if Else](#if-else-if-else)
  - [Switch](#switch)
  - [Ternary Operators](#ternary-operators)
  - [💻 Exercises](#-exercises)
    - [Exercises: Level 1](#exercises-level-1)
    - [Exercises: Level 2](#exercises-level-2)
    - [Exercises: Level 3](#exercises-level-3)
- [5. Loops](#5-loops)
  - [Types of Loops](#types-of-loops)
    - [1. for](#1-for)
    - [2. while](#2-while)
    - [3. do while](#3-do-while)
    - [4. for of](#4-for-of)
    - [5. forEach](#5-foreach)
    - [6. for in](#6-for-in)
  - [Interrupting a loop and skipping an item](#interrupting-a-loop-and-skipping-an-item)
    - [break](#break)
    - [continue](#continue)
  - [Conclusions](#conclusions)
- [6. Scope](#6-scope)
  - [Window Scope](#window-scope)
  - [Global scope](#global-scope)
  - [Local scope](#local-scope)
- [7. Object](#7-object)
  - [Creating an empty object](#creating-an-empty-object)
  - [Creating an objecting with values](#creating-an-objecting-with-values)
  - [Getting values from an object](#getting-values-from-an-object)
  - [Creating object methods](#creating-object-methods)
  - [Setting new key for an object](#setting-new-key-for-an-object)
  - [Object Methods](#object-methods)
    - [Getting object keys using Object.keys()](#getting-object-keys-using-objectkeys)
    - [Getting object values using Object.values()](#getting-object-values-using-objectvalues)
    - [Getting object keys and values using Object.entries()](#getting-object-keys-and-values-using-objectentries)
    - [Checking properties using hasOwnProperty()](#checking-properties-using-hasownproperty)
  - [💻 Exercises](#-exercises-1)
    - [Exercises: Level 1](#exercises-level-1-1)
    - [Exercises: Level 2](#exercises-level-2-1)
    - [Exercises: Level 3](#exercises-level-3-1)
- [8. Functions](#8-functions)
  - [Function Declaration](#function-declaration)
  - [Function without a parameter and return](#function-without-a-parameter-and-return)
  - [Function returning value](#function-returning-value)
  - [Function with a parameter](#function-with-a-parameter)
  - [Function with two parameters](#function-with-two-parameters)
  - [Function with many parameters](#function-with-many-parameters)
  - [Function with unlimited number of parameters](#function-with-unlimited-number-of-parameters)
    - [Unlimited number of parameters in regular function](#unlimited-number-of-parameters-in-regular-function)
    - [Unlimited number of parameters in arrow function](#unlimited-number-of-parameters-in-arrow-function)
  - [Anonymous Function](#anonymous-function)
  - [Expression Function](#expression-function)
  - [Self Invoking Functions](#self-invoking-functions)
  - [Arrow Function](#arrow-function)
  - [Function with default parameters](#function-with-default-parameters)
  - [Function declaration versus Arrow function](#function-declaration-versus-arrow-function)
  - [💻 Exercises](#-exercises-2)
    - [Exercises: Level 1](#exercises-level-1-2)
    - [Exercises: Level 2](#exercises-level-2-2)
    - [Exercises: Level 3](#exercises-level-3-2)
- [9. Higher Order Function](#9-higher-order-function)
  - [Callback](#callback)
  - [Returning function](#returning-function)
  - [setting time](#setting-time)
    - [setInterval](#setinterval)
    - [setTimeout](#settimeout)
- [10. Destructuring and Spreading](#10-destructuring-and-spreading)
  - [What is Destructuring?](#what-is-destructuring)
  - [What can we destructure?](#what-can-we-destructure)
    - [1. Destructuring arrays](#1-destructuring-arrays)
    - [2. Destructuring objects](#2-destructuring-objects)
  - [Exercises](#exercises)
  - [Spread or Rest Operator](#spread-or-rest-operator)
    - [Spread operator to get the rest of array elements](#spread-operator-to-get-the-rest-of-array-elements)
    - [Spread operator to copy array](#spread-operator-to-copy-array)
    - [Spread operator to copy object](#spread-operator-to-copy-object)
    - [Spread operator with arrow function](#spread-operator-with-arrow-function)
- [11. Functional Programming](#11-functional-programming)
  - [1. forEach](#1-foreach)
  - [2. map](#2-map)
  - [3. filter](#3-filter)
  - [4. reduce](#4-reduce)
  - [5. find](#5-find)
  - [6. findIndex](#6-findindex)
  - [7. some](#7-some)
  - [8. every](#8-every)
  - [Exercises](#exercises-1)
- [12. Classes](#12-classes)
  - [Defining a classes](#defining-a-classes)
  - [Class Instantiation](#class-instantiation)
  - [Class Constructor](#class-constructor)
  - [Default values with constructor](#default-values-with-constructor)
  - [Class methods](#class-methods)
  - [Properties with initial value](#properties-with-initial-value)
  - [getter](#getter)
  - [setter](#setter)
  - [Static method](#static-method)
  - [Inheritance](#inheritance)
  - [Overriding methods](#overriding-methods)
  - [Exercises](#exercises-2)
    - [Exercises Level 1](#exercises-level-1-3)
    - [Exercises Level 2](#exercises-level-2-3)
    - [Exercises Level 3](#exercises-level-3-3)

<div align="center">
  <h1> 30 Days Of React</h1>
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
</div>

<div>

<small>Support [**Asabeneh**](https://www.patreon.com/asabeneh?fan_landing=true) to create more educational materials</small>  
[<img src = './images/become_patreon.png' alt='become-asabeneh-patreon' title='click' />](https://www.patreon.com/asabeneh?fan_landing=true)

</div>

<h1 style="color:#61dbfb;text-transform:uppercase;">Introduction</h1>
## Introduction

**Congratulations** on deciding to participate in 30 days of React programming challenge. In this challenge you will learn everything you need to use to develop a React application. In the end of the challenge you will get a 30DaysOfReact programming challenge completion certificate. In case you need help or if you would like to help others you may join the [telegram group](https://t.me/thirtydaysofreact).

**A 30DaysOfReact** challenge is a guide for both beginners and advanced JavaScript and React developers. Welcome to 30 Days Of React. React is a JavaScript library. I enjoy using and teaching React and I hope you will do so too.
In this step by step 30 Days React challenge, you will learn React which is one of most popular user interface JavaScript libraries.
React can do everything that JavaJavaScript can do. React can be used **_to add interactivity to websites, to develop mobile apps, desktop applications, games_**.
I believe you will learn quite a lot in the next 30 days and your programming and problem solving skills will also be improved significantly.

I will use converstational English and less jargons to write this challenge. The content will be continousely updated. If you find a typo or grammar mistakes don't suprised because I don't do any proof read before I publish it. I would recommond you to focus on the main message of the challenge instead of the English and some minor mistakes. I really appreciate if you send me pull requests for improvement and remember to pull first from master before you send pull requests. Most of the images I have used in this challenge came from 30DaysOfJavaScript challenge therefore you may need to rename file names and folders 30DaysOfReact.
If 

## Requirements

To get along with the challenge you need to have the following:

1. Motivation
2. A computer
3. Internet
4. A browser
5. A code editor
6. HTML, CSS and JavaScript intermediate level skill

## How to Use Repo

### Star and Fork this Repo

Star this repo to support this work and Fork the repo to create your own copy to work from.

### Clone your Fork

You should always work directly from your forked copy.

```bash
# note that an `ssh` link is used here, but an `https` link will work the same
git clone git@github.com:username/30-Days-Of-React.git
cd 30-Days-Of-React
```

### Create a New Branch

To complete daily exercises, my suggestion is to create a separate branch to house your exercise folder or any other changes you make. This will keep your master branch clean at all times, which means your master will always be similar to the original master.

```bash
git checkout -b exercise-solutions # `-b` creates the branch if it does not exist
```

### Structure Exercise Solutions

In your new branch, you can use files/folders to structure your solutions to daily exercises

```bash
mkdir -p solutions/day-01 # `-p` helps create nested directories
touch solutions/day-01/level1.js # touch creates a file
```

### Commit Excercise Solutions

Commit your solutions to your Fork

```bash
git add solutions/day-01/level1.js
git commit -m "chore: exercise level1 complete"
git push origin exercise-solutions # branch `exercise-solutions` was created earlier
```

### Update your Fork Daily

This repo will be updated daily throughout the month. When a new day's content becomes available, you can update your forked copy with the steps below.

```bash
# 1. switch to master branch
git checkout master
# 2. check if your local copy has a link to original `...Asabeneh/30-Days-Of-React.git`
git remote -v
# 3. if not, add a link to original, you can choose any name for the link or use `upstream`
git remote add upstream git@github.com:Asabeneh/30-Days-Of-React.git
# 4. check again to confirm link added
git remote -v
# 5. now you can fetch updates from original repo, assuming you named this `upstream`
git fetch upstream
# 6. merge the updates to your local master branch
git merge upstream/master master
# 7. push the merged updates to your Forked copy on GitHub
git push origin master
```

> Note that the updates are only applied to the master branch. If you wish to update any other branch, repeat steps 6-7 with the branch name. See snippet below for `exercise-solutions` branch

```bash
git merge upstream/master exercise-solutions
git push origin exercise-solutions
```

## Setup

I believe you have the motivation and a strong desire to be a developer, a computer and Internet.In addition to that basic to intermidate lelev HTML, CSS and JS. If you have those, then you have everything to get started.

### Install Node.js

You may not need node.js right now but you may need it for later. Install [node.js](https://nodejs.org/en/).

![Node download](images/download_node.png)

After downloading double click and install

![Install node](images/install_node.png)

We can check if node is installed on our local machine by opening our device terminal or command prompt.

```sh
asabeneh $ node -v
v12.14.0
```

When making this tutorial I was using node version 12.14.0, but now the recommended version of node.js for download is 12.17.0.

### Browser

There are many browsers out there. However, I strongly recommend Google Chrome.

#### Installing Google Chrome

Install [google chrome](https://www.google.com/chrome/) if you do not have one yet. We can write small JavaScript code on the browser console, but we do not use the browser console to develop applications.

![Google Chrome](images/google_chrome.png)

#### Opening Google Chrome Console

You can open Google Chrome console either by clicking three dots at the top right corner of the browser, selecting _More tools -> Developer tools_ or using a keyboard shortcut. I prefer using shortcuts.

![Opening chrome](images/opening_developer_tool.png)

To open the Chrome console using a keyboard shortcut. It is good to know the shortcut too as a JavaScript and React developer you will spend much time on a browser console and don't be lazy to open it during development.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](images/opening_chrome_console_shortcut.png)

After you open the Google Chrome console, try to explore the marked buttons. We will spend most of the time on the Console. The Console is the place where your JavaScript code goes. The Google Console V8 engine changes your JavaScript code to machine code.
Let us write a JavaScript code on the Google Chrome console:

![write code on console](./images/js_code_on_chrome_console.png)

#### Writing Code on Browser Console

We can write any JavaScript code on the Google console or any browser console. However, for this challenge, we only focus on Google Chrome console. Open the console using:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

To write our first JavaScript code, we used a built-in function **console.log()**. We passed an argument as input data, and the function displays the output. We passed 'Hello, World' as input data or argument in the console.log() function.

```js
console.log('Hello, World!')
```

##### Console.log with Multiple Arguments

The **console.log()** function can take multiple parameters separated by comma. The syntax looks like as follows:**console.log(param1, param2, param3)**

![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
```

As you can see from the snippet code above, _console.log()_ can take multiple arguments. It is recommended to use as many console.log() prints to check what is happening in your code but don't keep all console.log() tests on your code forever. Make your life easy by keeping the browser console open.

##### Comments

We add comments to our code. Comments are very important to make code more readable and to leave remarks in our code. JavaScript does not execute the comment part of our code.In JavaScript, any text line starting with // in JavaScript is a comment, and anything enclosed like this /\* \*/ is also a comment.

**Example: Single Line Comment**

// This is the first comment  
 // This is the second comment  
 // I am a single line comment

**Example: Multiline Comment**

/\*
This is a multiline comment  
 Multiline comments can take multiple lines  
 JavaScript is the language of the web  
 \*/

##### Syntax

Programming languages are similar to human languages. English or many other language uses words, phrases, sentences,compound sentences and other more to convey a meaningful message. The English meaning of syntax is _the arrangement of words and phrases to create well-formed sentences in a language_. The technical definition of syntax is _the structure of statements in a computer language._ Programing languages have syntax. JavaScript is a programming language and like other programming languages it has its own syntax. If we do not write a syntax that JavaScript understands, it will raise different types of errors. We will explore different kinds of JavaScript errors later. For now, let us see syntax errors.

![Error](images/raising_syntax_error.png)

I made a deliberate mistake. As a result, the console raises syntax errors. Actually, the syntax is very informative. It informs what type of mistake was made. By reading the error feedback guideline, we can correct the syntax and fix the problem. The process of identifying and removing errors from a program is called debugging. Let us fix the errors:

```js
console.log('Hello, World!')
console.log('Hello, World!')
```

So far, we saw how to display text using the _console.log()_. If we are printing text or string using _console.log()_, the text has to be inside the single quotes, double quotes, or a backtick quotes.
**Example:**

```js
console.log('Hello, World!')
console.log('Hello, World!')
console.log(`Hello, World!`)
```

#### Arithmetics

Now, let us practice more writing JavaScript codes using _console.log()_ on google chrome console for number data types.
In addition to the text, we can also do mathematical calculations using JavaScript. Let us do the following simple calculations.
The console can directly take arguments without the **_console.log()_** function. However, it is included in this introduction because most of this challenge would be taking place in a text editor where the usage of the function would be mandatory. You can play around directly with instructions on the console.

![Arithmetic](images/arithmetic.png)

```js
console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3
```

### Code Editor

We can write our codes on the browser console, but it won't do for bigger projects. In a real working environment, developers use different code editors to write their codes. In this 30 days JavaScript challenge, we will be using Visual Studio Code.

#### Installing Visual Studio Code

Visual studio code is a very popular open-source text editor. I would recommend to [download Visual Studio Code](https://code.visualstudio.com/), but if you are in favor of other editors, feel free to follow with what you have.

![Vscode](images/vscode.png)

If you installed Visual Studio Code, let us start using it.

#### How to Use Visual Studio Code

Open the Visual Studio Code by double-clicking its icon. When you open it, you will get this kind of interface. Try to interact with the labeled icons.

![Vscode ui](./images/vscode_ui.png)

![Vscode add project](./images/adding_project_to_vscode.png)

![Vscode open project](./images/opening_project_on_vscode.png)

![script file](images/scripts_on_vscode.png)

![Installing Live Server](images/vsc_live_server.png)

![running script](./images/running_script.png)

![coding running](./images/launched_on_new_tab.png)

Congratulations! You have completed the setup you need to get started with React, but before we dive into React let's do JavaScript refresher. If you are very comfortable with JavaScript you may skip day 1 JavaScript refresher. The JavaScript refresher section is vast and it may take more than one day. From my experience people usually get stuck in React because their JavaScript knowledge is very shallow therefore to fill that gap all the necessary JavaScript feature which can be used in React are covered in the JavaScript refresher section. There are many exercise but you are not required to solve them. Click [here](../30-Days-Of-React/02_Day_Introduction_to_React/02_introduction_to_react.md) if you want skip JavaScript and jump directly into React.

🎉 CONGRATULATIONS ! 🎉

[Day 1 >>](./01_Day_JavaScript_Refresher/01_javascript_refresher.md)
