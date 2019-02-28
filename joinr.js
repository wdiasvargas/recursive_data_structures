const joinr = ([head, ...tail], separator = ',') => (head === undefined && !tail.length) 
    ? '' 
    : tail.length 
        ? head + separator + joinr(tail, separator) 
        : head
