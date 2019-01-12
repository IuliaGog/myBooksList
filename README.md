# myBooksList
This project is based on users needs to create and share their book preferences with others.

General template:

[General objective] - 100%
Developing an application on one of the specified topics, with a RESTful backend which accessed data stored in a relational database through a persistence API as well as data from an external service and an SPA front-end built with a component based framework.

[Components + partial grades]
-	At least 2 entities of which one is a parent and one is a child, stored in a relational database and accessed through an ORM -10%
(Problema mea semestrul asta a fost ca am ramas doar eu, cand echipa trebuie sa fie compusa din 3-5 persoane)
-	Operations on the entities exposed through a REST interface - 20%
-	SPA front-end with React.js (or Angular 2.0) - 20%
-	External service integration - 10%

[Code quality and style] - 20%
-	Real application, coherent from a business logic standpoint
-	The code must be well organized, variable names should be suggestive of their purpose and use a naming standard (e.g. camel case), the code should be indented for readability
-	Non working applications receive no points. However, functionality of the front-end or back-end can be demonstrated separately
-	Opțional: test coverage
-	Opțional: comments in the code

[Starting points] - 10%


[Partial deliverables] 
- 3 stages (delivery is done by supplying a link to a repository through a google form; the coordinating university staff member will be invited as a contributor to the repository) - non delivery of an intemediary stage reduces the maximum receivable points by 10% (i.e. if the maximum grade for the project is 5 points, delivering it directly at the end means the maximum points receivable is 4)
-	Detailed specifications, project description, presence of a git project - delivered after tutorial 5
-	Functional RESTful service present in the repository + instructions to run said sevice - delivered after tutorial 9
-	Complete application - deliveded in the last tutorial (demo)

1. We create a web application that offers the user the possibility to create reading lists.
   
   
2.Main functionalities:

    2.1. He/she can create one or more reading lists(They can give a specific name to that reading list, a description)

    2.2. Each user can share the reading lists with other users


3.How does the web app function?

    3.1. On the main page of the application, there will be a list of books that the user can choose from. Under each book, there will be a button that allows the user to add that book to a list.When pressing the button, the user can choose one of his lists.

    3.2. Since the app is integrated with Goodreads, each book will have a reader score, a title, the author, publishing year.

    3.3. The books in the main page can be filtered by genre, author, title, keyword and publishing year, to make it easier for the user to find a certain book.
	
  
4.How will the web app look?

    4.1. In the upper part of the screen, there will be the name of the app(left side) and the Lists.

      4.1.1. By pressing the name of app, the user will return to main page

      4.1.2. By pressing the "Lists" button, the user will go to the lists page

    4.2. On the main page, on the left side of the screen the user has the filters in order to facilitate his experience and find books easier.

    4.3. In the central section of the screen, there will be the list of books.

      4.3.1. The books will be arranged in rows, 5-6 on each row

      4.3.2. By putting the cursor over one book, the details  of that book will appear, in a slightly larger area than that of the book.

    4.4. The list of books created by the user can be also filtered and ordered

    4.5. Each book from the list will have 3 boxes that the user can check:

      4.5.1. Read

      4.5.2. In progress(the user can write here the last page he/she has read)

      4.5.3. Unread

    4.6. The books in the list can also be filtered by their reading status(read, unread,in progr)
