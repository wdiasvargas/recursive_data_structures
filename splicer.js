const splicer = (arr, start, deletCount, ...items) => [...arr.slice(0, start), ...items, ...arr.slice(start + deletCount)];
