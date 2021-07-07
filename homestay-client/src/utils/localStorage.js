export const setItem = (key, value) => {
  if (!value) {
    return null;
  } else {
    window.localStorage.setItem(key, value);
    return window.localStorage.getItem(key);
  }
};
export const getItem = (key) => {
  return window.localStorage.getItem(key);
};

export const removeItem = (key) => {
  if (window.localStorage.getItem(key)) {
    window.localStorage.removeItem(key);
  }
};
