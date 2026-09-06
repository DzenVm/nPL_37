export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  goal: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactPayload, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(input: Record<string, unknown>): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const goal = typeof input.goal === "string" ? input.goal.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (name.length < 2 || name.length > 120) {
    errors.name = "Podaj imię (2–120 znaków).";
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    errors.email = "Podaj poprawny adres e-mail.";
  }
  if (goal.length < 2 || goal.length > 200) {
    errors.goal = "Zaznacz albo opisz swój cel nauki.";
  }
  if (message.length > 2000) {
    errors.message = "Wiadomość jest zbyt długa.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
