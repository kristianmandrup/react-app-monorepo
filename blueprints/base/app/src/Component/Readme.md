# Component

Build the component from a plain mockup and gradually make it more realistic and dynamic.

## Plain

Define component outline using plain HTML elements as a pure function

## Material UI

Take plain component and turn it into a Material UI (or other UI library)

## Stateful

Add state if needed, turning it into a Stateful component with some event handlers

## Pure component

Make it a pure functional component with state provided via Context Provider as `props`

## Use a Store

Provide data using a Store such as MobX store or MobX State Tree

## Expose variants

Expose all these different variants for different higher level consumer components to choose which to use for composition. Leverage naming conventions and patterns!

Example: have all `MaterialUI` components automatically compose by importing and using `MaterialUI` variants for child components being used.
