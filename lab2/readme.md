crud
c-create/add
r-retrive/view
u-update/edit
d-delete/remove

fs-file system (node library which does not communicate with browser and only intrect diresctly with os)

## Major task of Fs module
-reading and writiing files
  -readfile()
  -writefile()
  -appendfile()
- directory managememt
 - mkdir()
 - rmdir()
 -readiir()
-metadata/ imformtaion
- start()
- lstat()
- fstat()
-watching for changes
 - watch()
 - wactchfile()
 - unwantendfile()
-Streming large file
 - createReadstream()
 - createwriteStream()
-file opreation
 - rename()
 - unlike()
 - link()
 - syslink()

## CRUD Operation
create/insert,read/retrieve,update,delete

## item
create cart- name, price,quantity,id

## operation
 1.add to cart
 2.show cart
 3.remove frome cart
 4.update quantity
 5.checkout
NOTE: all items will be stored in hdd, so after temination of program we can retrive cart details

 json- javascript object notation

## requirred files
 1.crud,js- it contains all the methods and entry point
 2.product.json- it conatin the product details in array form