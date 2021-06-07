# Answers to Technical Questions
1.	How long did you spend on the coding assignment? 
    I spent some free time during Weekend (Sat & Sun). May be 12hrs in total.

    a.	What would you add to your solution if you had more time?
        i) Included automated tests.
        ii) Context API / react redux store to store the API fetched data so that it will be available globally to the all components.
        iii) Design improvements
        iv) Component Refactoring
        v) Theme Switching
        vi) Single Page book display with react router. 
        vii) Lazy loding or pagination.
        viii) Converting CSS to SCSS by adding SASS compiler. 
    b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
        i) Mostly would have spent time for functional component testing.
        ii) Snapshot testing to test the element hierarchy
        iii) Render the component into the virtual DOM and test them how it is functioning  when passing various props.
        iv) Sort functionality test for various input
        v) Null value or  empty value check. For ex: check component behaviour when there is no  property found in the api.
2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
    1) React Profiling for performance measurement.
        <Profiler id="header" onRender={mycallback}>
        <Header  />
        </Profiler>
        
        <Profiler id="Books" onRender={mycallback}>
        <Books />
        </Profiler>
3. How would you track down a performance issue in production? Have you ever had to do this?
    1) Profiling codes would be helpful to identify. Mostly the problem would be in API fetch.

Problem I faced in previous project: Fetching API  data through GET request fetched larged object / json and it fetched around 300 data which is slowed down the application. But that much is not at all required. So, lazy loading concept is added. So, for first time it will fetch only 20 records. When user interactions involved the other data would be fetched. 

    2) Testing code with Real world data would be helpful to identify the performance issue
    3) Lighthouse report

4. How would you improve the API that you just used?
   Book Volumeinfo like image links should have been added in the API itself.
5. Please describe yourself using correctly formatted JSON.

{
  "JSON_Product": "About Person",
  "version": 1,
  "releaseDate": "2021-06-07T05:00:00.000Z",
  "person": {
    "email": "intelviji@gmail.com",
    "Fullname": "Vijayalakshmi Satish Singh",
    "phones": {
      "home": "365-998-9804",
      "mobile": "365-998-9804"
    },
    "dateOfBirth": "1987-11-09T00:00:00.000Z",
    "PreviousExperience": [
      {
        "companyName": "PINNGUAQ Association",
        "CompanyLocation": "Lindsay, ON, CA",
        "JobTitle": "Software Developer"
      },
      {
        "companyName": "Sensitive Planet Inc",
        "CompanyLocation": "California, USA",
        "JobTitle": "Senio Software Engineer"
      },
      {
        "companyName": "Cognizant Technology Solutions",
        "CompanyLocation": "Coimbatore, TN, India",
        "JobTitle": "Programmer Analyst"
      }
    ],
    "Skills": [
      "React JS",
      "HTML",
      "CSS/SASS",
      "Node JS",
      "PHP",
      "MySQL",
      "MongoDB",
      "Dynamo DB",
      "WordPress",
      "Rest API",
      "Javascript",
      "IONIC Framework",
      "Angular",
      "Mainframe Technologies",
      "AWS Lambda",
      "API Gateway"
    ],
    "AreasOfInterest": [
      "React JS Web App",
      "React Native Mobile App development",
      "AWS",
      "Node Js"
    ],
    "Awards": [
      "Associate of the Year",
      "Associate of the Month 3 times",
      "Above & Beyond"
    ],
    "Innovations": [
      "Tool Suggestions",
      "App suggestions",
      "Migrations",
      "CPU optimizations",
      "System Improvements"
    ]
  }
}
