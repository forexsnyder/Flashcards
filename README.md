


**FlashCards** 


<br>

## MVP
A responsive website users can login to make flashcards, or study someone else's set.  Users can also add-to an exisiting set . Ask questions/answer community questions about specific each flash card. They will be able to manage their profile.



<br>


### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end rendering                        |
|   React Router   | Front-end Routing                          |
|     Express      |                                            |
|  Express Router  |                                            |

<br>

### Client (Front End)

#### Wireframes


[Desktop Wireframes](https://app.diagrams.net/#G1W0B0kyeAQMO92XYCFKPe7PqPgv-K7uc7)

[Tablet Wireframe](https://app.diagrams.net/#G1jVAoFevRgf8DjRyKSTyjQldwCHBCfFCZ)

[Mobile Wireframe](https://app.diagrams.net/#G1V1owPx8bv7luYMoA78fyqkS8kLcq60id)

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ graphics
|__ components/
      |__ Header.jsx
      |__ Welcome.jsx
      |__ Flashcard.jsx
      |__ Signup.jsx
      |__ LandingPage.jsx
      |__ MemoryGame.jsx
|__ services/
      |__ Comments.jsx
      |__ Sort.jsx
      |__ Comments.jsx
      |__ RecentComments.jsx

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component     |    Type    | state | props | Description                                                      |
| :----------:   | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header      | functional |   n   |   n   | _The header will contain the navigation and logo._               |
| Flashcard Set  | functional |   n   |   n   |   Searchable list of Flashcard Topics  |
|        |   class    |   y   |   n   | _      |
| Edit Profile   | functional |   n   |   y   |                  |
|    Footer      | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                   | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------    | :------: | :------------: | :-----------: | :---------: |
| Welcome  Page          |    H     |     3 hrs      |               |     TBD     |
| Create CRUD Flashcards |    H     |     3 hrs      |               |     TBD     |
| Signup              |    H     |     2 hrs      |               |     TBD     |
| LandingPage         |    H     |     5 hrs      |               |     TBD     |
| Backend             |    H     |     3 hrs      |               |     TBD     |
| Flashcards          |    H     |     6 hrs      |               |     TBD     |
| Edit Profile        |    H     |     3 hrs      |               |     TBD     |
| Comments Section    |    H     |     3 hrs      |               |     TBD     |
| Styling             |    H     |     20 hrs     |               |     TBD     |
| TOTAL               |          |     48 hrs     |               |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERB] (https://app.diagrams.net/#G10o1sAj9puS-KupTZqOCnMzmNmlhwHoq7)

<br>

***

## Post-MVP

Memory Game with a highscore.  Using the linked list system a player chooses how many objects they want to memorize.  Then write down the items in order.  Score the list,
and the player will see their high score.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
