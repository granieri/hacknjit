# Loglog

An app to log your logs! (programmers: not that kind of log)

This app was built for HackNJIT! Loglog uses Nodejs with Express and MySQL on the backend with Vue and axios on the front end. 

## How to demo
### Prerequisites
You will need the following softwares to run this thing: MySQL Workbench, Node 10 

### Instructions
First, clone the repository to your local machine. Import the database provided in the database/ folder into MySQL Workbench. Make sure the configuration matches the following:
```
{
  host: "localhost",
  user: "root",
  password: "password",
  database: "hacknjit"
}
```

Next, in the shell, navigate to the folder where the repo lives. Run `npm install` to install all of the Node dependencies. Then open a different shell window, and run `npm run serve` to start the server. Then you can start the app by running `npm run dev` in your first terminal window. Visit localhost:8080 in your browser to demo the app. 


## Build Setup

``` bash
# install dependencies
npm install

# run express server to connect to mySQL databse
npm run serve

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
