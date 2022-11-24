const arr = [
  { gender: 'male', name: 'john' },
  { gender: 'female', name: 'sarah' },
  { gender: 'male', name: 'steve' },
];

const filtered = arr.filter(item => {
  if (item.gender === 'female') {
    return item;
  }
});
console.log('결과', filtered);
