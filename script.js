/// Taking data
let CITY = document.getElementsByClassName(CITY)
let HOUSE_NUMBER = document.getElementsByClassName(HOUSE_NUMBER)
let MOBILE_NUMBER = document.getElementsByClassName(MOBILE_NUMBER)
let EMAIL = document.getElementsByClassName(EMAIL)
let NAME = document.getElementsByClassName(NAME)
let PINCODE = document.getElementsByClassName(PINCODE)
let PRINT= document.getElementsByClassName(PRINT)
/// Saving data and exporting it 
 let a  =importScriptsURL("http://127.0.0.1:5500/index(1).html")
  a= exportEMAIL("daksh7805582@gmail.com")
/// for button Print
function Print(){
     print("PRINTED")
     alert("Thanku for your support")
     document.writeln("The document was printed")
     }
/// for save button
function Save(){
    // Save("Saved")
   alert("Thanku for your support")
    document.writeln("The document was saved") 
}
