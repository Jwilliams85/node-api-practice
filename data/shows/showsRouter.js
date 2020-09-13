const express = require("express");
const showsModel = require("../helpers/showsModel.js")

const router = express.Router();

//Create

router.post("/", (req, res) => {
    const showInfo =req.body;
    showsModel
    .insert(showInfo)
    .then((show) => {
        res.status(201).json([{message: "Your Show was created!"}, show])
    })

})

//Read
router.get("/", (req,res) => {
    showsModel
    .get(req.id)
    .then(show => {
        res.status(200).json(e)
    })
    .catch (error => {
    console.log(error);
    res.status(500).json({message: "Error retrieving show!"})
})
})

router.get("/:id", (req,res) => {
    showsModel
    .get(req.params.id)
    .then(show => {
        res.status(200).json(e)
    })
    .catch (error => {
    console.log(error);
    res.status(500).json({message: "Error retrieving show!"})
})
})

//Update

router.put("/:id", (req, res) => {
    const showInfo =req.body;
    const  { id } = req.params
    showsModel
    .update(id, showInfo)
    .then(show => {
        if (show) {
            res.status(200).json({message: "The show has been updated!"})
        } else {
            res.status(404).json([{message: "The show could not be updated, it was not found"}, show])
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error updating the show"})
    })
})

// Delete 

router.delete("/:id", (req, res) => {
    showsModel
    .remove(req.params.id)
    .then(show => {
        if(e > 0) {
            res.status(200).json([{message: "The selected show has been deleted"}, show])
        } else { res.status(404).json({message: "The show could not be found"})}
    })
    .catch(error => {
        console.log (error);
        res.status(500).json({message: "Error deleting the selected show"})
    })
})

//get show's characters

router.get("/:id/characters", (req, res) => {
    showsModel
    .getShowsCharacters(req.params.id)
    .then (e => {
        res.status(200).json(e)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "Error retrieving characters for this show"})
    })
})

module.exports = router;