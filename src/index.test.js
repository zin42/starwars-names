var expect = require('chai').expect;
var starWars = require('./index');


//Simple test aka: first test

// describe("starwars-names-wannabee", function(){
//     it("should work!", function(){
//         expect(true).to.be.true;
//     });
// });


//two parts of the api in index.js

//module.exports gives an object which has two endpoints to hit
//all
//random (which runs a function defined in another npm package which was installed called randomUniqueArray)

//test all

describe("starwars-names-wannabee", function(){
    describe("all",function(){
        it("should be an array of strings", function(){
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item === "string";
                });
            }
        });

        it("should contain `Luke Skywalker`", function(){
            expect(starWars.all).to.include('Luke Skywalker');
        });

    });

    describe("random", function(){
        it("should return a random item from the starWars.all", function(){
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
    });
});