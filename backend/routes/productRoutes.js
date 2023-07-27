import express from "express";
const router =express.Router();
import {getProducts , getProductById, createProduct} from '../controllers/productController.js';
import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct); //GET all products

router.route('/:id').get(getProductById) ;// GET product by id  /:id

export default router;
