const slicer = (items, start, end) => (typeof items[0] !== 'object') ? items.slice(start, end) : items.map(item => slicer(item, start, end))
