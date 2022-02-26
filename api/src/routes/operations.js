const { Router } = require("express");
const {
  registerOperation,
  getLastTenOperations,
  getOperations,
  getIncomes,
  getExpenses,
  getBalance,
  deleteOperation,
  updateOperation
} = require("../controllers/operations.js");

const router = Router();

router.post("/registerOperation", registerOperation);
router.get("/getLastTenOperations", getLastTenOperations)
router.get("/getOperations", getOperations)
router.get("/getIncomes", getIncomes)
router.get("/getExpenses", getExpenses)
router.get("/getBalance", getBalance)
router.delete("/deleteOperation/:id", deleteOperation)
router.put("/updateOperation", updateOperation)
module.exports = router;
