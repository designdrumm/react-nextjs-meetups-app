"use strict";
(() => {
var exports = {};
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 4497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup_api)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup-api.js

const handler = async (req, res)=>{
    if (req.method === "POST") {
        const data = req.body;
        //const { title, image, address, description } = data;
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://reactapp:i3A0CTd0sOkUCiOd@cluster0.xzbywfk.mongodb.net/?retryWrites=true&w=majority");
        //TODO: connetion error checking
        const db = client.db("meetup-app");
        const meetupsCollections = db.collection("meetups");
        const result = await meetupsCollections.insertOne(data);
        //TODO: insert error checking
        console.log(result);
        client.close();
        res.status(201).json({
            message: "Meetup inserted!"
        });
    }
};
/* harmony default export */ const new_meetup_api = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4497));
module.exports = __webpack_exports__;

})();