function Card(props) {
    return (
        <>
            <div className='card'>
                <img src={props.img} alt="" width="800px" />
                <h1>Hello {props.uni}</h1>
                <p>{props.desc}</p>
            </div>
            <br />
        </>
    );
}

export default Card;