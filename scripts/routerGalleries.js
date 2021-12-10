const data = require('./galleriesDataProvider.js');



//Handle request for all galleries.
const handleByGalleries = app => {
    app.get('/galleries', (req, resp) => {
        resp.json(data);
    });
};

//Handle request for gallery country.
const handleByGalleryCountry = app => {
    app.get('/galleries/:country', (req,resp) => {
        const matches = data.filter( g => g.nationality == req.params.country);
        if (matches.length > 0){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no galleries for provided country"});
        }
    });
};
module.exports = {
    handleByGalleries,  handleByGalleryCountry
}