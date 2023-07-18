import express from "express";
const router =express.Router();
import {getProducts , getProductById} from '../controllers/productController.js';

router.route('/').get(getProducts); //GET all products

router.route('/:id').get(getProductById) ;// GET product by id  /:id

export default router;
