# DeeMemory

DeeMemory is that software that every Dungeon Master always wanted to have. It is designed to provide the DM with all the information he/she needs, when they are needed.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Running the tests

Run the tests with a simple:
```
npm run test
```
## Deployment

DeeMemory uses a [two package.json structure](https://github.com/electron-userland/electron-builder/wiki/Two-package.json-Structure). All files under \app will be included in the application.

Build for Windows:

1. Make sure the docker daemon is running:
    ```
    sudo systemctl start docker
    ```
2. Run docker container:

   ```
   docker run --rm -ti -v ${PWD}:/project -v ${PWD##*/}-node-modules:/project/node_modules -v ~/.electron:/root/.electron electronuserland/electron-builder:wine
   ```

3. Type in `npm install && npm prune && npm run distWin`

## Built With

* [Electron](http://electron.atom.io/)
* [Webpack](https://webpack.github.io/)
* [React](https://facebook.github.io/react/)
* [Docker](https://www.docker.com/)

## Authors

* **Marco Zanini** - *Initial work* - [Personal website](https://www.marcozanini.it)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
