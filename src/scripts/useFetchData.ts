export async function fetchData<T>(endpoint: string): Promise<T> {
  const result = await fetch(`http://localhost:4000/${endpoint}`);
  return result.json();
}
