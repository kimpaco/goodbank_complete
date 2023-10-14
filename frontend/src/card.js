

const Card = (props) => {
    function classes(){
        const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3' + bg + txt;
    }

    return (
      <div className={classes()} style={{maxWidth: "900px"}} >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={props.image} class="img-fluid rounded-start" alt="..."/>
            </div>
        <div className="col-md-8">
            <div className="card-header" style={{color: "black", fontWeight: 'bold'}}>{props.header}</div>
            <div className="card-body" style={{color: "black"}}>
                {props.body}
                {props.error && <p style={{color: 'red', fontWeight: 'bold'}}>{props.error}</p>}
            </div>
        </div>
        </div>
    </div>  
    );

}

export default Card;