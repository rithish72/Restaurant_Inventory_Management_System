import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Inventory } from "../models/inventory.models.js";
import mongoose from "mongoose";

// Get all inventory items
const getAllInventory = asyncHandler(async (req, res) => {
    const items = await Inventory.find();
    return res
        .status(200)
        .json(new ApiResponse(200, items, "All items fetched successfully"));
});

/// Get Current Item
const getCurrentItem = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        throw new ApiError(400, "Item ID is required");
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid Item ID format");
    }

    const existingItem = await Inventory.findById(id);

    if (!existingItem) {
        throw new ApiError(404, "Item not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, existingItem, "Item retrieved successfully")
        );
});

// Add a new inventory item
const addInventoryItem = asyncHandler(async (req, res) => {
    const { itemName, category, threshold, quantity, unit } = req.body;

    if (!itemName || !category || !threshold || !quantity || !unit) {
        throw new ApiError(400, "All fields are required");
    }

    const existingItem = await Inventory.findOne({ itemName });

    if (existingItem) {
        existingItem.quantity += quantity;
        await existingItem.save();

        return res
            .status(200)
            .json(new ApiResponse(200, existingItem, "Item quantity updated"));
    }

    const newItem = await Inventory.create({
        itemName,
        category,
        threshold,
        quantity,
        unit,
    });

    if (!newItem) {
        throw new ApiError(500, "Something Went wrong");
    }

    return res
        .status(201)
        .json(new ApiResponse(201, newItem, "New item added successfully"));
});

// Update an inventory item
const updateInventoryItem = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { itemName, category, threshold, quantity, unit } = req.body;

    // Ensure fields are provided
    if (!itemName || !category || !threshold || !quantity || !unit) {
        throw new ApiError(400, "All fields are required");
    }

    // Validate quantity and threshold as numbers
    if (isNaN(quantity) || isNaN(threshold)) {
        throw new ApiError(400, "Quantity and Threshold must be valid numbers");
    }

    const updatedItem = await Inventory.findByIdAndUpdate(
        id,
        {
            itemName,
            category,
            threshold,
            quantity,
            unit,
        },
        {
            new: true,
        }
    );

    if (!updatedItem) {
        throw new ApiError(404, "Item not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, updatedItem, "Item updated successfully"));
});

// Delete an inventory item
const deleteInventoryItem = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const deletedItem = await Inventory.findByIdAndDelete(id);

    if (!deletedItem) {
        throw new ApiError(404, "Item not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, deletedItem, "Item deleted successfully"));
});

export {
    getAllInventory,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem,
    getCurrentItem,
};
