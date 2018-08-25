# Troubleshooting

Also see [Configure TypeScript, TSLint, and Prettier in VS Code for React development](https://medium.com/@sgroff04/configure-typescript-tslint-and-prettier-in-vs-code-for-react-native-development-7f31f0068d2)

And [Prettier and VSCode - full control](https://medium.com/@martin_hotell/stop-re-formatting-package-json-with-prettier-and-vscode-once-and-for-all-52d283067f9a)

## VSC: auto-save format

This hit me (@kmandrup) hard! My format on save conflicted with my TSLint rules enforced on every save. Projet setup so that you can't commit unless TSLint rules all pass.

I finally figured out how to resolve it by setting the following VSC preferences:
Via the top menu in VSC: `Code - Preferences - Settings - User settings`:

Add `"tslint.autoFixOnSave": true,`

```json
  "editor.formatOnSave": true,
  "tslint.autoFixOnSave": true,
```

That should do it!

## N/A version is not installed yet

Install [nvm](https://github.com/creationix/nvm)

Ensure your `~/.bash_profile` contains the following

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

[Add nvm alias](https://github.com/creationix/nvm/issues/437#issuecomment-317266597)

`nvm alias default system`

(Tested and works on Mac OSX)
