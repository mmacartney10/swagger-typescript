export interface Person {
  name: string;
  age: number;
  email: string;
  city: string;
  occupation: string;
}

export enum PeopleType {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export interface About {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  type: PeopleType;
}
