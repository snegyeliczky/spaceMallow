## Initial Plan

Test functions which manipulate any data 
use TDD if needed (used for createNationList util)

## Comments Whilst Developing

1. I spent time to understand the SpaceX API because it was new to me, then used Postman to find the right endpoints for my needs. Then implemented in the API endpoint. I also spent some time to understand the RTK Query with the linked tutorial.
2. Find a TypeScript and Styled Component-friendly UI library AntDesign. I used it in my previous project, but it has very good documentation, easy to use, and fits well with React.
3. Trying to keep the code clean, separate the code for smaller reusable components and add tests for util functions.

## Describe the user story and your implementation

As a user, when I open the application I would like to see a grid view of launches as per the design.
- Fetch launches for selected nation.
- List 8 launches in a responsive container and provide pagination.
- If no image, use a placeholder (marshmallow icon) real pictures on the 2nd page.

As a user, I can use a dropdown filter to filter the launches based on the launch payload nationality.
- Fetch payload nationalities.
- Create a list without nation duplication.
- Use AntD dropdown.
- Default nation: US.
- On change fetch the payloads with launches for the selected nationality.

As a user, when I click on a grid list item, I can view summary details for the launch that I have clicked on as per the design.
- On click, set the selected launch id in a state.
- If id exists, load the details view.
- On details view, fetch the detailed data for the launch.

As a user, when I am on the details view of an item, I should be able to navigate back to the list.
- Clicking on back sets the selected id to zero and loads the launches view.

(Details view might be better in another route but I think it's ok for now, if it would be on another route I would put the id in the URL.)

### Summary
I spent time to understand the API and its query options, getting familiar with RTKQuery, and it was around 2-3 hours. 
I started the development and implemented my plans which was around 7-8 hours. 
Spent time with refactoring and testing around 2 hours. 
So I spent at least 11 hours with this project but I'm satisfied with the final result and I would definitely show it to my girlfriend :D :D

## What would you have done differently if you had more time
- When I opened the code, I always find something which I could refactor, separate to a smaller component (e.g., LaunchCard/text blocks wrapped with StyledTextContainer), extract to a separate hook (e.g., App/launchData query) so I would definitely do this.
- I would get more familiar with the API and prevent fetching unused data.
- Add exception handling if no data found for a launch detail.
