


**FlashCards** 


<br>

## MVP
A responsive website users can login to make full CRUD flashcards, or study someone else's set.  Users can also add-to an exisiting set . Ask questions/answer community questions about specific a flash card. They will also be able to manage their profile.



<br>


### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front-end rendering                        |
|   React Router   | Front-end Routing                          |
|     Ruby on Rails         | Back-end                          |
|    Express       | Web app framework                          |
|    Axios         |   HTTP request                             |

<br>

### Client (Front End)

#### Wireframes


[Desktop](https://drive.google.com/file/d/1W0B0kyeAQMO92XYCFKPe7PqPgv-K7uc7/view?usp=sharing)

[Tablet](https://drive.google.com/file/d/1W0B0kyeAQMO92XYCFKPe7PqPgv-K7uc7/view?usp=sharing7)

[Mobile](https://app.diagrams.net/#G1V1owPx8bv7luYMoA78fyqkS8kLcq60id)

#### Component Tree

![ComponentTree](https://github.com/forexsnyder/Flashcards/blob/develop/ParentChild.JPG)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ graphics
|__ screens/
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


|  Component     |    Type    | state | props | Description                                                      |
| :----------:   | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header      | functional |   n   |   n   | Title and Navigation                                             |
|    Signup      | functional |   n   |   n   | Change form state                                             |
|    Landingpage      | functional |   n   |   y   | Title and Navigation                                             |
| Flashcard Set  | functional |   n   |   y   | Searchable list of Flashcard Topics, Create New Set                              |
| Flashcard      | functional |   n   |   y   | Create, Read, Update, Delete Flashcard                           |
| Edit Profile   | functional |   n   |   y   | Change email, password, username                                 |

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

[ERB Model](https://app.diagrams.net/#G10o1sAj9puS-KupTZqOCnMzmNmlhwHoq7)

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
