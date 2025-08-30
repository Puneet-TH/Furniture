// API functions for user authentication (signup, login)
export async function signup(userData) {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/Register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
    credentials: "include"
  });
  return res.json();
}

export async function login(userData) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/Login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      credentials: "include"
    });
    const data = await res.json();
    if (!res.ok) {
      // Attach status and message for better error handling
      throw new Error(data.message || 'Login failed.');
    }
    return data;
  } catch (err) {
    // Return a consistent error object
    return { success: false, message: err.message };
  }
}
