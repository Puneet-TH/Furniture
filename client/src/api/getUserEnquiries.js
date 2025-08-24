// API function to get user enquiries
export async function getUserEnquiries(userId) {
  const res = await fetch(`${import.meta.env.VITE_ENQUIRY_API}/getEnquiries/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include"
  });
  return res.json();
}
