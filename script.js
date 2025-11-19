 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
			 radius=Number(radius);
            // write you code here and display the result to the user
	        let areac=(3.14)*radius*radius;
			 console.log(`The area of the circle with ${radius}  is ${areac.toFixed(2)}`);
           
}
calculateArea();
