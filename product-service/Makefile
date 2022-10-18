## drops data from database tables and creates from fixtures
## use with params like
## make TABLE_NAME=products drop-table
## make TABLE_NAME=stocks drop-table
drop-table:
	@aws dynamodb delete-table --cli-input-json file://./fixtures/$(TABLE_NAME)DeleteTableFixture.json

## drops data from database tables and creates from fixtures
## use with params like
## make TABLE_NAME=products create-table
## make TABLE_NAME=stocks create-table
create-table:
	@aws dynamodb create-table --cli-input-json file://./fixtures/$(TABLE_NAME)CreateTableFixture.json

## drops data from database tables and creates from fixtures
## use with params like
## make TABLE_NAME=products batch-write-table
## make TABLE_NAME=stocks batch-write-table
batch-write-table:
	@aws dynamodb batch-write-item --request-items file://./fixtures/$(TABLE_NAME)BatchWriteFixture.json
