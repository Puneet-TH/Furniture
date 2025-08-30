// API functions for user authentication (signup, login)
export async function signup(userData) {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/Register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
    // No credentials, as cookies are not used
  });
  return res.json();
}

export async function login(userData) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/Login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
      // No credentials, as cookies are not used
    });
    const data = await res.json();
    // Expecting { status: true/false, data: {...} } from backend
    if (!res.ok || !data.status) {
      throw new Error(data.message || 'Login failed.');
    }
    return data;
  } catch (err) {
    return { status: false, message: err.message };
  }
}
