import Deal from "../models/Deal.js";

export const getDeals = async (req, res) => {
  try {
    const { search, stage } = req.query;

    const query = {};
    if (search) query.title = { $regex: search, $options: "i" };
    if (stage) query.stage = stage;

    const deals = await Deal.find(query).populate("contact");
    res.json(deals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createDeal = async (req, res) => {
  const deal = await Deal.create(req.body);
  res.status(201).json(deal);
};

export const updateDeal = async (req, res) => {
  const deal = await Deal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(deal);
};

export const deleteDeal = async (req, res) => {
  await Deal.findByIdAndDelete(req.params.id);
  res.json({ message: "Deal deleted" });
};
