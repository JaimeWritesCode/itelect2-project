export async function fetchSampleUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    return data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  } catch (err) {
    console.log("Failed to fetch users:", err);
    return []; 
  } finally {
    console.log("Finished loading.");
  }
}

export function fetchSampleUsersPromise() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) =>
      data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }))
    )
    .catch((err) => {
      console.log("Error in fetchSampleUsersPromise:", err);
      return [];
    });
}