## Initial Plan

Test functions wich manipulate any data 
use TDD if needed ( used for createNationList util)
</br>

## Comments Whilst Developing

1. I spent time to understand the  spaceX API because it was new to me, than used postman to find the right endpoints for my needs. Than implemented in the api and point. I also spend some time to understand the RTK Query with the linked tutorial 
2. Find a typesript and styled component friendly ui library AntDesign. I used it in my previous project, but it has very good documentation easy to use and fits good with React.
3. trying to keep the code clean, separate the code for smaller reusable components and ad tests for util functions 

</br>

## Describe the user story and your implementation

As a user, when I open the application I would like to see a grid view of launches as per the design.
- fetch launches for selectid nation 
- list 8 launches in a responsive container and provide pagination 
- if no image use placeholder (marhmellow icon ) real pictures on the 2. page 

As a user, I can use a dropdown filter to filter the launches based on the launch payload nationality.
- fetch payload nationalities 
- create a list without nation duplication 
- use AntD dropdown 
- default nation US
- on change fetch the payloads with launches for the selected nationality 

As a user, when I click on a grid list item, I can view summary details for the launch that I have clicked on as per the design.
- on click set the selected launcs ide in a state 
- if id is exist load the detailes view 
- on detailes view fetch the detailed data for the launch 

As a user, when I am on the details view of an item, I should be able to navigate back to the list.
 - clicking on back set the selected id to zero and load the launches view 

(details view might be better in an othe rout but I think it`s ok for now, if it would be on an other rout i would put the id in the url)

### Summary
 I spend time to understand the API and its query option, geting familiar with RTKQuery and it was around 2-3 hours 
 I Started the development and implemented my plans wich was around 7-8 hours
 Spand time with refactoring and testin around 2 hours 
 So I spent at least 11 hours with this project but I`am stisfied with the final result and I would defenetly show it my Girlfriend :D :D 


</br>

## What would you have done differently if you had more time
- When I opened the code I always find something wich I could refactor, separat to a smaller component(exp.: LaunchCard/ text blocks wraped with       StyledTextContainer), extract to a separate hook (exp.: App/launchData query) so I would defenetly do this 
- I woud geting more familiar with the api end prevent fatchin unused data
- Add exeption handeling if no data found for a launch detail 
