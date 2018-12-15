import { SearchPageObject } from "../pages/searchPage";
// import * as  data from "./data/sample.json";
import { TableDefinition } from "cucumber";
import { AssertionError } from "assert";
import json from "load-json-file";
import { expect,assert } from "chai";
const { Then } = require("cucumber");


const search: SearchPageObject = new SearchPageObject();

Then(/^I clear the search text$/, async (table : TableDefinition) => {
    table.rows().forEach(element => {
        console.log(element)
    });

    json("./data/sample.json").then((x)=> {
        console.log("Reading data from Json "  + (<any>x).Name) 
    })

    let localtable = [
        ['Nalli', '29'],
        ['Lucky', '25']
    ]
    assert.deepEqual(localtable,table.rows(),"Datasource is not matching")
     await search.searchTextBox.clear();
});
