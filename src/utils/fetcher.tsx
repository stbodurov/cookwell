export const apiUrl =
  "https://mocki.io/v1/7a7dc599-ebda-4f84-94a4-40a30209a3bc";

const fetcher = (
  ...args: [input: RequestInfo | URL, init?: RequestInit | undefined]
) => fetch(...args).then((res) => res.json());

export default fetcher;
