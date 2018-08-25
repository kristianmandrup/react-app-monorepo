# Sample server

Simple Express server:

- [How to get create-react-app to work with a Node.js back-end API](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)
- [Create React App with an Express Backend](https://daveceddia.com/create-react-app-express-backend/)

## Proxy

The way this works is, any time your React app makes a request to something that’s not a static asset (not an image or CSS or index.html, basically), it will forward the request to the server specified in "proxy".

## Use

From either a stateful component:

```js
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
```

or better, from a service

```js
class Users
  list() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
}
```

```js
import { Users } from "./users";

// TODO: map over each service factory to instantiate each
const users = Users.create(config);

// services/index.js
const service = {
  users
};
```
