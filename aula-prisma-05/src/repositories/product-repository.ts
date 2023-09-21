import { Product } from "@prisma/client";
import prisma from "../database/database";

export type CreateProduct = Omit<Product, "id" | "createAt">;

function getProducts() {
  return prisma.product.findMany();
}

function getProduct(id: number) {
  return prisma.product.findFirst({
    where: { id },
  });
}

async function createProduct(product: CreateProduct) {
  return prisma.product.create({
    data: product,
  });
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct,
};

export default productRepository;
