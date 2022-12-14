const { register, login, setpersonal, getContacts, setRequest, setAccept, getFriends, getRequests, setDelete, setReject, searchContacts} = require('../controller/userController');

const router = require('express').Router();
router.post("/register", register)
router.post("/login", login)
router.post("/setpersonal/:id", setpersonal)
router.get("/contacts/:id", getContacts)
router.get("/friends/:id", getFriends)
router.get("/getRequest/:id", getRequests)
router.post("/request/:id", setRequest)
router.post("/accept/:id", setAccept)
router.post("/reject/:id", setReject)
router.post("/delete/:id", setDelete)
router.post("/searchcontacts/:id", searchContacts)

module.exports = router;