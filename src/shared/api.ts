const baseUrl = "http://localhost:3000/";

export const appFetch = async (
  url: string,
  options: RequestInit & { json?: Record<string, unknown> } = {},
) => {
  // const token = (await cookies()).get("payload-token")?.value;

  const response = await fetch(`${baseUrl}${url}`, {
    headers: {
      "Content-Type": "application/json",
      // ...(token && { Authorization: `JWT ${token}` }),
      ...options.headers,
    },
    ...options,
    ...(options.json && {
      body: JSON.stringify(options.json),
      method: "POST",
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
