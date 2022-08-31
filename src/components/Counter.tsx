import React, { useEffect, useState, FC } from "react";

interface CounterProps {
    name: string;
}

// interface CounterState {
//     counter: number;
// }

const Counter: FC<CounterProps> = ({ name }) => {
    const [counter, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounted ...")
    })

    const increment = () => {
        setCount((preCount) => {
            return preCount + 1;
        })
    }

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <h1>{name}</h1>
                <div className="text-6xl text-red-600">{counter}</div>
                <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button" onClick={() => increment()}>
                    count+
                </button>
            </div>
        </div>
    );
}

export default Counter;

// class Counter extends React.Component<CounterProps, CounterState> {
//     state: CounterState = {
//         counter: 0
//     };
//     componentDidMount() {
//         console.log("mounted");
//     }
//     render() {
//         const { name } = this.props;
//         const { counter } = this.state;
//         return (
//             <div className="flex h-screen">
//                 <div className="m-auto shadow-md p-4 rounded-md text-center flex flex-col gap-2">
//                     <h1>{name}</h1>
//                     <div className="text-6xl text-red-600">{counter}</div>
//                     <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button" onClick={() => this.setCount(1)}>
//                         count+
//                     </button>
//                 </div>
//             </div >
//         );
//     }
//     setCount = (amt: number) => {
//         this.setState((prevState: CounterState) => {
//             return {
//                 counter: prevState.counter + amt
//             }
//         });
//     }
// }

// export default Counter;
