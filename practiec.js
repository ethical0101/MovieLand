// import './App.css';

// function App() {
//   const name ="I__am__Hack_Er";
//   const isNamesHowing = true;

//   return (
//     <div className="App">
//       <h1>Hello, {isNamesHowing ? name : "Someone"}!</h1>
//       {name ? (
//       <>
//           <h1>
//             {name}  
//           </h1>
//       </>
//       ):(
//         <>
//           <h1>
//             test
//             </h1>
//           <h2>
//             Botrey
//           </h2>
//         </>
       
//       )}
//     </div>
//   );
// }

// export default App;

import './App.css';


const Person = (props) => {
  return (
    <>
    <h1>Name : {props.name}</h1>
    <h2>Last Name : {props.lastName}</h2>
    <h2>Age : {props.age} </h2>
    </>
  )
}


const App = () => {

  return (
    <div className="App">
      <Person  name={'K.D.N.C'} lastName = {'Hacker'} age={19} />
      <Person  name={'Jansi'} lastName = {'Bhai'} age={19} />
    </div>
  );
}

export default App;
