export const types = [
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Fruit" },
    { _id: "5b21ca3eeb7f6fbccd471816", name: "Herb" },
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Vegetable" }
  ];
  
  export function getTypes() {
    return types.filter(t => t);
  }
