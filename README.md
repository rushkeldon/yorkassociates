# YORK & ASSOCIATES ENGINEERING, INC WEBSITE

## HOW TO EDIT WITH GITHUB CODESPACES
- [instructions](https://docs.google.com/document/d/1qNqhibkILbn6Kn2NrW5GTkcCXjdqB9_dupoB5SkTU5o/edit?usp=sharing)

## NOTE
Below when you see the phrase 'run' followed by `this font` it means to type the command in the terminal and hit ENTER.

## How to Develop and Deploy Changes
1. Clone the repository to your local machine (this will require git to be installed on your machine)
2. In the terminal navigate to the root directory of the project
3. Run `npm i` to install (i stands for install) all dependencies
4. Run `npm start` to start the development server locally (not needed for PDF changes)
5. [http://localhost:3000](http://localhost:3000) should open automatically in your browser - changes will automatically be reflected in the browser as you make them
6. Run `git pull` to bring the latest changes down from the remote repository
7. Make changes:
    a. for source files make changes to TSX files, LESS files in the src directory. 
    b. for PDF files add or change in public/doc directory. Save.
8. Run `npm run build` to build the project for production
9. Run `git commit -a -m "your commit message here"` to commit your changes to the local repository
10. Run `git push` to push your changes to the remote repository
11. FTP the files from the `build` folder to the server (you will need to get the FTP credentials from the server administrator)

## Available Scripts

In the project directory, you can run (in the terminal):

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
