export interface Product {
  name: string;
}

export const getProduct = (): Product => ({
  name: 'Name There again',
});
