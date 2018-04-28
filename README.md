# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

**How To Run this App**
=======================
1. Download this repo so Jasmine can work locally
2. Open the index.html to see it all in action!

**Journal**
=====================

This is a journal about how I proceded with this project.
Begin by gathering info on how to proceed. Looking at Jasmine tutorials
Following commented instrutions:


1. /* TODO: Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.*/

    Looks like I have to loop though all URL items and check them. Think I will use forEach.
        Done, I think. 

2. /* TODO: Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.*/

    Done

        Why does console.log(item.name) gets ignored in the name test, while it works in the url test??

3. /* TODO: Write a new test suite named "The menu" */

    Done

4. /* TODO: Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.*/

    Done

        That was fairly easy I think. Used .tobe(true);

5.  /* TODO: Write a new test suite named "The menu" */

    Done

6. /* TODO: Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.*/

    Done, but:

        I am not sure how to write 2 expectations with 2 click events. Hope my solution works.
        I went with the .hasClass ....tobeFalsy or .tobeTruthy 'cause the "menu-hidden" is not replaced with another class.

        NOT WORKING! returns 'has no expectations'! Got it, it didn't like toBeFalsy/Truthy, and I forgot the . before the selector, and a typo.

7. /* TODO: Write a new test suite named "Initial Entries" */

    Done. That is the easy part!

8. /* TODO: Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test will require the use of Jasmine's beforeEach and asynchronous done() function.*/

    Done
    
        I needed a lot of hints for this one. Calling loadFeed() correctly was not obvious. I had to pass the correct arguments so it works. Calling done() at the end, as explicitily asked.

9. /* TODO: Write a new test suite named "New Feed Selection" */

    Done

10. /* TODO: Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.*/

    Done.

        The key here was to understand that  I had to store the 2 feed in 2 variables so I can compare them. Of course, I had to call loadFeed() twice so I could store each result separately.

        Correction:
        After submiting, the reviewer suggested I refactor the code so it actually works asynchronous
        this is what they wrote:

                Well done implemeting this and feeds are indeed loaded one after the other but this really is not right way of doing it.

                Look at first time you call

                loadFeed(0, function () { //This is first feed
                    // .... doing stuff here ..........
                    // what if I call loadFeed(1, callback) in here?
                    loadFeed(1, function() { //this is second feed
                            // .... doing stuff here ..........
                        // and now all I need is just to end it
                        done();
                    })
                })

        This would be asynchronous way of doing things 😉

11. The reviewer pointed out that instructions how to run the app must be included in this file. Implementing now.

**Aknowledgements**
=====================
I would like to thank the community for their support. I could not do this otherwise

**Final Thoughts**
===================
It is hard to figure out someone else's code, In this case AJAX was used, as well as Handlebars. Never seen it before, so some hints were needed.