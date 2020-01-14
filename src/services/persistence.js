/*
  persist memory across refreshes.

  name resolution is NOT baked in!,
  a unique address will be expected by the target.

  the following two URLS may store different sets of data.
     http://localhost:3000/
     http://127.0.0.1:3000/
*/
const store = window.localStorage;
const storeKey = "8675309";
const example = [
  {
    task: "get Baked in Garage",
    id: 1528817077420,
    completed: false
  },
  {
    task: "Organize Cookies",
    id: 1528817084420,
    completed: false
  }
];
const storeMemory = o => store.setItem(storeKey, JSON.stringify(o));
const loadMemory = () => JSON.parse(store.getItem(storeKey)) || example;

export { storeMemory, loadMemory };
