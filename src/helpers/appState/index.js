export function setAppStateWithExpiry(key, value) {
  const now = new Date();
  const expiryTimestamp = now.getTime() + (5 * 60 * 1000);
  const item = {
    value: value,
    expiry: expiryTimestamp
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getAppStateWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export function setAppState(key, value) {
  const item = {
    value: value,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getAppState(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  return item.value;
}