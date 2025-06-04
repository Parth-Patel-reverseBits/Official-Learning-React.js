import { useCallback, useState } from "react";
import Title from "./components/Title";
import Count from "./components/Count";
import Button from "./components/Button";
import NavigationButton from "../../GlobalComponents/NavigationButton";
const Index = () => {
  const [age, setAge] = useState<number>(20);
  const [salary, setSalary] = useState<number>(50000);

  // const handleIncrementAge = () => {
  //   setAge(age + 1);
  // };

  // const handleIncrementSalary = () => {
  //   setSalary(salary + 5000);
  // };

  // useCallback implementation
  const handleIncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleIncrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button onClick={handleIncrementAge}>Increment Age</Button>

      <Count text="Salary" count={salary} />
      <Button onClick={handleIncrementSalary}>Increment Salary</Button>

      <NavigationButton left="left" path="/use-action-state">
        Go to previous page
      </NavigationButton>

      <NavigationButton path="/use-context">Go to next page</NavigationButton>
    </div>
  );
};

export default Index;
