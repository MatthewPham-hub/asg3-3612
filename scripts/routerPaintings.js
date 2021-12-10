const data = require('./paintingDataProvider.js');


//Handle default request, which is nothing.
const handleAll = app => {
    app.get('/', (req, resp) => { 
        resp.json({"message:": "no match found"})
    });
};

//Handle request for all paintings.
const handleByPainting = app => {
    app.get('/paintings', (req, resp) => {
        resp.json(data);
    });
};

//Handle request for painting ID
const handleByPaintingId = app => {
    app.get('/painting/:id', (req,resp) => {
        const matches = data.filter( p => p.paintingID == req.params.id);
        if (matches.length > 0){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no paintings for provided id "});
        }
    });
};

//Handle requets for gallery ID
const handleByGalleryId = app => {
    app.get('/painting/gallery/:id', (req,resp) => {
        const matches = data.filter( p => p.gallery.galleryID == req.params.id);
        if (matches.length > 0){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no paintings for provided id "});
        }
    });
};
//Handle request for artist ID.
const handleByArtistId = app => {
    app.get('/painting/artist/:id', (req,resp) => {
        const matches = data.filter( p => p.artist.artistID == req.params.id);
        if (matches.length > 0){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no paintings for provided id "});
        }
    });
};

//Handle by year of painting, time period between min and max year.
const handleByYear = app => {
    app.get('/painting/year/:min/:max', (req,resp) => {
        const matches = data.filter( p => p.yearOfWork > req.params.min && u.yearOfWork < req.params.max);
        if (matches.length > 0){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no paintings for provided years "});
        }
    });
};
//Handle by title of painting, case insensitive.
const handleByTitle = app => {
    app.get('/painting/title/:title', (req,resp) => {
        const matches = data.filter( p => p.title.toLowerCase().includes(req.params.title.toLowerCase()));
        if (matches.length > 0){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no paintings for provided title "});
        }
    });
};
//Handle by color. Works by filtering the color array inside each painting for the color requested
// If the length of the resulting color array is > 0, element is present and is included in the search.
const handleByColor = app => {
    app.get('/painting/color/:color', (req,resp) => {
    const matches = data.filter(p => p.details.annotation.dominantColors.filter(c => c.name.toLowerCase().includes(req.params.color.toLowerCase())).length > 0);
        if (matches.length > 0){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no paintings for provided color"});
        }
    });
};



module.exports = {
    handleAll, handleByPainting, handleByPaintingId, handleByGalleryId, handleByArtistId, handleByYear, handleByTitle, handleByColor
};

