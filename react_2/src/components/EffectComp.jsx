import { useEffect } from "react";

function EffectComp() {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${value}`;
    });

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // });

    return (
        <div>
            <h1>Value: {value}</h1>
            <button onClick={() => setValue(value + 1)}>Increment Value</button>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default EffectComp;  