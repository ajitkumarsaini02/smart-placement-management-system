export const safeCall = async (fn, fallback) => {
  try {
    const res = await fn();
    return res.data;
  } catch {
    return typeof fallback === 'function' ? fallback() : fallback;
  }
};
export default safeCall;
