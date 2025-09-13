function MapComp() {

    const data = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQnw9HdqQlf7cTP0snTK6neS7p9YgaVhYxg&s",
            uni: "University A",
            desc: "Description for University A"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQnw9HdqQlf7cTP0snTK6neS7p9YgaVhYxg&s",
            uni: "University B",
            desc: "Description for University B"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQnw9HdqQlf7cTP0snTK6neS7p9YgaVhYxg&s",
            uni: "University C",
            desc: "Description for University C"
        }
    ];
  return (
    <div>
      {data.map((value, i) => (
        <div className="card" key={i}>
          <img src={value.img} alt="University" />
          <h2>{value.uni}</h2>
          <p>{value.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default MapComp;