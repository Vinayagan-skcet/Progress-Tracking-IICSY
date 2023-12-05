const Child1 = ({update}) => {
    return(
    <button onClick={()=>{
        update('MSg from your child')
    }}>Send Msg</button>
    );
};

export default Child1;