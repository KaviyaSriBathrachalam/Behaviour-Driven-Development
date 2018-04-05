# Bdd(Behavior-driven development) Functionaly (next to tdd)

# Cucumber feature file - this file is useful for business people to understand.

# Scenario,Feature,Given,And,then are keyworks of cucumber framework

# http://toolsqa.com/cucumber/behavior-driven-development/


@calc
Feature: Calculator 
	In order to avoid silly mistakes
    As a math idiot
    I want to be told the sum of two numbers

@mytag 
Scenario: Add two numbers 
	Given I have entered 50              #cucumber framework has 3 steps :1.Given 2.When 3.then
	And I have also entered 70	
	When I press add
	Then the result should be 120 on the screen