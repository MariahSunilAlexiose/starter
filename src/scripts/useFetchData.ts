export async function fetchData<T>(endpoint: string): Promise<T> {
  const result = await fetch(`/api/${endpoint}`)
  return result.json()
}
