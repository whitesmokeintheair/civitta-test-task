export async function postJson<TReq, TRes>(
  url: string,
  payload: TReq
): Promise<TRes> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;

    try {
      const errorBody = await response.json();
      if (typeof errorBody === 'string') {
        message = errorBody;
      } else if (errorBody && typeof errorBody === 'object') {
        const maybeMessage = (errorBody as { message?: unknown }).message;
        if (typeof maybeMessage === 'string' && maybeMessage.trim()) {
          message = maybeMessage;
        }
      }
    } catch {
      const fallbackText = await response.text();
      if (fallbackText.trim()) {
        message = fallbackText;
      }
    }

    throw new Error(`POST ${url} failed (${response.status}): ${message}`);
  }

  return response.json() as Promise<TRes>;
}
