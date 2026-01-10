export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async () => {
  await new Promise((res) => setTimeout(res, 2000));
};
