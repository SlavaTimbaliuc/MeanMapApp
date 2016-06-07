// Dependencies
var mongoose        = require('mongoose');
var User            = require('./model.js');

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.get('/stores', function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
        var query = User.find();
        query.select('-rss_range');
        query.select('-tz');
        query.select('-tz_index');
        query.select('-duration_threshold');
        query.select('-start_of_day');
        query.select('-is_updating');
        query.select('-rss_campaign');
        query.select('-session_timeout');
        query.select('-raw_data');
        query.select('-campaign_duration');
        query.select('-rss_walkby');
        query.select('-visit_duration_keep_fraction');
        query.exec(function(err, stores){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(stores);
        });
    });
};