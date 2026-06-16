import {
  mockUsers,
  mockArtists,
  mockBookings,
  mockNotifications,
  mockWallet,
  mockCategories,
  mockServices,
  mockCoupons,
  mockReviews,
} from "./mockData";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseBody(data) {
  if (typeof data === "string") {
    try {
      return JSON.parse(data);
    } catch (_) {
      return {};
    }
  }
  return data || {};
}

function parseUrl(url) {
  const clean = url.replace(/^https?:\/\/[^/]+/, "");
  const [pathname, queryString] = clean.split("?");
  const params = {};
  if (queryString) {
    queryString.split("&").forEach((pair) => {
      const [k, v] = pair.split("=");
      params[decodeURIComponent(k)] = decodeURIComponent(v || "");
    });
  }
  return { pathname: pathname || "/", params };
}

function makeResponse(data, status = 200, statusText = "OK") {
  return { data, status, statusText, headers: {}, config: {} };
}

function makeErrorResponse(message, status = 404) {
  const err = new Error(message);
  err.response = {
    data: { message, status },
    status,
    statusText: "Not Found",
    headers: {},
    config: {},
  };
  return err;
}

function defineRoute(method, pattern, handler) {
  const regexStr = pattern.replace(/:(\w+)/g, "(?<$1>[^/]+)");
  const regex = new RegExp(`^${regexStr}$`);
  return { method, regex, handler };
}

const routes = [
  defineRoute("post", "/auth/login", (body) => {
    const user = mockUsers.find((u) => u.email === body.email);
    if (!user) {
      throw makeErrorResponse("Invalid email or password", 401);
    }
    return {
      accessToken: "mock-access-token-" + Date.now(),
      refreshToken: "mock-refresh-token-" + Date.now(),
      user: { ...user },
    };
  }),

  defineRoute("post", "/auth/register", (body) => {
    const newUser = {
      id: "user-" + Date.now(),
      name: body.name || "New User",
      email: body.email || "new@example.com",
      phone: body.phone || "",
      role: "user",
      avatar: "",
      createdAt: new Date().toISOString(),
    };
    return {
      accessToken: "mock-access-token-" + Date.now(),
      refreshToken: "mock-refresh-token-" + Date.now(),
      user: newUser,
    };
  }),

  defineRoute("post", "/auth/verify-otp", () => ({
    accessToken: "mock-access-token-" + Date.now(),
    refreshToken: "mock-refresh-token-" + Date.now(),
    user: { ...mockUsers[0] },
  })),

  defineRoute("post", "/auth/refresh-token", () => ({
    accessToken: "mock-refreshed-access-token-" + Date.now(),
    refreshToken: "mock-refreshed-refresh-token-" + Date.now(),
  })),

  defineRoute("post", "/auth/google", () => ({
    accessToken: "mock-access-token-" + Date.now(),
    refreshToken: "mock-refresh-token-" + Date.now(),
    user: { ...mockUsers[0] },
  })),

  defineRoute("post", "/auth/register-notification-token", () => ({ success: true })),
  defineRoute("post", "/auth/remove-notification-token", () => ({ success: true })),

  defineRoute("get", "/artists", () => mockArtists),

  defineRoute("get", "/artists/:id", (_body, params) => {
    const artist = mockArtists.find((a) => a.id === params.id);
    if (!artist) throw makeErrorResponse("Artist not found", 404);
    return artist;
  }),

  defineRoute("get", "/categories", () => mockCategories),

  defineRoute("get", "/services", (_body, _params, query) => {
    const { category, artistId } = query;
    let filtered = mockServices;
    if (category) filtered = filtered.filter((s) => s.category === category);
    if (artistId) filtered = filtered.filter((s) => s.artistId === artistId);
    return filtered;
  }),

  defineRoute("get", "/bookings", () => mockBookings),

  defineRoute("get", "/bookings/:id", (_body, params) => {
    const booking = mockBookings.find((b) => b.id === params.id);
    if (!booking) throw makeErrorResponse("Booking not found", 404);
    return booking;
  }),

  defineRoute("get", "/wallet", () => mockWallet),

  defineRoute("get", "/wallet/transactions", () => mockWallet.transactions),

  defineRoute("get", "/coupons", () => mockCoupons),

  defineRoute("get", "/reviews", () => mockReviews),

  defineRoute("get", "/notifications", (_body, _params, query) => {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const start = (page - 1) * limit;
    const items = mockNotifications.slice(start, start + limit);
    return {
      data: items,
      total: mockNotifications.length,
      page,
      limit,
      totalPages: Math.ceil(mockNotifications.length / limit),
    };
  }),

  defineRoute("post", "/auth/register-notification-token", () => ({ success: true })),
  defineRoute("post", "/notifications/read-all", () => ({ success: true })),
  defineRoute("post", "/notifications/:id/read", () => ({ success: true })),
  defineRoute("post", "/notifications/:id", () => ({ success: true })),
  defineRoute("post", "/notifications", () => ({ success: true })),

  defineRoute("post", "/support", () => ({
    success: true,
    message: "Support ticket created successfully",
  })),
  defineRoute("post", "/support/ticket", () => ({
    success: true,
    message: "Support ticket created successfully",
  })),

  defineRoute("get", "/portfolio", () => []),
  defineRoute("get", "/portfolio/:id", (_body, params) => {
    const artist = mockArtists.find((a) => a.id === params.id);
    if (!artist) throw makeErrorResponse("Artist not found", 404);
    return artist.portfolioImages;
  }),
  defineRoute("post", "/portfolio", () => ({ success: true })),
  defineRoute("delete", "/portfolio/:id", () => ({ success: true })),

  defineRoute("post", "/api/v1/mehndigo/user/send-otp", (body) => {
    if (!body.name || !body.phone || !body.role) {
      throw makeErrorResponse("name, phone, and role are required", 400);
    }
    if (!["USER", "ARTIST"].includes(body.role)) {
      throw makeErrorResponse("role must be USER or ARTIST", 400);
    }
    return {
      success: true,
      message: "OTP sent successfully",
      phone: body.phone,
    };
  }),

  defineRoute("post", "/api/v1/mehndigo/user/verify-otp", (body) => {
    if (!body.phone || !body.otp) {
      throw makeErrorResponse("phone and otp are required", 400);
    }
    if (body.otp !== "1234") {
      throw makeErrorResponse("Invalid OTP", 401);
    }
    const userIndex = mockUsers.findIndex((u) => u.phone === body.phone);
    if (userIndex >= 0) {
      const user = mockUsers[userIndex];
      return {
        token: "mock-jwt-token-" + Date.now(),
        user: { ...user },
      };
    }
    const inferredRole = body.phone.startsWith("9") ? "ARTIST" : "USER";
    const newUser = {
      id: "user-" + Date.now(),
      name: body.name || "New User",
      phone: body.phone,
      role: inferredRole,
      avatar: "",
      createdAt: new Date().toISOString(),
    };
    return {
      token: "mock-jwt-token-" + Date.now(),
      user: newUser,
    };
  }),

  defineRoute("get", "/leads", () => []),
  defineRoute("post", "/leads", (_body) => ({
    success: true,
    message: "Lead submitted successfully",
  })),
];

export function setupMockInterceptor(apiClient) {
  apiClient.defaults.adapter = async (config) => {
    const { pathname, params } = parseUrl(config.url || "");
    const method = (config.method || "get").toLowerCase();
    const body = parseBody(config.data);

    for (const route of routes) {
      if (route.method !== method) continue;
      const match = pathname.match(route.regex);
      if (!match) continue;

      await delay(300 + Math.random() * 500);

      try {
        const data = route.handler(body, match.groups || {}, params);
        return makeResponse(data);
      } catch (err) {
        if (err.response) {
          throw err;
        }
        throw makeErrorResponse(err.message, 500);
      }
    }

    throw makeErrorResponse(
      `Endpoint not mocked: ${method.toUpperCase()} ${pathname}`,
      404,
    );
  };
}
