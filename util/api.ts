const createUrl = (path: string) => {
  return window.location.origin + path;
};

export const createNewEntry = async (body = "") => {
  const res = await fetch(
    new Request(createUrl("/api/journal"), {
      method: "POST",
      body: JSON.stringify({ body }),
    })
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
