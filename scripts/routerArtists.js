const data = require('./artistDataProvider.js');


//Handle request for all artists.

const handleByArtist = app => {
    app.get('/artists', (req, resp) => {
        resp.json(data);
    });
};


//Handle request for artist country. 
const handleByArtistCountry = app => {
    app.get('/paintings/:country', (req,resp) => {
        const matches = data.filter( a => a.nationality == req.params.country);
        if (matches.length > 0){
            resp.json(matches);
        }
        else{
            resp.json({"message": "no artists for provided id "});
        }
    });
};

module.exports = {
    handleByArtist, handleByArtistCountry
}