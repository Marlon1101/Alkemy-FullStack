const { Operations } = require("../db.js");

const registerOperation = (req, res, next) => {
  const { concept, amount, date, type } = req.body;
  try {
    const data = Operations.create({
      concept,
      amount,
      date,
      type,
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const getLastTenOperations = async (req, res) => {
  const lastTenOperations = await Operations.findAll({
    order: [["id", "DESC"]],
    limit: 10,
  });
  res.send(lastTenOperations);
};

const getOperations = async (req, res) => {
  try {
    const data = await Operations.findAll({
      order: [["id", "DESC"]],
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const getIncomes = async (req, res) => {
  try {
    const data = await Operations.findAll({
      where: { type: "income" },
      order: [["id", "DESC"]],
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const getExpenses = async (req, res) => {
  try {
    const data = await Operations.findAll({
      where: { type: "expense" },
      order: [["id", "DESC"]],
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const getBalance = async (req, res) => {
  let sumIncomes = 0;
  let sumExpenses = 0;
  let total = 0;
  try {
    const incomes = await Operations.findAll({
      where: {
        type: "income",
      },
    });
    await incomes.map((element) => {
      sumIncomes += element.amount;
    });
    const expenses = await Operations.findAll({
      where: {
        type: "expense",
      },
    });
    await expenses.map((element) => {
      sumExpenses += element.amount;
    });

    total = sumIncomes - sumExpenses;

    res.send(
      total.toLocaleString("en-US", { style: "currency", currency: "USD" })
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteOperation = async (req, res) => {
  const { id } = req.params;
  try {
    await Operations.destroy({
      where: { id },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateOperation = async (req, res) => {
  const { id, concept, amount, date } = req.body;
  try {
    await Operations.update(
      { concept, amount, date },
      {
        where: { id },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerOperation,
  getLastTenOperations,
  getOperations,
  getIncomes,
  getExpenses,
  getBalance,
  deleteOperation,
  updateOperation
};
