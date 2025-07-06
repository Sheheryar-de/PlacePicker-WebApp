export async function fetchAvailablePlaces() {
  const response = await fetch(
    "https://place-picker-web-app.vercel.app/places"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch(
    "https://place-picker-web-app.vercel.app/user-places"
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch(
    "https://place-picker-web-app.vercel.app/user-places",
    {
      method: "PUT",
      body: JSON.stringify({ places }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}
