/**
   * Loads and parses a JSON data file from the specified filename.
   *
   * Attempts to fetch the file and parse its contents as JSON, with a 10-second timeout.
   *
   * @param {string} filename - The path or URL of the JSON file to load.
   * @returns {Promise<any>} A Promise that resolves with the parsed JSON data.
   *
   * @throws {Error} If the fetch fails, the response is not OK, the JSON is invalid, or the operation times out after 10 seconds.
   */
  export function LoadDataFile(filename) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("Loading timed out after 10 seconds"));
      }, 10000); // 10 seconds
  
      fetch(filename)
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