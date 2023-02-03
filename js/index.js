(async () => {
    // This is the entry point for your application. Write all of your code here.
    // Before you can use the database, you need to configure the "db" object
    // with your team name in the "js/movies-api.js" file.
    "use strict"
    const movies = await getMovies();
    console.log(movies);

    let activeHtml = `<div class="carousel-item active">
                            <div class="container d-flex carousel-card">
                                <div class="row flex-grow-1 d-flex card-row">
                                    <div class="col-6 d-flex justify-content-center"><img src="img/jurrasic-park-poster.jpeg" alt="jurrasic">
                                    </div>
                                    <div class="col-6 d-flex justify-content-between flex-column pt-5">
                                        <section>
                                            <h1 class="mb-4">${movies[0].title}</h1>
                                            <h4 class="mb-2">${movies[0].director} - ${movies[0].year}</h4>
                                            <h6>${movies[0].genre}</h6>
                                            <h6>$</h6>
                                        </section>
                                        <section class="d-flex flex-row">
                                             <button class="me-5 update-btn">UPDATE</button>
                                            <button class="ms-5 delete-btn">DELETE</button>
                                        </section>
                                    </div>
                                </div>
                            </div>`

    let dynamicHtml = ``;

    for (let i = 1; i < movies.length; i += 1) {
        dynamicHtml += `<div class="carousel-item">
                            <div class="container d-flex carousel-card">
                                <div class="row flex-grow-1 d-flex card-row">
                                    <div class="col-6 d-flex justify-content-center"><img src="img/jurrasic-park-poster.jpeg" alt="jurrasic">
                                    </div>
                                    <div class="col-6 d-flex justify-content-between flex-column pt-5">
                                        <section>
                                            <h1 class="mb-4">${movies[i].title}</h1>
                                            <h4 class="mb-2">${movies[i].director} - ${movies[i].year}</h4>
                                            <h6>${movies[i].genre}</h6>
                                            <h6>$</h6>
                                        </section>
                                        <section class="d-flex flex-row">
                                            <button class="me-5 update-btn">UPDATE</button>
                                            <button class="ms-5 delete-btn">DELETE</button>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>`
    }

    let btnHtml = `<button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>`

    console.log(activeHtml);
    console.log(dynamicHtml);
    console.log(btnHtml);

    $(`.cards-here`).html(`<div class="carousel-inner"> ${activeHtml} ${dynamicHtml} </div> ${btnHtml}`);

    // let html = ``;
    // movies.forEach((movie)=>{
    //     html += `<div class="card m-2" style="width: 18rem;">
    //                 <img src="img/jurrasic-park-poster.jpeg" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                     <h3 class="card-title">${movie.title}</h3>
    //                     <h5>${movie.director} - ${movie.year}</h5>
    //                     <p class="card-text">*****${movie.rating}</p>
    //                     <a href="#" class="btn btn-danger" id="delete-btn">Delete</a>
    //                 </div>
    //             </div>`
    // });
    //
    // $(`#movie-cards`).html(html);


    // $(`#delete-btn`).on(`click`, ()=>{
    //     deleteMovie()
    // })

    // await deleteMovie({
    //     id: "0LDz3lbnTbvffQWwMOdb"
    // });

    // await updateMovie({
    //     id: 'GbBq6P1Jc9yCXmWRSnvP',
    //     year: '1972'
    // })


    //  movie object structure
    // {
    //     title: 'The Shawshank Redemption',
    //         year: 1994,
    //     director: 'Frank Darabont',
    //     rating: 9.3,
    //     runtime: 142,
    //     genre: 'Drama',
    //     actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
    // },
    //
})();