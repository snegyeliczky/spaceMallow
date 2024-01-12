<p align="center">
  <picture>
  <source media="(prefers-color-scheme: dark)" srcset="./src/assets/logo-light.svg">
  <img src="./src/assets/logo.svg" width="500"  alt="Logo for Cleaning Mode">
</picture>
</p>

# Marshmallow Frontend Test

Welcome to Marshmallow frontend technical test.
Your task is to create a Typescript app that provides an overview of SpaceX launches 🚀.

## What we'd like you to do

Using the [SpaceX v4 API](https://github.com/r-spacex/SpaceX-API/tree/master/docs), we would like you to create an application that conforms to the user stories below and follows the designs given. For the test we suggest a minimum of 3 hours but we have no upper limit on how long you spend. All we ask to you is to let us know, truthfully, how much time you spent on it, this info will help us with context when reviewing the results.

As well as the application, we would like you to complete the [APPROACH.md](./documentation/APPROACH.md) document. Please do not skip this part as it provides valuable context on how you progressed when creating the application. Please fill out all sections in as much details as possible.

### User stories

-   As a user, when I open the application I would like to see a grid view of launches as per the design.
-   As a user, I can use a dropdown filter to filter the launches based on the launch payload nationality.
-   As a user, when I click on a grid list item, I can view summary details for the launch that I have clicked on as per the design.
-   As a user, when I am on the details view of an item, I should be able to navigate back to the list.

### Designs

We have provided the following figma file. Please take your time looking at this and noting all of the data potentially required.

-   [Figma file](https://www.figma.com/file/PEZgGHto1nMlFimg5zuo9X/Front-end-task?type=design&node-id=0%3A1&mode=design&t=PSh5pTMNVpuiRTw0-1)

### API

When using the endpoints, please use the V4 API for all calls and remember to filter the **launches** by the **payload nationality**.

-   [API Docs](https://github.com/r-spacex/SpaceX-API/tree/master/docs)

## Requirements

At a minimum, we're expecting the test to have the following:

-   [Styled components](https://styled-components.com/)
-   [RTKQuery](https://redux-toolkit.js.org/rtk-query/overview) usage to get data from the API
-   [React](https://react.dev/) usage
-   [TypeScript](https://www.typescriptlang.org/) usage
-   Unit tests using [vitest](https://vitest.dev/)

Please note that these are the minimum requirements and not the only requirements so if something isn't on the list but you wish to add/use it, please do so but be sure to not this in the [APPROACH.md](./documentation/APPROACH.md) so we can understand the reasoning.

### Testing

With the application, we are looking for unit tests at a minimum. If you have time and wish to do so, we would like to see e2e testing with using a framework of your choice but this is not required to pass the test.

## Getting started

We have provided a base Vite, React and Typescript application with `styled-components` and `react-redux` pre-installed.
We have also provided an RTQuery example to get you started

For all API needs, please use the [SpaceX API docs](https://github.com/r-spacex/SpaceX-API/tree/master/docs).

To get running, use the following scripts below. You'll find a full list of available scripts within the [package.json](./package.json)

```bash
$ npm i # Install the application
$ npm run dev # Run development
$ npm test # Run tests
```
## License

At CodeScreen, we strongly value the integrity and privacy of our assessments. As a result, this repository is under exclusive copyright, which means you **do not** have permission to share your solution to this test publicly (i.e., inside a public GitHub/GitLab repo, on Reddit, etc.). <br>

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/96557ef6-f972-40b2-98dd-8acfe74c01e8" target="_blank">this screen</a>.