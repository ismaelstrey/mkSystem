const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json(
        [
            {
                "id": "1",
                "name": "ismael strey",
                "age": 30
            }, {
                "id": "2",
                "name": "rafael strey",
                "age": 30
            }
        ]
    )
});
router.post("/", (req, res) => { });
router.put("/", (req, res) => { });
router.delete("/", (req, res) => { });


module.exports = router