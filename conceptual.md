### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
	- A JWT is a JSON Web Token, which is used for authentication across several technology stacks.

- What is the signature portion of the JWT?  What does it do?
	- The signature is a version of the header and payload that's signed with a secret key. The algorithm specified in the header is what it will use.

- If a JWT is intercepted, can the attacker see what's inside the payload?
	- They would be able to see inside, however they would be limited in what they could tamper because the verification process would fail without the secret key to digitally sign it with.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
	- Authentication with a JWT will involve making a request to AJAX login route, the server will authenticate and return the token in JSON, front-end JS will receive and store that token, and then for every future request, the browser will send the token in the request for validation from the server.

- Compare and contrast unit, integration and end-to-end tests.
	- End to end testing tests an application's flow from start to end, unit testing tests small regions of code for proper functionality, and integration testing involves regular testing as development progresses.

- What is a mock? What are some things you would mock?
	- Mocking is primarily used in unit testing, and is useful if the real objects are impractical to incorporate into the unit test. It can be faster and is a pure test that relies only on our own code rather than anything externally built.

- What is continuous integration?
	- This is the practice of merging in small code changes frequently, rather than merging in a large change at the end of the development cycle. Developing and testing in smaller increments ultimately results in the building of better software.

- What is an environment variable and what are they used for?
	- These are variables set outside of the application code and are accessible during runtime. They are useful when assessing dynamic behavior of a piece of software. 

- What is TDD? What are some benefits and drawbacks?
	- Test Driven Development, it is beneficial to write testing as you develop and keep making sure that they're passing rather than being left with a mess of failing tests at the end, but it only focuses on completing the task/user story at hand rather than the entire application.

- What is the value of using JSONSchema for validation?
	- This is a relatively simple and effective method to ensure that data is being stored correctly, completely, and formatted properly under the unique restraints.

- What are some ways to decide which code to test?
	- Good areas to test are security, boundary conditions, integrations points, and refactored code.

- What does `RETURNING` do in SQL? When would you use it?
	- `RETURNING` will retreive the new values that you are dealing with at the beginning of the SQL query that `RETURNING` is at the end of. 

- What are some differences between Web Sockets and HTTP?
	- While HTTP is stateless, you ask it for an answer, get an answer, and then hang up connection, Web Sockets stay connected and tell the browser if something has changed

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
	- At this current moment, I am preferring Flask to Express. This is probably because I've spent more time with Flask, so there is a comfortability and familiarity associated with it. Based on what I know now, it seems like Express has more functionality and features.