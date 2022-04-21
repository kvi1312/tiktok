import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import React from "react";
import Content from "./MOUNTED/Content";
import Content2 from "./MOUNTED/Content2";
import Memo from "./Memo";
// function App() {
//   const [info, setInfo] = useState({
//     name: "khai le",
//     age: "20",
//     address: "can tho",
//   });

//   const handleInfo = () => {
//     setInfo({
//       ...info,
//       bio: "code run in my dna",
//     });
//   };
//   const [counter, setCounter] = useState(1);
//   const handleIncrease = () => {
//     // set State với callback
//     // setCounter((prevstate) => prevstate + 1);
//     // setCounter((prevstate) => prevstate + 1);
//     // setCounter((prevstate) => prevstate + 1);
//     // setCounter(counter+1)
//   };
//   return (
//     <div className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleInfo}>Increase</button>
//     </div>
//   );
// }
//===================TWO-WAY-BINDING CLIP===============///
// const gifts = [
//   "cpui9",
//   "ram 32g",
//   "ssd 1tb",
//   "card màn hình",
//   "usb",
//   "monitor",
// ];
// function App() {
//   const [gift, setGift] = useState(gifts[0]);
//   const handleGift = () => {
//       const random = Math.floor(Math.random(0, 3) * gifts.length);
//       return setGift(gifts[random]);
//   };
//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || "chưa có phần thưởng"}</h1>
//       <button onClick={handleGift}>lấy thưởng</button>
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const handleSubmit = () => {
//     //call api
//     console.log({
//       name,
//       email,
//     });
//   };
//   return (
//     <div className="">
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   );
// }
// =================== RESPONSE FROM API =========//
// const courses = [
//   {
//     id: 1,
//     name: "html, css",
//   },
//   {
//     id: 2,
//     name: "javascript",
//   },
//   {
//     id: 3,
//     name: "nodejs",
//   },
// ];

// function App() {
//   const [checked, setChecked] = useState([]);

//   const handleSubmit = () => {
//     //call api
//     console.log({ id: checked });
//   };

//   const handleCheck = (id) => {
//     setChecked((prev) => {
//       const isChecked = checked.includes(id);
//       if (isChecked) {
//         return checked.filter((item) => item !== id); // lọc ra những thằng khác id đang nhấn
//       } else {
//         return [...prev, id];
//       }
//     });
//   };
//   console.log(checked);
//   return (
//     <div className="" style={{ padding: 32 }}>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   );
// }

//============== TO DO LIST ===========/
// function App() {
//   const [job, setJob] = useState("");
//   const [jobs, setJobs] = useState(() => {
//     const localStorageJob = localStorage.getItem("jobs");
//     const parseJob = JSON.parse(localStorageJob);
//     return parseJob ?? [];
//   });

//   const handleSubmit = () => {
//     setJobs((prev) => {
//       const arrJob = [...prev, job];
//       localStorage.setItem("jobs", JSON.stringify(arrJob)); //
//       return arrJob;
//     });
//     setJob("");
//   };

//   const handlDelete = (id) => {
//     const getDataLocalStorage = JSON.parse(localStorage.getItem("jobs"));
//     const newJobs = getDataLocalStorage.filter((item, index) => index !== id); // lọc ra những thằng có index khác với cái id của nút đang được bấm xóa
//     // đưa nó lên lại localstorage
//     localStorage.setItem("jobs", JSON.stringify(newJobs));
//     setJobs(newJobs);
//   };
//   return (
//     <div style={{ padding: 30 }}>
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job}
//             <button
//               style={{ marginLeft: 25 }}
//               onClick={() => handlDelete(index)}
//             >
//               {" "}
//               xóa
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//=================== MOUNTED/ useEFFECT/ useLayoutEffect ===============//

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="" style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {/* nếu mà có show thì mới render ra content */}
//       {/* {show && <Content></Content>} */}
//       {show && <Content2></Content2>}
//     </div>
//   );
// }

// ======================== USE REF ======================/
// function App() {
//   const [count, setCount] = useState(60);

//   const timerId = useRef();
//   const prevCount = useRef();
//   const h1Ref = useRef();

//   console.log(timerId.current);

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   useEffect(() => {
//     console.log(h1Ref.current);
//   });

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount((prevCount) => prevCount - 1);
//     }, 1000);
//     console.log("start->", timerId.current);
//   };

//   const handleStop = () => {
//     clearInterval(timerId.current);
//     console.log("stop", timerId.current);
//   };

//   console.log(count, prevCount.current);
//   return (
//     <div className="" style={{ padding: 20 }}>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// }
// VÍ DỤ VỀ VIỆC USE REF KO RE RENDER TRÊN UI
// function App() {
//   const [countStateVal, setCountStateVal] = useState(0);
//   const countRefVal = useRef(0);
//   const handeClick = () => {
//     // setCountStateVal(countStateVal + 1);
//     countRefVal.current = countRefVal.current + 1;
//     console.log(countRefVal.current);
//   };
//   console.log(countRefVal.current);

//   return (
//     <div>
//       <button onClick={handeClick}>Click Me</button>
//       <h1>{` value of ref ${countRefVal.current}`}</h1>
//     </div>
//   );
// }

// VÍ DỤ VỀ VIỆC USE REF TRUY VẤN ĐẾN 1 CÂY DOM
// function App() {
//   const ref = useRef(null);
//   console.log(ref);
//   useEffect(() => {
//     ref.current.focus(); // ref.current là 1 cây DOM chúng ta trỏ đến hàm focus của input nên sau khi reload thẻ input sẽ tự động được focus
//   }, []);
//   return (
//     <div>
//       <input type="text" name="" id="" ref={ref} />
//       <button>CLICK BTN</button>
//     </div>
//   );
// }

// ======================== MEMO METHOD ======================/
// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrease = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div style={{ padding: "80px 25px" }}>
//       {/* vì thằng component Memo là thằng con của compo App nên sẽ bị re-render theo, vì vậy sử dụng phương thức memo bên file Memo.js để nó theo dõi props của Memo có bị thay đổi giá trị sau mỗi lần re-render không? nếu có mới cho thay đổi giá trị sau mỗi lần re-render  */}
//       <Memo></Memo>
//       <h1>{count}</h1>
//       <button onClick={handleIncrease}>Click me!</button>
//     </div>
//   );
// }

//=========================== USE CALLBACK=====================/

// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrease = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);
//   return (
//     <div style={{ padding: "80px 25px" }}>
//       {/* onIncrease là props tự tạo với cú pháp  on + "..." */}
//       <Memo onIncrease={handleIncrease}></Memo>
//       <h1>{count}</h1>
//     </div>
//   );
// }
    //ví dụ 2
    function App() {
 
  }, []);
  return (
    <div style={{ padding: "80px 25px" }}>
      
    </div>
  );
}
export default App;
