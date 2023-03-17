import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../app/features/Counter/actions";


const YourCashflow = () => {
    let {count} = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const padd = {margin:"30px 0",padding:"8px 15px",fontSize:"2rem"};
    return(
        <div>
            <h2>Cashflow Apps!</h2>   
            <br />
            <h3>Untuk sementara apps ini digunakan untuk tugas membuat counter menggunakan redux.</h3>
            <div className="d-flex justify-content-center gap-2">
                <button onClick={() => dispatch(decrementWithCheckingAction(1))} style={padd}>-</button>
                {'  '} <span style={padd}>{count}</span> {'  '}
                <button onClick={() => dispatch(increment(1))} style={padd}>+</button>
            </div>         
        </div>

        
    )
}

export default YourCashflow;