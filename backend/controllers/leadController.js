import Lead from "../models/Lead.js";

export const getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};

export const createLead = async (req, res) => {
  const lead = await Lead.create(req.body);
  res.status(201).json(lead);
};

export const updateLead = async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lead);
};

export const deleteLead = async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ message: "Lead deleted" });
};
