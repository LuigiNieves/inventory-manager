const API_URL = process.env.JSON_SERVER_URL ?? "http://localhost:3001";



export async function apiGet(path: string) {
  const response = await fetch(`${API_URL}${path}`, {
    cache: "no-store"
  })  ;
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}