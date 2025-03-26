type Operation = "add" | "subtract" | "multiply" | "divide";

interface OperationRunner {
  calculate(numberOne: number, numberTwo: number): number;
}

function naNCheck(...numbers:number[]):boolean {
  return numbers.includes(NaN);
}

function zeroCheck(...numbers:number[]):boolean {
  return numbers.includes(0);
}




class DividerOperation implements OperationRunner {
  calculate(numberOne: number, numberTwo: number): number {


    if (naNCheck(numberOne, numberTwo)) {
      throw new Error("NaN type is not allowed.");
    }

    if (zeroCheck(numberOne, numberTwo)) {
      throw new Error("Division by zero is not allowed.");
    }

    return numberOne / numberTwo;
  }
}

class MultiplierOperation implements OperationRunner {
  calculate(numberOne: number, numberTwo: number): number {

    if ([numberOne, numberTwo].includes(Infinity)) {
      throw new Error("Infinity type is not allowed.");
    }

    if (naNCheck(numberOne, numberTwo)) {
      throw new Error("NaN type is not allowed.");
    }

    return numberOne * numberTwo;
  }
}

class AdderOperation implements OperationRunner {
  calculate(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }
}

class SubtractorOperation implements OperationRunner {
  calculate(numberOne: number, numberTwo: number): number {
    return numberOne - numberTwo;
  }
}


function calculateOperation(
  operation: Operation,
  numberOne: number,
  numberTwo: number
) {

  const mapRunners = new Map<Operation, OperationRunner>(
    [
      ["add", new AdderOperation()],
      ["subtract", new SubtractorOperation()],
      ["multiply", new MultiplierOperation()],
      ["divide", new DividerOperation()],
    ],
  );

  const runner: OperationRunner | undefined = mapRunners.get(operation);

  if (!runner) {
    throw new Error(`Unsupported operation: ${operation}`);
  }

  return runner.calculate(numberOne, numberTwo);

}



console.log(
  {
    add: calculateOperation("add", 5, 3),
    subtract: calculateOperation("subtract", 5, 3),
    multiply: calculateOperation("multiply", 5, 3),
    divide: calculateOperation("divide", 5, 3),
  }
);