import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'mobile', price: 15000 },
    { name: 'watch', price: 400 },
    { name: 'shirt', price: 180 },
    { name: 'table', price: 1100 },
    { name: 'shoe', price: 100 }
  ]
  return (
    <div className="App">
      {/* {
        products.map(product => console.log(product))
      } */}
      {/* {//hard coded
        products.map(product => <Products name="mobile" price="1500"></Products>)
      } */}
      {//dynamic
        products.map(product => <Products name={product.name} price={product.price}></Products>)
      }


    </div>
  );
}


function Products(props) {
  const productStyle = {
    border: '3px solid red',
    borderRadius: '10px'
  }

  return (
    <div className="product" style={productStyle}>
      <h2> Name: {props.name}</h2>
      <h4> price: {props.price}</h4>
    </div>
  )

}
export default App;











//||||||||||||||||||||11111111111||||||||||||||||||||||||||||
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Products></Products>
//       <Products name="mobile" price="1500"></Products>
//       <Products name="watch" price="700"></Products>
//       <Products name="shoe" price="500"></Products>


//     </div>
//   );
// }


// function Products(props) {
//   const productStyle = {
//     border: '3px solid red',
//     borderRadius: '10px'
//   }

//   return (
//     <div className="product" style={productStyle}>
//       <h2> Name: {props.name}</h2>
//       <h4> price: {props.price}</h4>
//     </div>
//   )

// }
// export default App;
