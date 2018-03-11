export function isLoading(type, bool) {
  return {
    type: type,
    isLoading: bool
  };
}