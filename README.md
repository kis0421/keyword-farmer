# keyword-farmer
## Overview
If you use this, you are a farmer.  
Build and harvest a farm with the crops you want.  
We provide you with farm products (**static search keywords**)

## Installation
```js
npm install keyword-farmer
```

## Example
```ts
inport { useKeywordFarm } from 'keyword-farmer';

const { create } =  useKeywordFarm();

create(); 
// output: 'sweater' | 'iphone 14 pro' | 'shirt' ...
```


## Options
```ts
interface useKeywordFarmInterface {
  lang?: 'en' | 'kr'
  length?: number | { min?: number, max?: number }
  excludeSpaces?: boolean
  specialKeywords?: 'only' | 'mixed' | 'combine'
}
```
- **`lang`** -  This is the language of keywords. Currently supports **`en`** **`kr`**, default is **`en`**
- **`length`** -   Limit the length of keywords to be handled.
- **`excludeSpaces`** -   Whether to exclude spaces in words. The default is **`true`** (inclusive).
- **`specialKeywords`** 
  <br/> This is an option to handle special characters (mutations). Special characters are Unicode special characters.
  - **`only`** - The keyword list consists only of `specialKeywords`. Also other options are ignored
  - **`mixed`** - Consists of general `keywords` and `specialKeywords`
  - **`combine`** - `keyword` characters contain `specialKeywords` combined in random positions.
