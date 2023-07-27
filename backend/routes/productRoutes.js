import express from "express";
const router =express.Router();
import {getProducts , getProductById, createProduct, updateProduct, deleteProduct} from '../controllers/productController.js';
import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct); //GET all products

router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct); // GET product by id  /:id


export default router;
