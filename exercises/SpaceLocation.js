"use strict";
exports.__esModule = true;
exports.SpaceLocation = void 0;
// Paste in the provided code here:
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
        printDaysToLocation(location, SpaceLocation);
        {
            console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
        }
    }
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
