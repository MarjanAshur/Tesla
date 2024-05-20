// // import React, { Component } from 'react';



// // class Counter extends Component {
// //   state = {
// //     count: 0,
// //     backgroundColor: ''
// //   };

// //   increment = () => {
// //     const { count } = this.state;
// //     if (count < 10) { 
// //       this.setState({ count: count + 1 });
// //       this.changeColor();
// //     }
// //   };

// //   decrement = () => {
// //     const { count } = this.state;
// //     if (count > -10) { 
// //       this.setState({ count: count - 1 });
// //       this.changeColor();
// //     }
// //   };

// //   changeColor = () => {
// //     const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple'];
// //     const randomColor = colors[Math.floor(Math.random() * colors.length)];
// //     this.setState({ backgroundColor: randomColor });
// //   };

// //   render() {
// //     const { count, backgroundColor } = this.state;

// //     return (
// //       <div className="counter" style={{ backgroundColor }}>
// //         <button onClick={this.increment}>+</button>
// //         <div className="count">{count}</div>
// //         <button onClick={this.decrement}>-</button>
// //       </div>
// //     );
// //   }
// // }

// // export default Counter;
// import { Component } from "react";

// class Counter extends Component{
//     state = {
//         count : 0,
//         backgroundColor: ''
//     }
//     increment = () =>{
//         if(this.state.count<10){
//             this.setState({count : this.state.count +1}
               
            
//                 ); this.changeColor()
//         }
     
//     }
//     decrement = () =>{
//         if(this.state.count>-10){
//             this.setState({count : this.state.count -1}

            
//                 ); this.changeColor()
//         }
     
//     }
//     changeColor = ()=>{
//         let color = ['red','blue','yellow','green','purple','orange']
//         let randomColor = color[Math.floor(Math.random() * color.length) ]
//         this.setState({
//         backgroundColor : randomColor
//         })
//     }
   
//     render(){

//         return(
//             <div className="box" style={{backgroundColor: this.state.backgroundColor}}>
//             <button onClick={this.increment}>+</button>
//             {this.state.count}
//             <button onClick={this.decrement}>-</button>

//             </div>
//         )
//     }
// }
// export default Counter;




// import React from "react";

// function Modal() {
//   return (
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
//         </div>
//         <div className="modal-body">
//           <p>
//             Заберите его в пункте выдачи до 15 апреля включительно, потом
//             заказ придется отменить.
//             <br />
//             Вход в пункт выдачи только в маске и перчатках.
//           </p>
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary">
//             Закрыть
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="app">
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <button type="button" className="btn btn-primary">
//             Уведомления
//           </button>
//         </div>
//       </div>

//       <Modal />
//     </div>
//   );
// }

// export default App;

 
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn btn-primary" onClick={openModal}>
            Уведомления
          </button>
          {showModal && (
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>
                </div>
                <div className="modal-body">
                  <p>
                    Заберите его в пункте выдачи до 15 апреля включительно, потом
                    заказ придется отменить.
                    <br />
                    Вход в пункт выдачи только в маске и перчатках.
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
