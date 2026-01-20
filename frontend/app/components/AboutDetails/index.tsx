interface About {
  companyName: string;
  address: string;
  phone: string;
  email: string;
  description: string;
}

const dummyAbout: About = {
  companyName: "Tech Solutions Inc.",
  address: "1234 Innovation Drive, Tech City, TX 75001",
  phone: "(123) 456-7890",
  email: "info@techsolutions.com",
  description: "Leading provider of innovative tech solutions.",
};

export const AboutDetails = () => {
  return (
    <div className="container mx-auto px-8 py-8 bg-gray-100 min-h-screen">
      <p className="mb-2">
        <strong>Company Name:</strong> {dummyAbout.companyName}
      </p>
      <p className="mb-2">
        <strong>Address:</strong> {dummyAbout.address}
      </p>
      <p className="mb-2">
        <strong>Phone:</strong> {dummyAbout.phone}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {dummyAbout.email}
      </p>
      <p className="mb-2">
        <strong>Description:</strong> {dummyAbout.description}
      </p>
    </div>
  );
};
