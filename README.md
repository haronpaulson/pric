<<<<<<< HEAD
# Next.js + Tailwind CSS + Author (Jyotindra Nath)'s Collections.

This is a fully functional website that uses Next.js + Tailwind CSS in the front end. It contains the details of the specific author and the books that have been wriiten and published by the famous and dedicated author. One can have a look at the available books and choose to buy by visiting the page . You can see a Live Demo [here](http://authorjyotindra.com/).

We use ReactJs to create the front-end components and populate the home page with images, data of the author and his collections. Also, two other pages are created which are linked to the home page components.One for the books list and another page for a small introduction about the author. The details of the books are displayed with an image, Title, Published data and an overview of it. On visiting the app one can choose to buy the books by clicking on the "Buy now" option provided which will then redirect him/her to the selected book's amazon page on a new tab.
You can see this live in the provided link. Yes - the store is functional and you can buy your favourite books.

## The Tech

* Next.js + Tailwind CSS
* Font Awesome Icons
* Josefin Sans Google Font
* Github Pages
* Github Action


### How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```
By default, the app is set to show all the available books in the homepage and "/Books" page and the user can navigate through the page and have a look at all the books and can buy any book that he/she likes by clicking on the "Buy now"  button option below the image of every book.


#### Installation

Change into the project directory and run the following command:

```
yarn && yarn dev
```
```
npm run dev
```


### Deploy your own app

The NextJs app has been deployed on Github-pages using Github Action.

First the application is optimized and made into a production build using the run command "build". A pre rendered Html file that contains the contents along the static css files has to be created and it is done using the run command "export" and a new folder named "out" is created which contains the data to be deployed as a pre rendered page. Finally it is deployed in Github pages using Github Actions as a NodeJs file. We should also provide the information that it is not a jekyll file by creating a file in the "out" folder. The app is then deployed. 

##### Update Progressive Web App (PWA) data

Update the BoosDate.js file in the components to add, manipulate or remove data and the images under the public/images folder.

You can use free tools online such as https://realfavicongenerator.net/ to quickly generate all the different icon sizes and favicon.ico file.


=======
# jyotindiranath-html-website
>>>>>>> 447ab69996c707dd2d9d47690626169b8a46dd95
