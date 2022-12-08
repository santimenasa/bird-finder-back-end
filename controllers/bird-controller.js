const bird = require('../models/bird')

const addBook = async (req,res) => {
    const {species, gender, description, dateOfCatch, catchYourSelf, image} = req.body;
    let bird;
    try {
        bird = new bird({
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