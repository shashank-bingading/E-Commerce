import Product from "../models/Product";

// Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });

    }
};

// Create a new product

export const createProduct = async (req, res) => {
    const {name, description, price, imageUrl, category, stock} = req.body;
    try {        const product = new Product({
            name,
            description,
            price,
            imageUrl,
            category,
            stock,
    });
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
// Where is it saved? It goes into a specific Collection (like a folder) inside your Database. If your model is named Product, MongoDB creates a collection called products

// Get a product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update a product

export const updateProduct = async (req, res) => {
    const {name, description, price, imageUrl, category, stock} = req.body;
    try {        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.imageUrl = imageUrl || product.imageUrl;
            product.category = category || product.category;
            product.stock = stock || product.stock;
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

//Delete a product

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.remove();
            res.json({ message: "Product deleted" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
