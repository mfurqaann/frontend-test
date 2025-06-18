const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTodos() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch todos');
  return await res.json();
}