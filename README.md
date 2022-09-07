1- deploy and verify a contract on testnet/mainnet . If you cant verify it, then make sure to have the abi.
2- Do some trasanctions e.g 5-6 that emits the events you want subgraph to pick.
3- goto https://thegraph.com/hosted-service/dashboard   and make sure to connect wallet and github connected
4- Click "Add Subgraph" on top right
5- Fill in the details and click "Create Graph"
6- Make sure you have "graph-cli" installed globally, if not installed, then
Run $ npm install -g @graphprotocol/graph-cli
7- Create a new Directory and cd into that
8- Now run the INITIALIZE SUBGRAPH command showing on your dashboarad
like that, 
$ graph init --product hosted-service haris-nabeel/contract4
Now select network e.g ethereum in cmd
Give name
Change if you want
select network e.g rinkeby
Now give address of that deployed contract from step 1
Give contract name
Set false if not want to give another contract
9- Now cd into that repo that have been created 
10- Edit "schema.graphql" to add entities according to requirement
11- Edit "youcontract.sol" to handle the events
12- After making your changes, run $yarn codegen
13- Now run auth command from dashboard of your graph e.g
$ graph auth --product hosted-service 123214223123
14- Now run the deploy command from dashboard of your graph e.g 
$ graph deploy --product hosted-service haris-nabeel/contract4