# keyword-farmer
## Overview
If you use this, you are a farmer.

Build and harvest a farm with the crops you want.

We provide you with farm products (**static search keywords**)

## Installation:
___
```js
npm install keyword-farmer
```

## Example:
___
```js
inport { useKeywordFarm } from 'keyword-farmer';

const { create } =  useKeywordFarm();

create(); 
// output: 'sweater' | 'iphone 14 pro' | 'shirt' ...
```