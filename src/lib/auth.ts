export type AuthUser = {
  id: string;
  nome: string;
  email: string;
  role: "admin" | "user";
};

type AuthState = {
  users: Array<AuthUser & { password: string }>;
  currentUserId: string | null;
};

const STORAGE_KEY = "app:auth";

function readState(): AuthState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seed: AuthState = {
      users: [
        {
          id: "u_admin",
          nome: "Admin",
          email: "admin@local",
          password: "admin",
          role: "admin",
        },
      ],
      currentUserId: null,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(raw) as AuthState;
}

function writeState(next: AuthState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function getCurrentUser(): AuthUser | null {
  const state = readState();
  if (!state.currentUserId) return null;
  const found = state.users.find((u) => u.id === state.currentUserId);
  if (!found) return null;
  const { password: _pw, ...safe } = found;
  return safe;
}

export function login(email: string, password: string): AuthUser {
  const state = readState();
  const found = state.users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
  );
  if (!found) {
    throw new Error("Credenciais inválidas");
  }
  const next: AuthState = { ...state, currentUserId: found.id };
  writeState(next);
  const { password: _pw, ...safe } = found;
  return safe;
}

export function logout() {
  const state = readState();
  writeState({ ...state, currentUserId: null });
}

export function register(input: {
  nome: string;
  email: string;
  password: string;
}): AuthUser {
  const state = readState();
  const email = input.email.trim().toLowerCase();
  if (state.users.some((u) => u.email.toLowerCase() === email)) {
    throw new Error("Este e-mail já está cadastrado");
  }
  const newUser: AuthUser & { password: string } = {
    id: `u_${Math.random().toString(16).slice(2)}`,
    nome: input.nome.trim(),
    email,
    password: input.password,
    role: "user",
  };
  const next: AuthState = {
    users: [newUser, ...state.users],
    currentUserId: newUser.id,
  };
  writeState(next);
  const { password: _pw, ...safe } = newUser;
  return safe;
}
