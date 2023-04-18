const tickets = {
    'Paris-Skopje': ['Paris', 'Skopje'],
    'Zurich-Amsterdam': ['Zurich', 'Amsterdam'],
    'Prague-Zurich': ['Prague', 'Zurich'],
    'Barcelona-Berlin': ['Barcelona', 'Berlin'],
    'Kiev-Prague': ['Kiev', 'Prague'],
    'Skopje-Paris': ['Skopje', 'Paris'],
    'Amsterdam-Barcelona': ['Amsterdam', 'Barcelona'],
    'Berlin-Kiev': ['Berlin', 'Kiev'],
    'Berlin-Amsterdam': ['Berlin', 'Amsterdam'],
  };
  
  function bfs(startCity, endCity) {
    const visited = new Set();
    const queue = [[startCity, [startCity]]];
  
    while (queue.length > 0) {
      const [currentCity, path] = queue.shift();
  
      if (currentCity === endCity) {
        return path;
      }
  
      visited.add(currentCity);
  
      for (const [ticket, [from, to]] of Object.entries(tickets)) {
        if (from === currentCity && !visited.has(to)) {
          queue.push([to, [...path, to]]);
        }
      }
    }
  
    return null;
  }
  
  const route = bfs('Kiev', 'Berlin');
  
  console.log(route); // ["Kiev", "Prague", "Zurich", "Amsterdam", "Barcelona"]