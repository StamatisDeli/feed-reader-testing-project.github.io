/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Τest that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("have a URL and are not empty", function(){
            //loop
            allFeeds.forEach(function(item){
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);
                //console.log(item.url.length);
                //console.log(item.name);
            })
        })

        /* Τest that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("has a name defined and it is not empty", function(){
            //loop
            allFeeds.forEach(function(item){
                expect(item.name).toBeDefined();
                expect((item.name).length).not.toBe(0);
                //console.log(item.name);
            })
        })
    });


    /* Τest suite named "The menu" */
    describe ("The menu", function(){
        /* Τest that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it("is hidden by default", function(){
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        })
         /* Τest that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it("changes visibility when the menu icon is clicked", function(){
            $(".menu-icon-link").click();//when the hamburger is clicked...
            expect($(document.body).hasClass("menu-hidden")).toBe(false);
            $(".menu-icon-link").click();//when the hamburger is clicked again...
            expect($(document.body).hasClass("menu-hidden")).toBe(true);
        })
    })

    /* Τest suite named "Initial Entries" */
    describe ("Initial Entries", function(){
        /* Τest that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0,done);
            })

            it("has at least a single .entry element in the .feed container", function(done){
                expect($('.feed .entry').length).toBeGreaterThan(0);
                done();
        })
    })

    /* Τest suite named "New Feed Selection" */
    describe ("New Feed Selection", function(){
    /* Τest that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    * Remember, loadFeed() is asynchronous.
    */
        //These hold the values for two feeds, accesed by both following functions
        let feedOne;
        let feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() { //This is first feed
                feedOne = $('.feed').html(); 
                //Second feed must be in here so it works asychronously
                loadFeed(1, function() {//This is second feed
                    feedTwo = $('.feed').html();
                    done();
                });
            });
        });

        it('when a new feed is loaded, the content actually changes', function() {
            expect(feedTwo).not.toEqual(feedOne);
        });
    })

}());

