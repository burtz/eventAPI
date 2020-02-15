const mongoose = require('mongoose')

const server = 'cluster0-ev6kx.mongodb.net';
const database = 'eventdatastore';
const user = 'burtons';
const password = '9cEWllgZc2kGaXKi';

mongoose.connect(`mongodb+srv://${user}:${password}@${server}/${database}`);

//mongodb+srv://burtons:<password>@cluster0-ev6kx.mongodb.net/test

const Schema = mongoose.Schema;
const SportsEventSchema = new Schema({
    eventId : String,
    category : String,
    subcategory : String,
    name : String,
    startTime : Number,
    displayed : Boolean,
    suspended : Boolean,
    Markets: [
        {
            eventId: String,
            marketId : String,
            name : String,
            displayed : Boolean,
            suspended : Boolean,
            Outcomes : [
                {
                    marketId : String,
                    outcomeId : String,
                    name : String,
                    price : String,
                    displayed : Boolean,
                    suspended : Boolean
                }
            ]
        }
    ]
});

//Model
const SportsEvent = mongoose.model('Event',SportsEventSchema);

module.exports = SportsEvent;