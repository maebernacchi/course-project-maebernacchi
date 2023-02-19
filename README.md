#Language Design Proposal

My language will be a functional programming language used for computation and running basic simulations, similar to C. But, the big difference between my language and all others is that I want to create multiple 'versions' of it based on different languages. The original test implementation of this will be in German but I want to be able to expant it beyond just one or two lanuages. I want to see how I can use Unicode characters in a base language and alter them based on the base-language. It might be too big of a task, but I want to at least try.

I want to build this language because, as someone who speaks two languages, when writing code I think it would 'make more sense' in German than it would in english. I want to find a way to take a multitude of languages and make them accessible to those who might not have access to learning english. Learning how to code is already very inaccessible for many people just because of language barriers and a lack of familiarity with code in general. Making an easy to understand language with the ability to be more accessible is something that has been a long time coming.

In addition to your written summary, write a preliminary formal grammar similarly to how formal grammars have been presented in the lab write-ups summarizing the major parts of the language that you are aware of. Note that this grammar will very likely be incomplete and require subsequent revision.
I want to use C-like grammar. So, 
+ is add
- is subtract
/ is divide
* is multiply 
% is remainder 
druckf("") is print 
weile(){} is a while loop 
für(){} is a for loop
wenn(){} sonst wenn(){} sonst(){} is a if, else if, else statement. 

(this will be heavily edited in the future)

# Typescript Template

This repository was built from a custom-built template for a console-based [Typescript](https://www.typescriptlang.org) program designed for editing in [Visual Studio Code](https://code.visualstudio.com) or [Github Codespaces](https://github.com/features/codespaces).
Below, we outline the contents of the template for your reference if you need to build your own Typescript project.

## Package Management

We use [NPM](https://npmjs.com) for package management.
The package is initialized with:

~~~console
$> npm init
~~~

With default values given for the `package.json` file that is created.
In particular, a few scripts/sub-commands are given so that building, testing, _etc._, can be run via `npm run`.
See `package.json` to see what these commands do.

Note that the template uses the [Unlicense](https://unlicense.org) license which is replicated in `LICENSE`.
We recommend that you change the license as needed.

## Typescript

The Typescript compiler is installed as a (local) npm development package via `npm`:

~~~console
$> npm install typescript --save-dev
~~~

Development packages are packages that only used during program development, not program execution.

`tsconfig.json` contains default options to the Typescript compiler, `tsc`.
In particular, we specify that source files are contained in the `/src` directory and output files are placed in the `/dist` directory.
See the [tsconfig refeence](https://www.typescriptlang.org/tsconfig) for more information on these options.

## ESLint

We use [ESLint](https://eslint.org) to lint our code.
When coupled with appropriate Visual Studio Code plugin, ESLint provides strong support to enforce style and healthy code practices during development.
We installed `eslint` via the `eslint/config` helper tool:

~~~console
$> npm init @eslint/config
~~~

Arbitrarily, we chose the [Javascript Standard](https://standardjs.com) style for ESLint to enforce.
Feel free to customize this style template or choose a different style altogether.
`.eslintrc.js` contains these settings and the [ESLint user guide](https://eslint.org/docs/latest/use/configure/) provides a comprehensive reference for the file.

## Jest

We use [Jest](https://jestjs.io) as a testing framework for Typescript projects.
There are many such frameworks available; we choose Jest both because of its popularity and its ease of setup and use.

~~~console
$> npm install --save-dev jest ts-jest @types/jest
$> npx ts-jest config:init
~~~

The last command adds a Jest configuration file, `jest.config.js`, to the project.

## Devcontainer Configuration

The `/.devcontainer/devcontainer.json` file configures the runtime instance created when the project is loaded within a Github Codespace.
The file is the default configuration file provided by Microsoft in its [Node.js container template](https://github.com/microsoft/vscode-remote-try-node) with appropriate modifications for these kinds of projects.

Notably, if this project is run in a local version of Visual Studio Code, we recommend installing the following plugins to manage your work:

+   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
+   [Github Classroom](https://marketplace.visualstudio.com/items?itemName=GitHub.classroom)

## Git Configuration

`.gitignore` is pre-populated so that Git ignores all build files generated by the project.
