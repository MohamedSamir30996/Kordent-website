const CONTACT_EMAIL = "info@kordent.co.kr";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function submitContactForm(data: ContactFormPayload) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "—",
        message: data.message,
        _subject: "Kordent website contact form",
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  const result = (await response.json()) as { success?: string; message?: string };

  if (!response.ok || result.success !== "true") {
    throw new Error(result.message ?? "Contact form submission failed");
  }
}
