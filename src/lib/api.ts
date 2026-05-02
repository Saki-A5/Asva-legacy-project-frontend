import { API_URL } from "@/lib/config";

function getCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
}

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = getCookie("refresh_token");
  if (!refreshToken) return null;

  try {
    const res = await fetch(`${API_URL}/api/auth/token/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    setCookie("access_token", data.access, 60 * 60 * 24 * 7);
    return data.access;
  } catch {
    return null;
  }
}

export async function authFetch(url: string, options: RequestInit = {}): Promise<Response> {
  let token = getCookie("access_token");

  const makeRequest = (accessToken: string | undefined) =>
    fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        ...options.headers,
      },
    });

  let res = await makeRequest(token);

  if (res.status === 401) {
    const newToken = await refreshAccessToken();

    if (!newToken) {
      document.cookie = "access_token=; path=/; max-age=0";
      document.cookie = "refresh_token=; path=/; max-age=0";
      window.location.href = "/login";
      return res;
    }

    res = await makeRequest(newToken);
  }

  return res;
}