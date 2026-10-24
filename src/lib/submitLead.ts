export async function submitLead(data: Record<string, string>): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT;
  if (!endpoint) {
    // No backend configured – silently succeed so the site works standalone
    return;
  }
  await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
