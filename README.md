# A simple library for sorting an array of objects by a specified field.

# Installation

`npm install sort-by-field`

# Import

To import the main function:

`import sortByField from "sort-by-field";`

Other miscellaneous function:
`import { quicksort } from "sort-by-field";`


# Calling the function

To call sortByField, 2 arguments are required, the array to be sorted and the field to be sorted by.

```
const sequence = [
    {
        value: 5
    },
    {
        value: 2
    },
    {
        value: 6
    },
    {
        value: 7
    }
];

sequence = sortByField(sequence, "value");
console.log(sequence);
```

