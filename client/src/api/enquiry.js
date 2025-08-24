// API function for submitting an enquiry
export async function submitEnquiry(enquiryData) {
  const res = await fetch(`${import.meta.env.VITE_ENQUIRY_API}/createEnquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enquiryData),
    credentials: "include"
  });
  return res.json();
}
