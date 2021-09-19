const greatOperationButton = (props) => {
    return ( 
    <button className={props.classe} onClick={props.clic}>{props.children}</button>         
    )
}

export default greatOperationButton;