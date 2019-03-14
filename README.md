# Flappy Donut Tutorial

This starter repository accompanies a short workshop session that I give in person. It may be useful outside of that context, but it is primarily tailored for that experience.

## Getting Set Up

The first task we need to achieve is getting this starter project up and running on our own computers. This will involve a few steps.

1. **Clone this repository to your computer**

   Right now, this project exists hosted on Github. In order for you to use the project you must get a copy of it onto your computer. This process is called a `clone` and it is [well documented by Github](https://help.github.com/en/articles/cloning-a-repository). They provide instructions on how to clone this repository via the Command Line or Github Desktop.

2. **Ensure you have Node.js and NPM installed**

   We will be relying on the Node.js environment for this project. Additionally, we'll be using Node Package Manager (NPM) to install the dependencies (code written by other developers) of our project. NPM provides [instructions on how to install Node.js and NPM](https://www.npmjs.com/get-npm).

   Node Source provides a [more in depth look on understanding NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/) you can review after this workshop.

   You should see a version number in your terminal after running each of the following commands that verifies you've correctly installed Node.js and NPM.

   ```bash
   node -v
   ```

   ```bash
   npm -v
   ```

3. **Install the dependencies of this starter project via NPM**

   We'll now use NPM to install the dependencies of our project. This process is [explained in detail by Node Source](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/#installmoduleswithnpminstall). However, you shouldn't need an in depth understanding for this workshop.

   To install our project dependencies, navigate to the directory you cloned this starter into in your terminal. Then run the following NPM command.

   ```bash
   npm install
   ```

4. **Run our start command in your terminal to verify everything is set up correctly**

   By this point your starter project should be correctly set up on your computer. In order to verify everything is working correctly, run the following command in your terminal from the project directoy.

   ```bash
   npm start
   ```

   This should cause some text to appear in your terminal indicating the starter project is building. After a few seconds it should should you a URL that looks something like [http://localhost:1234](http://localhost:1234). If you navigate to this address in your browser of choice, you should see a black screen with the text "Flappy Donut".
