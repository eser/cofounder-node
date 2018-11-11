# 💾 [cofounder-node](https://github.com/eserozvataf/cofounder-node)

[![build status][build-image]][build-url]
[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![coverage status][coverage-image]][coverage-url]
[![license][license-image]][license-url]


## What is the CoFounder and CoFounder-Node?

[CoFounder](https://github.com/eserozvataf/cofounder) is designed to offer file system functionalities within an abstraction layer.

This project is the 'node.js' implementation for CoFounder. It simply adapts node.js's fs, path, stream, child_process and etc. functionalities.

Plus, as a library, CoFounder-Node is completely tree-shanking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole CoFounder-Node package.


## Quick start

Execute `npm install cofounder-node` to install CoFounder-Node and its dependencies into your project directory.


## Usage

### Basics

To initialize a Cofounder-Node instance:

```js
import cofounder from 'cofounder-node';
// or const cofounder = require('cofounder-node').default;

cofounder.os.shell('ls');
```


## List of methods

- fs.cp
- fs.cpP
- fs.glob
- fs.lstat
- fs.mkdir
- fs.mkdirP
- fs.mv
- fs.mvP
- fs.readdir
- fs.readFile
- fs.rm
- fs.rmdir
- fs.rmdirP
- fs.rmP
- fs.writeFile
- fs.writeFileP
- json.loadFile
- json.saveFile
- os.shell


## Todo List

See [GitHub Projects](https://github.com/eserozvataf/cofounder-node/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/cofounder-node/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)


[build-image]: https://travis-ci.org/eserozvataf/cofounder-node.svg?branch=master
[build-url]: https://travis-ci.org/eserozvataf/cofounder-node
[npm-image]: https://img.shields.io/npm/v/cofounder-node.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cofounder-node
[download-image]: https://img.shields.io/npm/dt/cofounder-node.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/cofounder-node.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/cofounder-node
[coverage-image]: https://codecov.io/gh/eserozvataf/cofounder-node/branch/master/graph/badge.svg
[coverage-url]: https://codecov.io/gh/eserozvataf/cofounder-node
[license-image]: https://img.shields.io/npm/l/cofounder-node.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/cofounder-node/blob/master/LICENSE
