
/*
export const antibodiesData = [
  { "id": 1, "barcode": "0001", "name": "CD4", "synonym": "T4", "gene": "Cd4", "clone": "RM4-5", "sequence": "AACAAGACCCTTGAG", "type_id": 4, "type": { "id": 4, "name": "ADT", "category": "A" }, "reactivity": [{ "species": "Mouse", "pivot": { "antibody_id": 1, "reactivity_id": 2 } }] },
  { "id": 2, "barcode": "0002", "name": "CD8a", "synonym": "T8", "gene": "Cd8a", "clone": "53-6.7", "sequence": "TACCCGTAATAGCGT", "type_id": 4, "type": { "id": 4, "name": "ADT", "category": "A" }, "reactivity": [{ "species": "Mouse", "pivot": { "antibody_id": 2, "reactivity_id": 2 } }] },
  { "id": 3, "barcode": "0003", "name": "CD366", "synonym": "Tim-3", "gene": null, "clone": "RMT3-23", "sequence": "ATTGGCACTCAGATG", "type_id": 4, "type": { "id": 4, "name": "ADT", "category": "A" }, "reactivity": [{ "species": "Mouse", "pivot": { "antibody_id": 3, "reactivity_id": 2 } }] },
  { "id": 4, "barcode": "0004", "name": "CD279", "synonym": "PD-1", "gene": null, "clone": "RMP1-30", "sequence": "GAAAGTCAAAGCACT", "type_id": 4, "type": { "id": 4, "name": "ADT", "category": "A" }, "reactivity": [{ "species": "Mouse", "pivot": { "antibody_id": 4, "reactivity_id": 2 } }] },
  { "id": 5, "barcode": "0005", "name": "CD80", "synonym": "B7-1", "gene": "CD80", "clone": "2D10", "sequence": "ACGAATCAATCTGTG", "type_id": 4, "type": { "id": 4, "name": "ADT", "category": "A" }, "reactivity": [{ "species": "Human", "pivot": { "antibody_id": 5, "reactivity_id": 1 } }] }
]

function flattenObject(nestObj) {
  const flattendObj = {};
  const nestedObject = (obj, keyName) => {
    Object.keys(obj).forEach(key => {
      let newKey = keyName === '' ? key : `${keyName}_${key}`
      if (obj[key] !== null && typeof obj[key] === "object") {
        // calling the function again
        nestedObject(obj[key], newKey);
      } else if (key !== 'id' && !newKey.endsWith('_id')) {
        flattendObj[newKey] = obj[key];
      }
    });
  };
  nestedObject(nestObj, '');
  return flattendObj;
}

export const flattedData = antibodiesData.map(antibody => {
  return flattenObject(antibody)
})

console.log(flattedData)

*/

