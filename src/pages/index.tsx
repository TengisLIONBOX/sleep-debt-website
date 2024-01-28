import { useEffect, useState } from "react";

export default function Home() {
  const [btn, setBtn] = useState(false);
  const [debt, setDebt] = useState(0);
  const [urdebt, setUrdebt] = useState("0"); // Using state to manage urdebt

  useEffect(() => {
    const a = localStorage.getItem("darsan");
    if (a === "true") {
      setBtn(true);
    } else {
      setBtn(false);
    }

    // Initialize urdebt state when component mounts
    const savedUrdebt = localStorage.getItem("debt");
    if (savedUrdebt !== null) {
      setUrdebt(savedUrdebt);
    }
  }, []);

  const sersen = () => {
    const newBtnValue = !btn;
    setBtn(newBtnValue);
    localStorage.setItem("darsan", newBtnValue.toString());
    const getuntsan = localStorage.getItem("untsan");
    if (getuntsan !== null) {
      const result = parseInt(getuntsan) - new Date().getHours();
      setDebt(result);
    }

    const res = parseInt(urdebt) + debt;
    localStorage.setItem("debt", res.toString());
    localStorage.removeItem("untsan");
  };

  const untsan = () => {
    const newBtnValue = !btn;
    setBtn(newBtnValue);
    localStorage.setItem("darsan", newBtnValue.toString());
    localStorage.setItem("untsan", new Date().getHours().toString());
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div>Debt: {urdebt}</div>
      <div>
        {btn ? (
          <button
            onClick={sersen}
            className="border-2 border-white rounded-lg p-[10px]"
          >
            SERCHLEE
          </button>
        ) : (
          <button
            onClick={untsan}
            className="border-2 border-white rounded-lg p-[10px]"
          >
            UNTLAA
          </button>
        )}
      </div>
      {btn}
    </div>
  );
}
