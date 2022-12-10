const Bird = require('../models/bird')








//create a bird
const addBird = async (req,res) => {
    const {species, gender, description, dateOfCatch, catchYourSelf, image} = req.body;
    let bird;
    try {
        bird = new Bird({
          species,
          gender,
          description,
          dateOfCatch,
          catchYourSelf,
          image,

        });
        await bird.save(); // el metodo save() guarda los datos del req en la DB
    } catch (error) {
        console.log(error);
    }
    if (!bird) {
        return res.status(500).json({message:"Unable to add"})
    }
    return res.status(201).json({ bird })
}



// get birds
const getBirds = async (req,res) => {
    
    let birds;
    try {
        birds = await Bird.find()
    } catch (error) {
        console.log(error);
    }

    if (!birds) {
      return  res.status(404).json ( {message:"There are no birds in our data base"} )
    }
     return   res.status(200).json({ birds })
    
}


/* //get bird by ID
const getBirdById = async(req,res) => {
    let bird;
    try {
        bird = await Bird.findById(req.params.id)
    } catch (error) {
        console.log(error);
    }

    if (!bird) {
        return res.status(404).json( {message: "cant find that bird"} )
    }
    return res.status(200).json( { bird } )
} */


module.exports = { addBird, getBirds }