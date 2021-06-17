# API Reference
## initLogger(config: LogOptions)

Initializes the logging system.

### LogOptions

| Param         | Type                     | Default                | Description                             |
| ------------- | ------------------------ | ---------------------- | --------------------------------------- |
| color_enabled | <code>boolean</code>     | <code>undefined</code> | Whether to enable colored output or not |
| outputs       | <code>LogOutput[]</code> | <code>undefined</code> | The log outputs                         |

### LogOutput

| Param          | Type                  | Default                | Description                                          |
| -------------- | --------------------- | ---------------------- | ---------------------------------------------------- |
| name           | <code>string</code>   | <code>undefined</code> | 'stdout' or a path to a file                         |
| level_filter   | <code>string</code>   | <code>'info'</code>    | The maximum log level that this output accepts       |
| target_filters | <code>string[]</code> | <code>[]</code>        | Filters on the log target (library and module names) |

## addEventListener(event, cb)

Adds a new event listener with a callback in the form of `(err, data) => {}`.

Supported event names:
- ErrorThrown
- BalanceChange
- NewTransaction
- ConfirmationStateChange
- Reattachment
- Broadcast
- TransferProgress
- MigrationProgress

## AccountManager

### constructor([ManagerOptions])

Creates a new instance of the AccountManager.

| Param                              | Type                 | Default                | Description                                                                               |
| ---------------------------------- | -------------------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| [ManagerOptions](#manageroptions)  | <code>object</code>  | <code>undefined</code> | The options to configure the account manager                                              |

#### ManagerOptions 
You can use any of the following parameters when constructing the ManagerOptions. All the parameters are optional.   

| Param                            | Type                 | Default                | Description                                                                               |
| -------------------------------- | -------------------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| storagePath                      | <code>string</code>  | <code>undefined</code> | The path where the database file will be saved                                            |
| storagePassword                  | <code>string</code>  | <code>undefined</code> | The storage password                                                                      |
| outputConsolidationThreshold     | <code>number</code>  | <code>100</code>       | The number of outputs an address must have to trigger the automatic consolidation process |
| automaticOutputConsolidation     | <code>boolean</code> | <code>true</code>      | Disables the automatic output consolidation if false                                      |
| syncSpentOutputs                 | <code>boolean</code> | <code>false</code>     | Enables fetching spent output history on account sync                                     |
| persistEvents                    | <code>boolean</code> | <code>false</code>     | Enables event persistence                                                                 |
| allowCreateMultipleEmptyAccounts | <code>boolean</code> | <code>false</code>     | Enables creating accounts with latest account being empty                                 |
| skipPolling                      | <code>boolean</code> | <code>false</code>     | Enables creating accounts without automatic polling (background syncing)                  |
| pollingInterval                  | <code>number</code>  | <code>30</code>        | Sets the polling interval in seconds                                                      |

### setStrongholdPassword(password): void

Sets the Stronghold password and initialises it.

| Param    | Type                | Default                | Description                      |
| -------- | ------------------- | ---------------------- | -------------------------------- |
| password | <code>string</code> | <code>undefined</code> | The Stronghold snapshot password |

### changeStrongholdPassword(currentPassword, newPassword): void

Changes the Stronghold password.

| Param           | Type                | Default                | Description                     |
| --------------- | ------------------- | ---------------------- | ------------------------------- |
| currentPassword | <code>string</code> | <code>undefined</code> | The current Stronghold password |
| newPassword     | <code>string</code> | <code>undefined</code> | The new Stronghold password     |

### createAccount(account): Account

Creates a new account.

| Param                 | Type                                         | Default                           | Description                                              |
| --------------------- | -------------------------------------------- | --------------------------------- | -------------------------------------------------------- |
| account               | <code>object</code>                          | <code>{}</code>                   | The account to be created                                |
| account.clientOptions | <code>[ClientOptions](#clientoptions)</code> | <code>undefined</code>            | The node configuration                                   |
| [account.mnemonic]    | <code>string</code>                          | <code>undefined</code>            | The account BIP39 mnemonic                               |
| [account.alias]       | <code>string</code>                          | <code>Account ${index + 1}</code> | The account alias                                        |
| [account.createdAt]   | <code>string</code>                          | the current date and time         | The ISO 8601 date string of the account creation         |
| [account.signerType]  | <code>number</code>                          | 1 = Stronghold                    | The account signer type. 1 = Stronghold, 2 = EnvMnemonic |

### getAccount(accountId)

Gets the account with the given identifier or index.

| Param     | Type                          | Default           | Description                             |
| --------- | ----------------------------- | ----------------- | --------------------------------------- |
| accountId | <code>string \| number</code> | <code>null</code> | The account identifier or account index |

Returns the associated Account instance or undefined if the account wasn't found.

### getAccountByAlias(alias)

Gets the account with the given alias (case-insensitive).

| Param | Type                | Default           | Description       |
| ----- | ------------------- | ----------------- | ----------------- |
| alias | <code>string</code> | <code>null</code> | The account alias |

Returns the associated Account instance or undefined if the account wasn't found.

### getAccounts()

Gets all stored accounts.

Returns an array of [Account objects](#account).

### removeAccount(accountId)

Removes the account with the given identifier or index.

| Param     | Type                          | Default           | Description                             |
| --------- | ----------------------------- | ----------------- | --------------------------------------- |
| accountId | <code>string \| number</code> | <code>null</code> | The account identifier or account index |


### startBackgroundSync(pollingInterval, automaticOutputConsolidation): Promise<void/>

Starts the background polling and MQTT monitoring.

| Param                        | Type                 | Default           | Description                                      |
| ---------------------------- | -------------------- | ----------------- | ------------------------------------------------ |
| pollingInterval              | <code>number</code>  | <code>null</code> | The polling interval in seconds                  |
| automaticOutputConsolidation | <code>boolean</code> | <code>null</code> | If outputs should get consolidated automatically |

### stop_background_sync(): void

Stops the background polling and MQTT monitoring.

### syncAccounts([options])

Synchronize all stored accounts with the Tangle.

| Param                  | Type                | Default                           | Description                                           |
| ---------------------- | ------------------- | --------------------------------- | ----------------------------------------------------- |
| [options]              | <code>object</code> | <code>{}</code>                   | The sync options                                      |
| [options.addressIndex] | <code>number</code> | <code>latest address index</code> | The index of the first account address to sync        |
| [options.gapLimit]     | <code>number</code> | <code>10</code>                   | The number of addresses to check on each account sync |

Returns A promise resolving to an array of [SyncedAccount](#syncedaccount).

### internalTransfer(fromAccount, toAccount, amount)

Transfers an amount from one sub-account to another.

| Param       | Type                             | Default                | Description             |
| ----------- | -------------------------------- | ---------------------- | ----------------------- |
| fromAccount | <code>[Account](#account)</code> | <code>null</code>      | The source account      |
| toAccount   | <code>[Account](#account)</code> | <code>null</code>      | The destination account |
| amount      | <code>number</code>              | <code>undefined</code> | The transfer amount     |

Returns A promise resolving to the transfer's Message.

### backup(destination, password)

Backups the database.

| Param       | Type                | Default                | Description                    |
| ----------- | ------------------- | ---------------------- | ------------------------------ |
| destination | <code>string</code> | <code>undefined</code> | The path to the backup file    |
| password    | <code>string</code> | <code>undefined</code> | The backup Stronghold password |

Returns The full path to the backup file.

### importAccounts(source)

Imports a database file.

| Param    | Type                | Default                | Description                    |
| -------- | ------------------- | ---------------------- | ------------------------------ |
| source   | <code>string</code> | <code>undefined</code> | The path to the backup file    |
| password | <code>string</code> | <code>undefined</code> | The backup Stronghold password |

### isLatestAddressUnused()

Determines whether all accounts have unused their latest address after syncing with the Tangle.

Returns a promise resolving to the boolean value.

### setClientOptions(options)

Updates the client options for all accounts.

| Param   | Type                                         | Default           | Description                    |
| ------- | -------------------------------------------- | ----------------- | ------------------------------ |
| options | <code>[ClientOptions](#clientoptions)</code> | <code>null</code> | The new account client options |

### generateMigrationAddress(address)

Convert a Ed25519 to a Tryte migration address with checksum (last 9 Trytes)

| Param   | Type                | Default           | Description                    |
| ------- | ------------------- | ----------------- | ------------------------------ |
| address | <code>string</code> | <code>null</code> | Bech32 encoded Ed25519 address |

### getBalanceChangeEvents([count, skip, fromTimestamp])

Gets the persisted balance change events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [count]         | <code>number</code> | <code>0</code>    | The number of events to return (`0` to return all)           |
| [skip]          | <code>number</code> | <code>0</code>    | The number of events to skip                                 |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

Event object: { indexationId: string, accountId: string, messageId?: string, remainder?: boolean, balanceChange: { spent: number, received: number } }

### getBalanceChangeEventCount([fromTimestamp])

Gets the number of persisted balance change events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

### getTransactionConfirmationEvents([count, skip, fromTimestamp])

Gets the persisted transaction confirmation change events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [count]         | <code>number</code> | <code>0</code>    | The number of events to return (`0` to return all)           |
| [skip]          | <code>number</code> | <code>0</code>    | The number of events to skip                                 |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

Event object: { indexationId: string, accountId: string, message: Message, confirmed: boolean }

### getTransactionConfirmationEventCount([fromTimestamp])

Gets the number of persisted transaction confirmation change events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

### getNewTransactionEvents([count, skip, fromTimestamp])

Gets the persisted new transaction events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [count]         | <code>number</code> | <code>0</code>    | The number of events to return (`0` to return all)           |
| [skip]          | <code>number</code> | <code>0</code>    | The number of events to skip                                 |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

Event object: { indexationId: string, accountId: string, message: Message }

### getNewTransactionEventCount([fromTimestamp])

Gets the number of persisted new transaction events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

### getReattachmentEvents([count, skip, fromTimestamp])

Gets the persisted transaction reattachment events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [count]         | <code>number</code> | <code>0</code>    | The number of events to return (`0` to return all)           |
| [skip]          | <code>number</code> | <code>0</code>    | The number of events to skip                                 |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

Event object: { indexationId: string, accountId: string, message: Message }

### getReattachmentEventCount([fromTimestamp])

Gets the number of persisted transaction reattachment events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

### getBroadcastEvents([count, skip, fromTimestamp])

Gets the persisted transaction broadcast events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [count]         | <code>number</code> | <code>0</code>    | The number of events to return (`0` to return all)           |
| [skip]          | <code>number</code> | <code>0</code>    | The number of events to skip                                 |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

Event object: { indexationId: string, accountId: string, message: Message }

### getBroadcastEventCount([fromTimestamp])

Gets the number of persisted transaction broadcast events.

| Param           | Type                | Default           | Description                                                  |
| --------------- | ------------------- | ----------------- | ------------------------------------------------------------ |
| [fromTimestamp] | <code>number</code> | <code>null</code> | Filter events that were stored after the given UTC timestamp |

## SyncedAccount

The result of a  _sync_  operation on an Account.

## Account

### id()

Returns: the account's identifier.

### index()

Returns: the account's index.

### alias()

Returns: the account's alias.

### balance(): AccountBalance

Returns: the account's balance information object.

Balance object: { total: number, available: number, incoming: number, outgoing: number }

### messageCount([type])

Returns: the number of messages associated with the account.

| Param  | Type                | Default           | Description                                                                              |
| ------ | ------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| [type] | <code>number</code> | <code>null</code> | The message type filter (Received = 1, Sent = 2, Failed = 3, Unconfirmed = 4, Value = 5) |

### listMessages([count, from, type])

Returns: the account's messages.

| Param   | Type                | Default           | Description                                                                              |
| ------- | ------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| [count] | <code>number</code> | <code>0</code>    | The number of messages to return (`0` to return all)                                     |
| [skip]  | <code>number</code> | <code>0</code>    | The number of messages to skip                                                           |
| [type]  | <code>number</code> | <code>null</code> | The message type filter (Received = 1, Sent = 2, Failed = 3, Unconfirmed = 4, Value = 5) |

Message object: { confirmed: boolean, broadcasted: boolean, incoming: boolean, value: number }

### listAddresses([unspent])
Returns: the account's addresses.

| Param     | Type                 | Default           | Description                 |
| --------- | -------------------- | ----------------- | --------------------------- |
| [unspent] | <code>boolean</code> | <code>null</code> | The unspent status filter |

Address object: { address: string, keyIndex: number }

### sync([options])

Synchronizes the account with the Tangle.

| Param                  | Type                | Default                           | Description                            |
| ---------------------- | ------------------- | --------------------------------- | -------------------------------------- |
| [options]              | <code>object</code> | <code>{}</code>                   | The sync options                       |
| [options.addressIndex] | <code>number</code> | <code>latest address index</code> | The index of the first address to sync |
| [options.gapLimit]     | <code>number</code> | <code>10</code>                   | The number of addresses to check       |

Returns: a [SyncedAccount](#syncedaccount) instance.

### send(address, amount[, options])

Send funds to the given address.

| Param   | Type                         | Default                | Description                               |
| ------- | ---------------------------- | ---------------------- | ----------------------------------------- |
| address | <code>string</code>          | <code>null</code>      | The bech32 string of the transfer address |
| amount  | <code>number</code>          | <code>undefined</code> | The transfer amount                       |
| options | <code>TransferOptions</code> | <code>undefined</code> | The transfer options                      |

#### TransferOptions

| Param                  | Type                                              | Default           | Description                                        |
| ---------------------- | ------------------------------------------------- | ----------------- | -------------------------------------------------- |
| remainderValueStrategy | <code>RemainderValueStrategy</code>               | <code>null</code> | The strategy to use for the remainder value if any |
| indexation             | <code>{ index: string, data?: Uint8Array }</code> | <code>null</code> | Message indexation                                 |

#### RemainderValueStrategy

##### changeAddress()
Send the remainder value to an internal address.

###### reuseAddress()
Send the remainder value to its original address.

###### accountAddress(address: string)
Send the remainder value to a specific address that must belong to the account.

### getNodeInfo([url, auth]): NodeInfoWrapper

Gets information about the node.

| Param   | Type                      | Default                                        | Description                    |
| ------- | ------------------------- | ---------------------------------------------- | --------------------- |
| url     | <code>string</code>       |<code>Node from client options</code>           | The node url          |
| auth    | <code>Auth</code>         | <code>undefined</code>                         | The node auth options |

Returns: the [NodeInfoWrapper](#nodeinfowrapper)

#### NodeInfoWrapper

| Param                  | Type                                              | Default                               | Description    |
| ---------------------- | ------------------------------------------------- | ------------------------------------- | -------------- |
| url                    | <code>string</code>                               | <code>Node from client options</code> | The node url   |
| nodeinfo               | [NodeInfo](#nodeinfo)                             | <code>null</code>                     | The node info  |

##### NodeInfo
| Param                           | Type                              | Default              | Description                                        |
| ------------------------------- | --------------------------------- | -------------------- | -------------------------------------------------- |
| [name]                          | <code>string</code>               | <code>null</code>    |                                                    |
| [version]                       | <code>string</code>               | <code>null</code>    |                                                    |
| [isHealthy]                     | <code>boolean</code>              | <code>null</code>    |                                                    |
| [networkId]                     | <code>number</code>               | <code>null</code>    |                                                    |
| [bech32HRP]                     | <code>string</code>               | <code>null</code>    |                                                    |
| [minPoWScore]                   | <code>number</code>               | <code>null</code>    |                                                    |
| [messagesPerSecond]             | <code>number</code>               | <code>null</code>    |                                                    |
| [referencedMessagesPerSecond]   | <code>number</code>               | <code>null</code>    |                                                    |
| [referencedRate]                | <code>number</code>               | <code>null</code>    |                                                    |            
| [latestMilestoneTimestamp]      | <code>number</code>               | <code>null</code>    |                                                    |            
| [latestMilestoneIndex]          | <code>number</code>               | <code>null</code>    |                                                    |            
| [confirmedMilestoneIndex]       | <code>number</code>               | <code>null</code>    |                                                    |            
| [pruningIndex]                  | <code>number</code>               | <code>null</code>    |                                                    |            
| [features]                      | <code>string[]</code>             | <code>null</code>    |                                                    |

### retry(messageId)

Retries (promotes or reattaches) the given message.

| Param     | Type                | Default           | Description              |
| --------- | ------------------- | ----------------- | ------------------------ |
| messageId | <code>string</code> | <code>null</code> | The message's identifier |

### reattach(messageId)

Reattach the given message.

| Param     | Type                | Default           | Description              |
| --------- | ------------------- | ----------------- | ------------------------ |
| messageId | <code>string</code> | <code>null</code> | The message's identifier |

### promote(messageId)

Promote the given message.

| Param     | Type                | Default           | Description              |
| --------- | ------------------- | ----------------- | ------------------------ |
| messageId | <code>string</code> | <code>null</code> | The message's identifier |

### consolidateOutputs()

Consolidate the outputs on all account addresses.

### isLatestAddressUnused()

Determines whether the account has unused latest address after syncing with the Tangle.

Returns: a promise resolving to the boolean value.

### setAlias(alias)

Updates the account alias.

| Param | Type                | Default           | Description           |
| ----- | ------------------- | ----------------- | --------------------- |
| alias | <code>string</code> | <code>null</code> | The new account alias |

### setClientOptions(options)

Updates the account client options.

| Param   | Type                                         | Default           | Description                    |
| ------- | -------------------------------------------- | ----------------- | ------------------------------ |
| options | <code>[ClientOptions](#clientoptions)</code> | <code>null</code> | The new account client options |

### getMessage(messageId)

Gets the message associated with the given identifier.

| Param     | Type                | Default           | Description              |
| --------- | ------------------- | ----------------- | ------------------------ |
| messageId | <code>string</code> | <code>null</code> | The message's identifier |

### getAddress(addressBech32)

Gets the address object by its bech32 representation.

| Param         | Type                | Default           | Description                       |
| ------------- | ------------------- | ----------------- | --------------------------------- |
| addressBech32 | <code>string</code> | <code>null</code> | The address bech32 representation |

### generateAddress()

Generates a new unused address and returns it.

| Param  | Type                | Default                | Description             |
| ------ | ------------------- | ---------------------- | ----------------------- |
| amount | <code>number</code> | <code>undefined</code> | The amount of addresses |

### latestAddress()

Returns: the latest address (the one with the biggest keyIndex).

### getUnusedAddress()

Synchronizes the account addresses with the Tangle and returns the latest address in the account,
which is an address without balance.

## ClientOptions

| Field               | Type                             | Default                | Description                                                                                              |
| ------------------- | -------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------- |
| [network]           | <code>number</code>              | <code>undefined</code> | The tangle network to connect to (Mainnet = 1, Devnet = 1, Comnet = 3)                                   |
| [primaryNode]       | <code>NodeUrl | [Node](#node)</code>   | <code>undefined</code> | A node URL to alway connect to first                                                                     |
| [primaryPoWNode]    | <code>NodeUrl | [Node](#node)</code>   | <code>undefined</code> | A node URL to alway connect to first when using remote PoW, will be used before primaryNode              |
| [node]              | <code>NodeUrl | [Node](#node)</code>   | <code>undefined</code> | A node URL to connect to                                                                                 |
| [nodes]             | <code>NodeUrl | [Node](#node)[]</code> | <code>undefined</code> | A list node URL to connect to                                                                            |
| [quorumSize]        | <code>number</code>              | <code>undefined</code> | If multiple nodes are provided, quorum size determines the number of nodes to query to check for quorum. |
| [quorumThreshold]   | <code>number</code>              | <code>undefined</code> | Minimum number of nodes from the quorum pool that need to agree to consider a result true.               |
| [localPow]          | <code>boolean</code>             | <code>true</code>      | Whether to use local or remote PoW.                                                                      |
| [MqttBrokerOptions] | <code>MqttBrokerOptions</code>   | <code>undefined</code> | Options for the MQTT broker                                                                              |

## MqttBrokerOptions

All fields are optional.

| Field                   | Type                | Description                                                                                           |
| ----------------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| automaticDisconnect     | <code>boolean</code> | Whether the MQTT broker should be automatically disconnected when all topics are unsubscribed or not. |
| timeout                 | <code>number</code> | MQTT connection timeout in seconds                                                                     |
| useWs                   | <code>boolean</code>   | Defines if websockets should be used (true) or TCP (false)                                            |
| maxReconnectionAttempts | <code>number</code> | Defines the maximum reconnection attempts before it returns an error                                  |
| port                    | <code>number</code> | Defines the port to be used for the MQTT connection                                                   |

### Auth
| Field      | Type                 | Default                | Description                                |
| ---------- | -------------------- | ---------------------- | ------------------------------------------ |
| [jwt]      | <code>string</code>  | <code>undefined</code> | Optional JSON Web Token.                   |
| [username] | <code>string</code>  | <code>undefined</code> | Optional name for basic authentication     |
| [password] | <code>string</code>  | <code>undefined</code> | Optional password for basic authentication |

### Node

NodeUrl = string

| Field      | Type                 | Default                | Description                                |
| ---------- | -------------------- | ---------------------- | ------------------------------------------ |
| [url]      | <code>NodeUrl</code> | <code>undefined</code> | Node url                                   |
| [auth]     | <code>Auth</code>    | <code>undefined</code> | Optional authentication options            |
| [disabled] | <code>boolean</code> | <code>false</code>     | Optional password for basic authentication |