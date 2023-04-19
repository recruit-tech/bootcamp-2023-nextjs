export const ErrorMessage = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <p style={{ color: "#b00000" }}>{message}</p>;
};
