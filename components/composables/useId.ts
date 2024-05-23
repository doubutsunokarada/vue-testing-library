let internalId = 0;

function useId(): string {
  internalId += 1;
  return `:${internalId}:`;
}

export { useId };
