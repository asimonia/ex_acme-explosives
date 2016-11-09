function getCategories() {
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: "data/categories.json"
		}).done( (data) => {
			resolve(data);
		}).fail( (error) => {
			reject(error);
		});
	});
}

function getTypes() {
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: "data/types.json"
		}).done( (data) => {
			resolve(data);
		}).fail( (error) => {
			reject(error);
		});
	});
}

function getProducts() {
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: "data/products.json"
		}).done( (data) => {
			resolve(data);
		}).fail( (error) => {
			reject(error);
		});
	});	
}

function logData (data) {
	console.log("data from XHR", data);

	for (item in data[0].categories) {
		$(".categories").append(`<li>${data[0].categories[item].name}</li>`);
	}

	/*
	console.log("Array[1]", data[1].types);
	for (item in data[1].types) {
		console.log("item:", data[1].types[item].name);
		console.log("item:", data[1].types[item].description);
	}

	console.log("Array[2]", data[2].products);
	for (item in data[2].products) {
		console.log("item:", data[2].products[0].charred_stump);
		console.log("item:", data[2].products[0].dy_no_mite);
		console.log("item:", data[2].products[0].fairy_sparklers);
		console.log("item:", data[2].products[0].oooh_maker);
	}
	*/
}

// getCategories()
// .then( (categoryData) => {
// 	console.log("my categories:", categoryData);
// 	return getTypes();
// }, (error) => {
// 	console.log("something went horribly wrong", error);
// })
// .then( (typeData) => {
// 	console.log("my types:", typeData);
// 	return getProducts();
// })
// .then( (productsData) => {
// 	console.log("my products", productsData );
// 	return "Hello";
// })
// .then( (greeting) => {
// 	console.log(greeting);
// });

// .all() is a method on the Promise object that takes
// an array of promises

Promise.all([getCategories(), getTypes(), getProducts()])
.then( (alltheStuff) => {
	// send to populateData
	logData(alltheStuff);
});
