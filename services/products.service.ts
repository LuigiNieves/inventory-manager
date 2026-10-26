import type { Product } from "@/types/product";
import {apiGet} from "@/lib/api-client";

export async function getProducts(): Promise<Product[]> {
  return await apiGet("/products");
}