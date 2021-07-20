export function quicksort(sequence) {
  if (sequence.length === 1) return sequence;

  const pivot = sequence[sequence.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < sequence.length - 1; i++) {
    sequence[i] < pivot
      ? leftArray.push(sequence[i])
      : rightArray.push(sequence[i]);
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...sortByField(leftArray), pivot, ...sortByField(rightArray)];
  } else if (leftArray.length > 0) {
    return [...sortByField(leftArray), pivot];
  } else {
    return [pivot, ...sortByField(rightArray)];
  }
}

// quicksort to sort any sequence by a specific field
export default function sortByField(sequence, field) {
  if (sequence.length === 1) return sequence;

  const pivot = sequence[sequence.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < sequence.length - 1; i++) {
    sequence[i][field] < pivot[field]
      ? leftArray.push(sequence[i])
      : rightArray.push(sequence[i]);
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...sortByField(leftArray, field), pivot, ...sortByField(rightArray, field)];
  } else if (leftArray.length > 0) {
    return [...sortByField(leftArray, field), pivot];
  } else {
    return [pivot, ...sortByField(rightArray, field)];
  }
}