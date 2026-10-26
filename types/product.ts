export type ProductStatus = "active" | "inactive";

export type Product = {
  id: string;
  sku: string;
  name: string;
  description: string;
  categoryId: string;
  supplierId: string;
  costPrice: number;
  salePrice: number;
  stock: number;
  minStock: number;
  status: ProductStatus;
  imageUrl: string;

};

export type CreateProductInput = Omit<Product, "id" | "status">;