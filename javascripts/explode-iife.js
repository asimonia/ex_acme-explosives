"use strict";
let Explode = (function (oldExplode) {
	let categories = [];
	let types = [];
	let products = [];

	oldExplode.getMyData = (fileUrl) => {
		return new Promise( (resolve, reject) => {
			$.ajax({
				url: fileUrl
			}).done( (data) => {
				resolve(data);
			}).fail( (error) => {
				reject(error);
			});
		});
	};

	oldExplode.populateData = (data) => {
		categories = data[0].categories;
		types = data[1].types;
		products = data[2].products;
	};

	oldExplode.getCategories = () => {
		return categories;
	};

	oldExplode.getTypes = () => {
		return types;
	};

	oldExplode.getProducts = () => {
		return products;
	};

	oldExplode.populateSelect = () => {
		let cat = Explode.getCategories();
		for (i in cat) {
			let $option = $("<option>", {
				id: cat[i].id;
			});
			$option.html(cat[i].name);
			$("#categories").append($option);
		}
	};

	oldExplode.buildCard = (name, object) => {
		console.log("name", name);
		console.log("object", object);
		let card1 = $("<div>", { class: "col-xs-4" });
		let card2 = $("<div>", { class: "col-xs-12 prodCard"});
		let newTitle = $("<h3>");
		newTitle.text(object.name);
		let newDescription = $("<p>");
		newDescription.text(object.description);
		newTitle.appendTo(card2);
		newDescription.appendTo(card2);
		card2.appendTo(card1);
		card1.appendTo("#insertRow");
	};


  	return oldExplode;

})(Explode || {});
