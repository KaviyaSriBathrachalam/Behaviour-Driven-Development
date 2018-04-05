$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calc1.feature");
formatter.feature({
  "line": 2,
  "name": "Calculator",
  "description": "As a user\nI want to use a calculator to add numbers\nSo that I don\u0027t need to add myself",
  "id": "calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@calc1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Add two numbers \u003cnum1\u003e \u0026 \u003cnum2\u003e",
  "description": "",
  "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the result should be \u003ctotal\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "total"
      ],
      "line": 13,
      "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;1"
    },
    {
      "cells": [
        "-2",
        "3",
        "1L"
      ],
      "line": 14,
      "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;2"
    },
    {
      "cells": [
        "10.0",
        "15",
        "25"
      ],
      "line": 15,
      "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;3"
    },
    {
      "cells": [
        "99L",
        "-99",
        "0"
      ],
      "line": 16,
      "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;4"
    },
    {
      "cells": [
        "-1",
        "-10",
        "-11"
      ],
      "line": 17,
      "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Add two numbers -2 \u0026 3",
  "description": "",
  "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calc1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add -2 and 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the result should be 1L",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Calc1StepDefinitions.i_have_a_calculator()"
});
formatter.result({
  "duration": 98519250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "Calc1StepDefinitions.i_add_and(int,int)"
});
formatter.result({
  "duration": 1464271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1L",
      "offset": 21
    }
  ],
  "location": "Calc1StepDefinitions.the_result_should_be(int)"
});
formatter.result({
  "duration": 1824067,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add two numbers 10.0 \u0026 15",
  "description": "",
  "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calc1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add 10.0 and 15",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the result should be 25",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Calc1StepDefinitions.i_have_a_calculator()"
});
formatter.result({
  "duration": 74126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.0",
      "offset": 6
    },
    {
      "val": "15",
      "offset": 15
    }
  ],
  "location": "Calc1StepDefinitions.i_add_and(int,int)"
});
formatter.result({
  "duration": 239483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 21
    }
  ],
  "location": "Calc1StepDefinitions.the_result_should_be(int)"
});
formatter.result({
  "duration": 238058,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Add two numbers 99L \u0026 -99",
  "description": "",
  "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calc1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add 99L and -99",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the result should be 0",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Calc1StepDefinitions.i_have_a_calculator()"
});
formatter.result({
  "duration": 172485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99L",
      "offset": 6
    },
    {
      "val": "-99",
      "offset": 14
    }
  ],
  "location": "Calc1StepDefinitions.i_add_and(int,int)"
});
formatter.result({
  "duration": 240339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 21
    }
  ],
  "location": "Calc1StepDefinitions.the_result_should_be(int)"
});
formatter.result({
  "duration": 180753,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Add two numbers -1 \u0026 -10",
  "description": "",
  "id": "calculator;add-two-numbers-\u003cnum1\u003e-\u0026-\u003cnum2\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calc1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I add -1 and -10",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the result should be -11",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Calc1StepDefinitions.i_have_a_calculator()"
});
formatter.result({
  "duration": 165358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 6
    },
    {
      "val": "-10",
      "offset": 13
    }
  ],
  "location": "Calc1StepDefinitions.i_add_and(int,int)"
});
formatter.result({
  "duration": 171630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-11",
      "offset": 21
    }
  ],
  "location": "Calc1StepDefinitions.the_result_should_be(int)"
});
formatter.result({
  "duration": 96363,
  "status": "passed"
});
});