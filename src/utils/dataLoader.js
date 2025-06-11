export function LoadDataFile(filename) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error("Loading timed out after 10 seconds"));
    }, 10000); // 10 seconds

    fetch(filename, { signal })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to load data file");
        }
        return res.json();
      })
      .then(data => {
        clearTimeout(timer);
        resolve(data);
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
      });
  });
}