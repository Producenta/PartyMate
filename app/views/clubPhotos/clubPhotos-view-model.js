'use strict';

let Observable = require("data/observable").Observable;
let ObservableArray = require('data/observable-array').ObservableArray;

class ClubPhotosViewModel extends Observable {
	constructor(club, services) {
		super();
		this.services = services;
		this.clubId = club.Id;
		this.clubName = club.clubName;
		this.clubProfileImage = club.clubImage;
		this.sliderValue = 1;
		this.addImagePreview = "~/images/NoImage.png";
		
		this.photos = new ObservableArray([]);
	}
}

module.exports = {
    create: function(club, services) {
        return new ClubPhotosViewModel(club, services);
    }
};
