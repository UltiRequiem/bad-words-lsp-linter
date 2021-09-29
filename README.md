# Bad Words Linter

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/bad-words-lsp-linter?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/bad-words-lsp-linter/workflows/CodeQL/badge.svg)

![Screenshot](./screenshot.png)

## Usage

Whit [coc.nvim](https://github.com/neoclide/coc.nvim):

```json
"languageserver": {
  "bad-words-linter": {
    "command": "bad-words-linter",
    "args": ["--stdio"],
    "filetypes": ["text"]
  }
}
```

### License

This project is licensed under the [MIT License](./LICENSE.md).
