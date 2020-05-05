# Connect Mobile Wallet

This feature should support you in connecting your RaspiBlitz to a mobile wallet on your smartphone.

<img src="pictures/mobile.png" alt="mobile-wallets">

At the moment the following mobile wallets are supported:

* [ZAP (iOS/Android)](https://github.com/LN-Zap/zap-iOS)
* [Shango (iOS/Android)](https://github.com/neogeno/shango-lightning-wallet)
* [Zeus (iOS/Android)](https://github.com/ZeusLN/zeus)
* [Fully Noded (iOS over TOR)](https://apps.apple.com/us/app/fully-noded/id1436425586)

Please keep in mind that if you also want to connect to your smartphone also from the outside (when you are outside of your local network) with your RaspiBlitz you might need to open/forward ports on your router and should look into the DynamicDNS features to handle changing IP of our Home-DSL.

This youtube video explains the "port forwarding" on your router in more detail: https://www.youtube.com/watch?v=KESo7hHXQtg

When you have TOR activated you can also try to connect mobile wallets that support this. The Fully Noded Wallet can only connect over TOR. 

Basically those mobile wallets work as a remote control app for your RaspiBlitz. First you need to install the apps on your phone - a QR code with the links to the app stores are displayed. And then you need to `pair` them with your RaspiBlitz - also with a QR code displayed on the LCD. If you run your RaspiBlitz without a LCD there is the fallback option to display that QR code on the terminal as ASCII code (might involve lowering your terminal font size).

#### EXPORT: Macaroons and TLS.cert

Offers the following options to get the Macaroon and TLS files to be used in other apps and wallets.

*Macaroons: Access Tokens that allow certain command executions on the LND node.*

*TLS: Certificate to secure/encrypt the communication with the LND node.*

<img src="pictures/export.png" alt="export">

##### Hex-String

The Macaroons and TLS.cert files can be copy+pasted as Hex-Strings from RaspiBlitz to any other app that supports that. If you choose this option RaspiBlitz will all files print for you as Hex-String to do so.

This method is recommended to export to:
* [Joule Browser Wallet](https://lightningjoule.com)

##### SSH Download

SCP is a SSH like command to transfer files. If were able to SSH into the RaspiBlitz also the SCP to transfer the files should work. If you choose these option, RaspiBlitz will print prepared SCP commands you can copy+paste to run in a second terminal.

This method is recommended to export to:
* [Zap Desktop Wallet](https://github.com/LN-Zap/zap-desktop)
