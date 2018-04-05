package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)    //inorder to run cucumber in junit... junit uses junit runner
                            //if you want to implement junit, @runwith is used.
@CucumberOptions(features = "..\\bdd-master\\src\\test\\java\\Features", 
                //giving the path where feature file exists.
glue = "definitions", dryRun = false, strict = true,
tags = {"@calc1"}, //if you want to run calc1.feature tag is @calc1 if you want to run calc.feature tag is @calc 
plugin = { "pretty", "html:target/html", "json:target/cucumber.json" })   //Feature file will be converted by json in cucumber.json automatically by cucumber.
                            //that cucumber.json ah we are so it in html format 
                            //THIS WILL BE VIEWED IN TARGET->CUCUMBER-HTML-REPORTS->FEATURE.OVERVIEW. in that i can see how much tests,scenario's,steps are passed.
public class RunCukesTest {

}