import Room from "../assets/images/rooms/room1.jpg";

function Rating()
{
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card shadow">
                        <img class="card-img-top" src={Room} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src={Room} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src={Room} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Rating;