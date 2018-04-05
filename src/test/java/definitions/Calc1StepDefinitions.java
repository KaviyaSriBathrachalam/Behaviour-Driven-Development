package definitions;
//Calc1.feature's definition
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import static org.junit.Assert.assertEquals;  //assert-j-core is different from junit assertions.
        //AssertJCore - this contains fully assert methods
        //junit assertions has some limited functions like assernotnull,assertequals(very limited which is useful to implement jnit framework) but assertjcore contains many functions.

import org.junit.runner.RunWith;

import calculator.Calc;

@RunWith(Cucumber.class)    //inorder to run cucumber in junit... junit uses junit runner
                            //if you want to implement junit, @runwith is used.
public class Calc1StepDefinitions {
int arg1,arg2;
Calc calc=new Calc();  //calling Calc.java
    @Given("^I have a calculator$")
    public void i_have_a_calculator()  {        //Given
        System.out.println("???????????Given???????????");
    }

    @When("^I add (.+) and (.+)$")
    public void i_add_and(int num1, int num2)  {     //When. <num1> <num2> values will be passed here
		arg1=num1;
		arg2=num2;
        System.out.println("num1 : "+num1+"num2 : "+num2);
    }
            //if you have and then and function will be there

    @Then("^the result should be (.+)$")            //then. <total> will be passed here
    public void the_result_should_be(int expected)  {    
		int actual=calc.sum(arg1,arg2);          //calling sum function jin Calc.java and returning value will be stored in actual variable
		System.out.println("total : " +expected);
		assertEquals(expected,actual);     //checking the value passed from total(excepted) with actual using assertequals
    }

}