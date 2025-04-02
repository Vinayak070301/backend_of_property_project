const Property = require('../model/Property');

// Add a New Property (Admin Only)
exports.addProperty = async (req, res) => {
  try {
    const { name, image, price, location, isFeatured ,description } = req.body;

    if (!name || !image || !price || !location || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProperty = new Property({ name, image, price, location, isFeatured ,description });
    await newProperty.save();
    
    res.status(201).json({ message: 'Property added successfully', property: newProperty });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update Property Details (Admin Only)
exports.updateProperty = async (req, res) => {
  try {
    const { name, image, price, location, isFeatured ,description} = req.body;
    const property = await Property.findById(req.params.id);

    if (!property) return res.status(404).json({ message: 'Property not found' });

    property.name = name || property.name;
    property.image = image || property.image;
    property.price = price || property.price;
    property.location = location || property.location;
    property.isFeatured = isFeatured !== undefined ? isFeatured : property.isFeatured;
    property.description = description || property.description

    await property.save();
    res.json({ message: 'Property updated successfully', property });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a Property (Admin Only)
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });

    await property.deleteOne();
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Fetch All Properties (For Homepage)
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Fetch Featured Properties (For Homepage Highlight)
exports.getFeaturedProperties = async (req, res) => {
  try {
    const featuredProperties = await Property.find({ featured: true });
    res.json(featuredProperties);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
