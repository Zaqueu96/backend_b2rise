type Client = { id: number, name: string }
type ClientFull = { id: number, fullName: string }

const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const data2 = [
    { id: 12, fullName: 'Alice Gonzales S' },
    { id: 21, fullName: 'Bob carlos chaves' }
];


function extractOnlyField<T>(data: Array<T>, field: string) {
    return data
        .map(item => item[field])
        .filter(item => item);
}

const resultFields = extractOnlyField<ClientFull>(data2, 'id');
console.log(resultFields); 