function Card(props) {
    return (
        <>
            <div className='card'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQnw9HdqQlf7cTP0snTK6neS7p9YgaVhYxg&s" alt="" width="800px" />
                <h1>Hello {props.uni}</h1>
                <p>{props.desc}</p>
            </div>
            <br />
        </>
    );
}

export default Card;