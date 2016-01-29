angular.module("RecipeFactory",[])

.factory("RecipeDTO", function(){
	
	function RecipeDTO(title, ingredients, rating, picture, directions){
		this.title = title;
		this.ingredients = ingredients;
		this.rating = rating;
		this.picture = picture;
		this.directions = directions;
	}

	return RecipeDTO
})