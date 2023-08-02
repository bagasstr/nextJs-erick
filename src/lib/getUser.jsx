export default async function getUser() {
  const res = await fetch("http://localhost:3000/api/getData");
  if (!res.ok) {
    throw new Error("failed fetch");
  }
  return await res.json();
}
