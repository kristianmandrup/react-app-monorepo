# Component

First create a simple static (pure & functional) component, either using:

- plain HTML

Then create one using a UI library such as:

- Material UI

Then slowly make it more realistic by:

- adding a stateful component
- adding a pure functional component with state provided via Context
- using a Store such as MobX store

Expose all these different variants for different higher level consumer components to choose which to use for composition. Leverage naming conventions and patterns!

Example: have all `MaterialUI` components automatically compose by importing and using `MaterialUI` variants for child components being used.
