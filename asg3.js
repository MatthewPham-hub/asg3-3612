const express = require('express');
const app = express();
const path = require ('path');
app.use('/api', express.static(path.join(__dirname, 'public')));

const paintingRouter = require('./scripts/routerPaintings.js');
const galleriesRouter = require('./scripts/routerGalleries.js');
const artistsRouter = require('./scripts/routerArtists.js');


//Set router handling.
artistsRouter.handleByArtist(app);
artistsRouter.handleByArtistCountry(app);
galleriesRouter.handleByGalleries(app);
galleriesRouter.handleByGalleryCountry(app);
paintingRouter.handleAll(app);
paintingRouter.handleByPainting(app);
paintingRouter.handleByPaintingId(app);
paintingRouter.handleByGalleryId(app);
paintingRouter.handleByArtistId(app);
paintingRouter.handleByYear(app);
paintingRouter.handleByTitle(app);
paintingRouter.handleByColor(app);

let port = process.env.PORT || 8080;
app.listen(port, () =>{
    console.log("Server running at port = "  + port);
})