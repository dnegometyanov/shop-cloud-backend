# React-shop-cloudfront Backend

##Task 4 Done ( so far ):

For now only 4.1 is done - there are data fixtures to fill the tables and commands Makefile.

I'm gonna implements 4.2 and 4.3 as well the next day ( a bit after the deadline, sorry )

You can use the following Makefile commands to drop and create tables:

 - make TABLE_NAME=products drop-table
 - make TABLE_NAME=stocks drop-table


 - make TABLE_NAME=products create-table
 - make TABLE_NAME=stocks create-table


 - make TABLE_NAME=products batch-write-table
 - make TABLE_NAME=stocks batch-write-table

##Task 3 Done ( so far ):
### The backend only part

    - both handlers for getProductsList and getProductsById 

    - serverless config for them

    - separated to 2 files

### TODO: Some required staff like FE integration / more code structuring and unit tests

#Links
Products List: https://gxyv76gujc.execute-api.us-east-1.amazonaws.com/dev/product

Get Products By Id: https://gxyv76gujc.execute-api.us-east-1.amazonaws.com/dev/product/7567ec4b-b10c-48c5-9345-fc73c48a80a3

Product not found (404): https://gxyv76gujc.execute-api.us-east-1.amazonaws.com/dev/product/some-fake-id
