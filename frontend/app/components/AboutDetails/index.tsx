import { useGetAbout } from "~/hooks/useGetAbout";

export const AboutDetails = () => {
  const about = useGetAbout();
  return (
    <div className="container mx-auto px-8 py-8 bg-gray-100 min-h-screen">
      <p className="mb-2">
        <strong>Company Name:</strong> {about.companyName}
      </p>
      <p className="mb-2">
        <strong>Address:</strong> {about.address}
      </p>
      <p className="mb-2">
        <strong>Phone:</strong> {about.phone}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {about.email}
      </p>
      <p className="mb-2">
        <strong>Description:</strong> {about.description}
      </p>
    </div>
  );
};
