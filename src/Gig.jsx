function Gig(props) {
    let image_address = "./src/assets/".concat(props.image);
    return (
        <div id="gig">
            <h3 id="name">{props.name}</h3>
            <img src={image_address} alt="band logo" width="500" height="200"></img>
            <p id="description">{props.description}</p>
            <p id="time-date">{props.time_date}</p>
            <p id="location">{props.locations}</p>
        </div>
    );
}

export default Gig;