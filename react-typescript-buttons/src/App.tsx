import { useState } from "react";
import "./App.css";
interface ButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const zeroingFunction = () => {
    setCount2(0);
    setCount1(0);
  };

  return (
    <>
      <Button count={count1} setCount={setCount1} />
      <Button count={count2} setCount={setCount2} />
      <ZeroButton zeroingFunction={zeroingFunction} />
    </>
  );
};
const Button = ({ count, setCount }: ButtonProps) => {
  const event = () => {
    setCount(count + 1);
    return count;
  };
  return (
    <>
      <button onClick={event}>{count}</button>
    </>
  );
};
const ZeroButton = ({ zeroingFunction }: { zeroingFunction: () => void }) => {
  return (
    <>
      <button onClick={zeroingFunction}></button>
    </>
  );
};
export default App;
