# another cucumer feature file which explains scenario outline

# difference between scenario and scenario outline is Examples,
# In scenario outline we can pass many values using examples and check but in scenario we can pass only one value for one when.

@calc1 
Feature: Calculator
  As a user
  I want to use a calculator to add numbers
  So that I don't need to add myself
 
  Scenario Outline: Add two numbers <num1> & <num2>
    Given I have a calculator
    When I add <num1> and <num2>
    Then the result should be <total>
 
  Examples: 	
  			# Examples keyword is must when we use scenario outline
    | num1 	| num2 	| total	|
    | -2	| 3 	| 1L	|
    | 10.0 	| 15 	| 25 	|	
    | 99L 	| -99 	| 0 	|
    | -1 	| -10 	| -11 	|

	# four scenario's we are testing.. the above values we are passing are the scenario's.



