// import { useQuery } from "@tanstack/react-query";
// import { apiClient } from "~/services/api-service";

export interface About {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  description: string;
}

export const useGetAbout = () => {
  const dummyAbout: About = {
    companyName: "Tech Solutions Inc.",
    address: "1234 Innovation Drive, Tech City, TX 75001",
    phone: "(123) 456-7890",
    email: "info@techsolutions.com",
    description: "Leading provider of innovative tech solutions.",
  };
  return dummyAbout;

  //   return useQuery<PeopleListData>({
  //   queryKey: ["people"],
  //   queryFn: async () => {
  //   },
  // });
};
