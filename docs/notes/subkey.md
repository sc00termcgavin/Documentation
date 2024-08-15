---
title: Renewing Air Gap PGP Keys
sidebar_position: 2
---





Keys Generated on Tails and exported to my Yubikey

## Subkey expiry on Tails

### Step 1: Boot to Tails and mount VeraCrypt Encrypted Volume

### Step 2: Import Master Key

```jsx title=""
$ gpg --import /media/amnesia/Tails/master.asc
gpg: key 0xC2709D13BAB4763C: 1 signature not checked due to a missing key
gpg: key 0xC2709D13BAB4763C: public key "John Doe <john@example.net>" imported
gpg: key 0xC2709D13BAB4763C: secret key imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg:       secret keys read: 1
gpg:   secret keys imported: 1
gpg: no ultimately trusted keys found
```

### Step 3: set master key ID environment variable

```jsx title=""
KEY_ID=0xC2709D13BAB4763C
```

### Step 4: Extend Expiry date Subkeys

```jsx title=""
$ gpg --edit-key $KEY_ID
gpg (GnuPG) 2.2.12; Copyright (C) 2018 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

sec  ed25519/0xC2709D13BAB4763C
     created: 2021-07-21  expires: never       usage: C
     trust: unknown       validity: unknown
ssb  ed25519/0x02EDC61B6543509B
     created: 2021-07-21  expires: 2022-07-21  usage: S
ssb  cv25519/0xD4634E0D6E2DD8BF
     created: 2021-07-21  expires: 2022-07-21  usage: E
ssb  ed25519/0x1E7B69B238FFA21B
     created: 2021-07-21  expires: 2022-07-21  usage: A
[ unknown] (1). John Doe <john@example.net>

gpg> key 1

sec  ed25519/0xC2709D13BAB4763C
     created: 2021-07-21  expires: never       usage: C
     trust: unknown       validity: unknown
ssb* ed25519/0x02EDC61B6543509B
     created: 2021-07-21  expires: 2022-07-21  usage: S
ssb  cv25519/0xD4634E0D6E2DD8BF
     created: 2021-07-21  expires: 2022-07-21  usage: E
ssb  ed25519/0x1E7B69B238FFA21B
     created: 2021-07-21  expires: 2022-07-21  usage: A
[ unknown] (1). John Doe <john@example.net>

gpg> key 2

sec  ed25519/0xC2709D13BAB4763C
     created: 2021-07-21  expires: never       usage: C
     trust: unknown       validity: unknown
ssb* ed25519/0x02EDC61B6543509B
     created: 2021-07-21  expires: 2022-07-21  usage: S
ssb* cv25519/0xD4634E0D6E2DD8BF
     created: 2021-07-21  expires: 2022-07-21  usage: E
ssb  ed25519/0x1E7B69B238FFA21B
     created: 2021-07-21  expires: 2022-07-21  usage: A
[ unknown] (1). John Doe <john@example.net>

gpg> key 3

sec  ed25519/0xC2709D13BAB4763C
     created: 2021-07-21  expires: never       usage: C
     trust: unknown       validity: unknown
ssb* ed25519/0x02EDC61B6543509B
     created: 2021-07-21  expires: 2022-07-21  usage: S
ssb* cv25519/0xD4634E0D6E2DD8BF
     created: 2021-07-21  expires: 2022-07-21  usage: E
ssb* ed25519/0x1E7B69B238FFA21B
     created: 2021-07-21  expires: 2022-07-21  usage: A
[ unknown] (1). John Doe <john@example.net>

gpg> expire
Are you sure you want to change the expiration time for multiple subkeys? (y/N) y
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 1y
Key expires at Thu 21 Jul 2022 03:32:11 PM UTC
Is this correct? (y/N) y

sec  ed25519/0xC2709D13BAB4763C
     created: 2021-07-21  expires: never       usage: C
     trust: unknown       validity: unknown
ssb* ed25519/0x02EDC61B6543509B
     created: 2021-07-21  expires: 2022-07-21  usage: S
ssb* cv25519/0xD4634E0D6E2DD8BF
     created: 2021-07-21  expires: 2022-07-21  usage: E
ssb* ed25519/0x1E7B69B238FFA21B
     created: 2021-07-21  expires: 2022-07-21  usage: A
[ unknown] (1). John Doe <john@example.net>

gpg> save
```

### Step 5: Export Public Key to VeraCrypt Encrypted Volume

```jsx title=""
$ gpg --armor --export $KEY_ID > /media/amnesia/Tails/pub.asc
```

### Step 6: Cp Pub Key to Backup Volume

```jsx title=""
cp /media/amnesia/Tails/pub.asc "/media/amnesia/keyBackUp/johndoe.asc"
```


> Shout out to: https://github.com/sunknudsen/privacy-guides
> Notable Mention: https://github.com/drduh/YubiKey-Guide