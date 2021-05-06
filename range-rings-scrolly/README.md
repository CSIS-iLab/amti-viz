# AMTI Range Rings Map

## Quick-start Instructions

```shell
$ git clone https://github.com/CSIS-iLab/amti-viz
$ cd range-rings-scrolly
$ npm install
$ npm start
```

## Usage

### Local Development

This will give you file watching, browser synchronization, auto-rebuild, CSS injecting, etc.

```shell
$ npm start
```

### Build for Production

```shell
$ npm run build
```

### Branching

When modifying the code base, always make a new branch. Unless it's necessary to do otherwise, all branches should be created off of `master`.

Branches should use the following naming conventions:

| Branch type               | Name                                                      | Example                     |
| ------------------------- | --------------------------------------------------------- | --------------------------- |
| New Feature               | `feature/<short description of feature>`                  | `feature/header-navigation` |
| Bug Fixes                 | `bug/<short description of bug>`                          | `bug/mobile-navigation`     |
| Documentation             | `docs/<short description of documentation being updated>` | `docs/readme`               |
| Code clean-up/refactoring | `refactor/<short description>`                            | `refactor/apply-linting`    |
| Content Updates           | `content/<short description of content>`                  | `content/add-new-posts`     |

When ready to merge, submit a Pull Request into `master`. All code will be reviewed by the lead developer on the project before being merged into `master`.

### Commit Messages

Write clear and concise commit messages describing the changes you are making and why. If there are any issues associated with the commit, include the issue # in the commit title.

## Copyright / License

Copyright © 2019 CSIS iDeas Lab under the [BSD 3-Clause License](https://github.com/teamdigitale/licenses/blob/master/BSD-3-Clause).

Special thanks to Mapbox Community Team