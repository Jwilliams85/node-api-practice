const express = require("express");
const charactersModel = require("../helpers/charactersModel.js")

const router = express.Router();

//Create

router.post("/", (req, res) => {
    const characterInfo =req.body;
   charactersModel
    .insert(characterInfo)
    .then((character) => {
        res.status(201).json([{message: "Your character was created!"}, character])
    })
    .catch (error => {
        res.status(500).json({error,error: "There was an error creating a new character"})
    })

})

//Read
router.get("/", (req,res) => {
    charactersModel
    .get(req.id)
    .then(e => {
        res.status(200).json(e)
    })
    .catch (error => {
    console.log(error);
    res.status(500).json({message: "Error retrieving character!"})
})
})
router.get("/:id", (req,res) => {
    charactersModel
    .get(req.params.id)
    .then(character => {
        res.status(200).json(character)
    })
    .catch (error => {
    console.log(error);
    res.status(500).json({message: "Error retrieving character!"})
})
})

//Update

router.put("/:id", (req, res) => {
    const characterInfo =req.body;
    const  { id } = req.params
    charactersModel
    .update(id, characterInfo)
    .then(e => {
        if (e) {
            res.status(200).json({message: "The character has been updated!"})
        } else {
            res.status(404).json({message: "The character could not be updated, it was not found"})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error updating the character"})
    })
})

// Delete 

router.delete("/:id", (req, res) => {
    charactersModel
    .remove(req.params.id)
    .then(e => {
        if(e > 0) {
            res.status(200).json({message: "The selected character has been deleted"})
        } else { res.status(404).json({message: "The character could not be found"})}
    })
    .catch(error => {
        console.log (error);
        res.status(500).json({message: "Error deleting the selected character"})
    })
})

module.exports = router;