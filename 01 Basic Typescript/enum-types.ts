//  Enum/ Enumeration ==> store constants. duplicate value is not allowed here
// Enum Types: string, numeric, hetergenous/mixed

// numeric enum
// returns index from numeric enum 
enum RequestType {
    readData,
    deleteData,
    saveData
}
console.log(RequestType);
// string Enum
enum RequestType2{
    readData = "Read Data",
    deleteData= "Delete Data"

}

// heterogenous enumaration
enum RequestType3{
    readData = "Read Data",
    id=102
}