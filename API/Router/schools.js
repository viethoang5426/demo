const router = require("express").Router();

const controlerSchools = require("../Controller/schools");

router.get("/getAllSchools", controlerSchools.getAllSchools);
router.post("/addNewSchool", controlerSchools.addNewSchool);

module.exports = router;
