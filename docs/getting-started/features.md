
# Feature Documentation

These are the features available through the RaspiBlitz SSH menus. They have the goal to offer some basic/fallback functionality & configurations. More complex or user-friendly tasks are best to be done with wallets, apps and scripts you connect to your Lightning Node via [APIs](#interface--apis) - because you have a full Bitcoin- and Lightning-Node on the RaspiBlitz.

So lets take a look at the SSH main menu (from top to bottom):

![MainMenu-A](pictures/mainmenu1.png)

#### INFO: Raspiblitz Status Screen

This is the screen that gets displayed on the LCD/display. It's useful to call in a remote situation from SSH if you don't have your RaspiBlitz next to you. But also if you want to copy+paste your nodeID or make a screenshot.

![SSH9dz](pictures/ssh9z-ready.png)

*It's not automatically updating. It's just for one-time info.*

* [Why is my bitcoin IP on the display red?](FAQ.md#why-is-my-bitcoin-ip-on-the-display-red)
* [Why is my node address on the display red?](FAQ.md#why-is-my-node-address-on-the-display-red)
* [Why is my node address on the display yellow (not green)?](FAQ.md#why-is-my-node-address-on-the-display-yellow-not-green)

#### FUNDING: Fund your on-chain Wallet

Before you can open channels with other nodes you need to put some coins onto your LND on-chain wallet. Use this option to generate an address to send funds to.

*Reminder: RaspiBlitz & LND is still experimental software. With funding your LND node you accept the risk of loosing funds. So just play with small amounts - something in then area of 20 EUR/USD should be enough to make your first experiences. Also, it's a good privacy practice to [coinjoin your coins](https://bitcoin-only.com/#privacy) before sending them to any Lightning Network wallet.*

You can make multiple fundings - so you can start with small amounts first to test. LND will generate always a different address, but all funds you send will get into the same LND on-chain wallet.

#### CONNECT: Connect to a Peer

Before you can open a channel with another node on the network you need to connect this node as a peer to your node.

Opening a channel with a peer is just optional. Having another node a peer helps your node to receive information about the network through the gossip protocol. It will help your node to find better routes through the network.

#### CHANNEL: Open a Channel with Peer

To open a payment channel with another node you can use this option.

Find interesting nodes to open channels with on online directories like [1ML.com](https://1ml.com/) or join the RaspiBlitz NodeManager telegram group to meet people to open channels with: https://t.me/raspiblitz

Bear in mind that this option will open a public channel that can be seen by everyone in the network. This is good if you want to route payments. If your intention is to use it privately only, you will need to go to the command line and open the channel with the -private option.

*This is just a very basic shell script. For more usability try the RTL Webinterface (under Services) or connect a (mobile) wallet with your RaspiBlitz.*

#### SEND: Pay an Invoice/PaymentRequest

Pay an invoice through lightning.

*This is just a very basic shell script. For more usability try the RTL Webinterface (under Services) or connect a (mobile) wallet with your RaspiBlitz.*

#### RECEIVE: Create Invoice/PaymentRequest

Create an invoice to send to someone or a service to be payed through lightnig.

*This is just a very basic shell script. For more usability try the RTL Webinterface (under Services) or connect a (mobile) wallet with your RaspiBlitz.*

#### CHASHOUT: Remove Funds fro, on-chain Wallet

Use if the want to remove all funds from the RaspiBlitz.

#### lnbalance: Detailed Wallet Balances

<img src="pictures/bonus-lnbalance.png" alt="bonus-lnbalance" width="600">

#### lnchannels: Lightning Channel List

<img src="pictures/bonus-lnchannels.png" alt="bonus-lnchannels" width="600">
#### CLOSE ALL: Closing all open Channels

*This option is just available if you have channels open.*

With this feature you can close down all open channels and get funds locked up in those channels back to your on-chain wallet.

It might even offer you to force close some channels where the channel-partner is no longer reachable. Keep in mind that those force closings can take a much longer time until your funds are available again on your on-chain wallet.

#### SERVICES: Activate/Deactivate Services

The RaspiBlitz offers further Services, Apps and configuration (scroll down in the to see all in the RaspiBlitz):

![MainMenu-Services](pictures/mainmenu-services.png)

Activate/Deactivate service selection with the space bar and then select OK to trigger Install/Uninstall. Here you find more details about those options (top to down):

##### Channel Autopilot

The autopilot is a feature of LND that you can switch on. It automatically uses around half of your your on-chain funds (if available) to open channels with other lightning nodes the autopilot thinks can be useful to improve your payment routes.

##### Loop

A Submarine Swaps Service by lighting labs. You call it from the RaspiBlitz terminal with the command 'loop'. You can use it for example to send satoshies from one of your channel to a on-chain bitcoin address without closing the channel for a fee. This can be use full to send earned satoshies to your hardware wallet while freeing up your inbound liquidity on your channels again. 

[Details on Service](https://github.com/lightninglabs/loop)

##### Testnet

You can switch from mainnet to testnet of your blockchain if you want to try things out and play with free test coins.

Please beware that to might take some time to sync the test blockchain and you need to setup a new lnd testnet wallet during the process.

##### DynamicDNS

This is a way to make your RaspiBlitz publicly reachable from the internet so that other nodes can open channels with you and you can connect with your mobile wallet from outside your local network.

To do so you can register at an DynamicDomain service like freedns.afraid.org and forward the TCP ports ...

* 8333 (Bitcoin/mainnet)
* 9735 (LND Node)
* 10009 (LND RPC)
* 8080 (LND REST API)

... from your internet router to the local IP of your RaspiBlitz and then activate under "Services" the "DynamicDNS" option.

You will be asked for your dynamic domain name such like "mynode.crabdance.org" and you can also optionally set an URL that will be called regularly to update your routers IP with the dynamic domain service. At freedns.afraid.org this URL is called "Direct URL" under the menu "Dynamic DNS" once you added one.

*NOTE: DynamicDNS just works if you can forward ports on your router and you have a temporary public IP address (your ISP is not running you behind a NAT - like on most mobile connections). Another solution to make your ports reachable from the public internet is to use reverse ssh tunneling - see FAQ on ['How to setup port-forwarding with a SSH tunnel?'](FAQ.md#how-to-setup-port-forwarding-with-a-ssh-tunnel)*

##### Run behind TOR

You can run your Bitcoin- & Lightning-Node and also additional Apps as a TOR hidden service - replacing your IP with an .onion-address

![tor1](pictures/tor1.png)

This has some benefits:

* You don't publish your IP running a node so it's much harder to resolve your real name and location.
* You tunnel through the NAT of your router and make Bitcoin and Lightning reachable to all other TOR nodes.
* By using a TOR address it's possible to move the node to a different IPv4 address and keep the existing (=preciously open and funded) channels functional.

But this also comes with the following side effects:

* Some Mobile wallets don't support connecting to RaspiBlitz over TOR yet
* Lightning nodes that don't run TOR cannot reach you (like behind NAT)

To try it out just switch on the service - you can deactivate later on if it's not working for you.

##### RTL Webinterface

The RTL Webinterface is a LND Control Dashboard you can run in your browser with a nice GUI - it offers much more control over your Lightning node than the RaspiBlitz SSH menus. It's recommended to give it a try.

![RTL](pictures/RTL-dashboard.png)

Read an Intro-Tutorial to RTL: https://medium.com/@suheb.khan/how-to-ride-the-lightning-447af999dcd2

Feedback is welcome by the RTL programmer: https://github.com/ShahanaFarooqui/RTL

##### BTC-RPC-Explorer

BTC-RPC-Explorer is a blockchain explorer webseite you can run on your own RaspiBlitz. See an example running on: https://btc-explorer.com 

![EXPLORER](pictures/blockexplorer.png)

[Details on Service](https://github.com/janoside/btc-rpc-explorer)

##### LND Auto-Unlock

The RaspiBlitz will automatically unlock the LND wallet on every start.

This feature is based on https://github.com/Stadicus/guides/blob/master/raspibolt/raspibolt_6A_auto-unlock.md

It can be activated under "Services" -> "Auto-unlock LND". It's recommended to be turned on, when DynamicDNS is used. Because on a public IP change of your router, LND gets restarted automatically and without Auto-Unlock it will stay inactive/unreachable until you manually unlock it.

* [When using Auto-Unlock, how much security do I lose?](FAQ.md#when-using-auto-unlock-how-much-security-do-i-lose)

##### BTC UPnP (AutoNAT)

Normally in a home setup your RaspiBlitz runs behind your internet router that is providing a NAT. That means that only your router is reachable from the outside with a public IP and all your other devices (like the RaspiBlitz) have just a local network IP and cannot be directly contacted from the open internet. That's the reason why your [bitcoin address on the LCD might be displayed in red](FAQ.md#why-is-my-bitcoin-ip-on-the-display-red).

Some routers support a feature called UPnP where devices can automatically request a forwarding to be publicly reachable. By turning on `BTC UPnP` in the main menu `SERVICES` section, you can try if your router supports this feature.

##### LND UPnP (AutoNAT)

Normally in a home setup your RaspiBlitz runs behind your internet router that is providing a NAT. That means that only your router is reachable from the outside with a public IP and all your other devices (like the RaspiBlitz) have just a local network IP and cannot be directly contacted from the open internet. That's the reason why your [Lightning address on the LCD might be displayed in red](FAQ.md#why-is-my-node-address-on-the-display-red).

Some routers support a feature called UPnP where devices can automatically request a forwarding to be publicly reachable. By turning on `LND UPnP` in the main menu `SERVICES` section, you can try if your router supports this feature.

##### Touchscreen (experimental)

Your RaspiBlitz has an LCD that is touchscreen capable. You can switch on this new feature that is still in development.

![RTL](pictures/touchscreen.png)

It will give you 4 buttons on the right side. 

- Info - to defined later
- Node - shows the nodeid/uri as QR code (use to open channels from mobile wallets)
- Invoice - creates an Invoice-QRcode that can be used for donations
- Off - Shutdown or Restart the RaspiBlitz 

*If this feature works for everybody in the v1.4 release, touchscreen will be default and further developed for future releases.*

##### LCD Rotate

If you switch this on you can rotate the LCD of your RaspiBlitz 180 degrees. This can make sense if you want to use it in a special case or wall mount.

##### Electrum Rust Server

Enable a user to run his own Electrum server on the RaspiBlitz. The server indexes the entire Bitcoin blockchain, and the resulting index enables fast queries for any given user wallet, allowing the user to keep real-time track of his balances and his transaction history using the [Electrum wallet](https://electrum.org).

Since Electrum Rust Server runs on the user's own machine, there is no need for the wallet to communicate with external Electrum servers, thus preserving the privacy of the user's addresses and balances.

For example if you use your Trezor Hardware Wallet with the trezor.io wallet it will tell a third party your public keys - connecting it with your IP. Now you can use your Trezor with the Electrum Wallet just talking to your own Electrum Server preserving your privacy.

[Details on Service](https://github.com/romanz/electrs)

##### BTCPayServer

BTCPay Server is a self-hosted, open-source cryptocurrency payment processor. It's secure, private, censorship-resistant and free. 

![BTCPAY](pictures/btcpay.png)

*At the moment the RaspiBlitz can just make the BTCPayServer publicly available to the outside over the TOR network (Hidden Service).*

[Details on Service](https://btcpayserver.org/)

##### LNDmanage

lndmanage is a command line tool for advanced channel management of an node.

*You need at least one open channel to use this tool.*

To run it change to the RaspiBlitz terminal and type 'manage'. This starts the LNDManage interactive mode and you can use the following commands:

* __Activity reports ```report```__
* __Display the node summary ```status```__
* __Advanced channel listings ```listchannels```__
  * ```listchannels rebalance```: list channels for rebalancing
  * ```listchannels forwardings```: list forwarding statistics for each channel 
  * ```listchannels hygiene```: information for closing of active channels
  * ```listchannels inactive```: information on inactive channels
* __Rebalancing command ```rebalance```__
  * different rebalancing strategies can be chosen
  * a target 'balancedness' can be specified (e.g. to empty the channel)
* __Circular self-payments ```circle```__
* __Recommendation of good nodes ```recommend-nodes```__

[Details on Service](https://github.com/bitromortac/lndmanage/blob/master/README.md)

##### LNBits

LNbits is a very simple server that sits on top of your Lightning Wallet

![LNBITS](pictures/lnbits.png)

It can be used as:
- Accounts system to mitigate the risk of exposing applications to your full balance, via unique API keys for each wallet
- Fallback wallet for the LNURL scheme
- Instant wallet for LN demonstrations

You can also develop extensions on it.

[Details on Service](https://github.com/arcbtc/lnbits/blob/master/README.md)
