// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a User Schema. This will be the basis of how user data is stored in the db
var StoreSchema = new Schema({
    name: {type: String, required: true, index: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    rss_range: {type: String, required: false, default: ""},
    tz: {type: String, required: false, default: ""},
    tz_index: {type: String, required: false, default: ""},
    duration_threshold: {type: String, required: false, default: ""},
    start_of_day: {type: String, required: false, default: ""},
    is_updating: {type: String, required: false, default: ""},
    rss_campaign: {type: String, required: false, default: ""},
    session_timeout: {type: String, required: false, default: ""},
    raw_data: {type: String, required: false, default: ""},
    campaign_duration: {type: String, required: false, default: ""},
    rss_walkby: {type: String, required: false, default: ""},
    visit_duration_keep_fraction: {type: String, required: false, default: ""},
    total_visitors: {type: String, required: false, default: ""}
});

// Exports the StoreSchema for use elsewhere. Sets the MongoDB collection to be used as: "sampledatas"
module.exports = mongoose.model('sampledata', StoreSchema);