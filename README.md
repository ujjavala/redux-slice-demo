# redux-slice-demo
redux-slice-demo

This repository contains beginner level code that demonstrates usage of redux slices

### Folder structure
 [src/components](/src/components/) - contains indivual lower order (no direct state access) components

 [src/views](/src/views/) - contains higher order components that have access to the state

 [src/store](/src/store/) - contains modern [redux slices](https://redux.js.org/usage/migrating-to-modern-redux)

[.github/workflows/node.js.yml](.github/workflows/node.js.yml) - contains code github actions


### Coding guidelines to abide by

1. Common styles in single file
2. Move styles to css file instead of using it inline in the html element
3. Using constants instead of magic variables where needed
4. Consistent naming convention 
4. Unit tests
5. Snapshot tests for views ans static pages only
6. Update readmes

## Running the app

Given below are the steps to run the app in local. 

### Prerequisites: 
1. Install latest version of node on your machine

### Commands:

1. Install and build

``` 
npm install
npm run build
```

2. Lint

``` 
npm run lint -- --fix
```
3. Test

``` 
npm test -- -u   
```

4. Run

``` 
npm start
```


5. Check

Will excecute test, lint and build at a single go

``` 
npm run check
```

### Your app using reactJs is ready to explore on `http://localhost:9292`🎉



