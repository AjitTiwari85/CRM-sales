import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const createContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.status(201).json(contact);
};

export const updateContact = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(contact);
};

export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Contact deleted" });
};
