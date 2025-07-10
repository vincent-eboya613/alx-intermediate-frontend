/// <reference path="./crud.js" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row
const row: RowElement = {
    firstName: 'John',
    lastName: 'Doe'
}

// insert the row
const newRowID: RowID = CRUD.insertRow(row);

// Update row with age
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
