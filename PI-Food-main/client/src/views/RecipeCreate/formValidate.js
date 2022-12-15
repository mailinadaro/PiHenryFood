const validate = (input)=>{
    let errors = {};

    switch (true) {
      case !input.name ||
        input.name.length < 3 ||
        !/^[a-zA-Z\s]+$/.test(input.name):
        errors.name = "Name is required and must be alphanumeric";
        break;
      case !input.healthScore ||
        input.healthScore < 0 ||
        input.healthScore > 100:
        errors.healthScore =
          "Health Score is required, must be a number between 0 and 100.";
        break;
      case isNaN(input.healthScore):
        errors.healthScore = "Must to be a Number";
        break;
      case !/^\d+$/.test(input.healthScore):
        errors.healthScore = "Must to be Integer";
        break;
      case !input.cookTime || input.cookTime < 0 :
        errors.cookTime =
          "Health Score is required and must be major than 0.";
        break;
      case isNaN(input.cookTime):
        errors.cookTime = "Must to be a Number";
        break;
      case !/^\d+$/.test(input.cookTime):
        errors.cookTime = "Must to be Integer";
        break;
      case !input.summary || input.summary.length < 10:
        errors.summary = "Summary is required";
        break;
      // case !input.steps || input.steps.length < 10:
      //     errors.steps = 'Steps is required';
      //     break;
      case !input.image || input.image.length < 10 || !/^(http|https):\/\/[^ "]+$/.test(input.image): 
        errors.image = "Image is required";
        break;
      case !input.review || input.review.length < 10:
        errors.review = "Review is required";
        break;
      case !input.diets:
        errors.diets = "Diets is required";
        break;
      default:
        break;
    } 
    return errors;
}

export default validate;