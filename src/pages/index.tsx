import { useEffect, useState } from "react";

export default function Home() {
  // const [btn, setBtn] = useState(false);
  // const [debt, setDebt] = useState(0);
  // const [urdebt, setUrdebt] = useState("0"); // Using state to manage urdebt

  // useEffect(() => {
  //   const a = localStorage.getItem("darsan");
  //   if (a === "true") {
  //     setBtn(true);
  //   } else {
  //     setBtn(false);
  //   }

  //   // Initialize urdebt state when component mounts
  //   const savedUrdebt = localStorage.getItem("debt");
  //   if (savedUrdebt !== null) {
  //     setUrdebt(savedUrdebt);
  //   }
  // }, []);

  // const sersen = () => {
  //   const newBtnValue = !btn;
  //   setBtn(newBtnValue);
  //   localStorage.setItem("darsan", newBtnValue.toString());
  //   const getuntsan = localStorage.getItem("untsan");
  //   if (getuntsan !== null) {
  //     const result = parseInt(getuntsan) - new Date().getHours();
  //     setDebt(result);
  //   }

  //   const res = parseInt(urdebt) + debt;
  //   localStorage.setItem("debt", res.toString());
  //   localStorage.removeItem("untsan");
  // };

  // const untsan = () => {
  //   const newBtnValue = !btn;
  //   setBtn(newBtnValue);
  //   localStorage.setItem("darsan", newBtnValue.toString());
  //   localStorage.setItem("untsan", new Date().getHours().toString());
  // };

  // return (
  //   <div className="flex justify-center items-center h-screen flex-col">
  //     <div>Debt: {urdebt}</div>
  //     <div>
  //       {btn ? (
  //         <button
  //           onClick={sersen}
  //           className="border-2 border-white rounded-lg p-[10px]"
  //         >
  //           SERCHLEE
  //         </button>
  //       ) : (
  //         <button
  //           onClick={untsan}
  //           className="border-2 border-white rounded-lg p-[10px]"
  //         >
  //           UNTLAA
  //         </button>
  //       )}
  //     </div>
  //     {btn}
  //   </div>
  // );
  const [yesPressed, setYesPressed] = useState(false);
  const [pressed, setPressed] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            {pressed ? (
              <button
                onClick={() => setPressed(false)}
                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                no
              </button>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </div>
  );
}
