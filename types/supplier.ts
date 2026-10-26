
export interface Supplier {
  id: string;
  name: string;
  documentNumber: string;
  email: string;
  phone: string;
  address: string;
  status: "active" | "inactive";
}
