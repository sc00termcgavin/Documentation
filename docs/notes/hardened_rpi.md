---
title: Hardened Raspberry Pi Setup 
sidebar_position: 1
---

### Step 1: Create SSH key pair

```jsx title=""
$ cd ~/.ssh

$ ssh-keygen -t ed25519 -C "pi"

$ cat pi.pub
```

### Step 2: Generate Heredoc for the output to be used at [step 15](#step-15-Configure-Pi-ssh-authorized-keys)

```jsx title=""
cat << EOF
cat << "_EOF" > ~/.ssh/authorized_keys
$(cat ~/.ssh/pi.pub)
_EOF
EOF
```

### Step 3: Copy Raspberry Pi OS Lite to microSD card

#### On macOS



> - Run: `diskutil list` to find disk ID of microSD card
> - Replace: `disk>N<` and `rdisk>N<` with disk ID (`disk4` and `rdisk4` in my case)
> - Replace  `2024-07-04-raspios-bookworm-arm64-lite.img` with most up to date image

```jsx title=""
$ diskutil list 

$ sudo diskutil unmountDisk /dev/disk>N< 
Unmount of all volumes on disk4 was successful

$ sudo dd bs=1m if=$HOME/Downloads/2024-07-04-raspios-bookworm-arm64-lite.img of=/dev/rdisk>N<
2640+0 records in
2640+0 records out
2768240640 bytes transferred in 38.358055 secs (72168431 bytes/sec)

$ sudo diskutil unmountDisk /dev/disk>N<
Unmount of all volumes on disk4 was successful
```

<details>
  <summary>On linux</summary>
  <ul>
    <li>Extract PI OS LITE archive</li>
    <code>unxz 2024-03-15-raspios-bookworm-arm64-lite.img.xz</code>
    <li>Copy raspi to microSD</li>
    <code>
      $ sudo fdisk --list

      $ sudo umount /dev/sdn*

      $ sudo dd bs=1M if=2024-03-15-raspios-bookworm-arm64-lite.img of=/dev/sdn

    </code>
  </ul>
  
</details>


### Step 4: Create User

- `pi-admin`
- password output from `openssl rand -base64 24`

#### Configure: `sudo raspi-config`
- locale 
- hostname
- disable auto login
- enable SSH
- predictible network names

### Step 5: Fixing Locale issue
> edit /etc/locale.gen uncomment en_US.UTF-8 UTF-8

```jsx title=""
sudo nano /etc/locale.gen

sudo locale-gen en_US.UTF-8

sudo update-locale en_US.UTF-8
```

### Step 6: Set hostname

- Select “System Options”, then “hostname”, name: `tinyca` | `pie5`

### Step 7: Wifi Configure

- Select “System Options”, then “Wireless LAN”, choose country, then select “OK”, enter “SSID” and, finally, enter passphrase.

### Step 8: disable auto login

- Select “System Options”, then “Boot / Auto Login” and, finally, select “Console”.
  
### Step 9: enable SSH

- Select “Interface Options”, then “SSH”, then “Yes”, then “OK” and, finally, select “Finish”.

When asked if you wish to reboot, select “No”.

### Step 10: Enable predictable interface names for docker VLANs

- Select “Advanced Options”, then “A2: Network Interface Names” and, finally, select “yes”.

### Step 11: set timezone

See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
> Be sure NTP is working. Check status with `timedatectl` - make sure "NTP Service" is "active".

```jsx title=""
timedatectl set-timezone America/Denver
```


#### Set Static IP for Raspberry Pi's. 
> One for Pi-hole, a second for TinyCA. Make sure to change the DHCP range to prevent automatic assignment of an IP address.

> ASUS has a guide on their page [Router Setup](https://www.asus.com/support/faq/1046062/)


### Step 12: Obtain IP of Raspberry Pi (`eth0`: Ethernet | `wlan0`: WI-FI)
> Make sure it matches your reserved static IP on the Router

```jsx title=""
ip a
```

### Step 13: SSH into the Pi
> Heads-up: replace `192.168.x.x` with IP of Raspberry Pi

```jsx title=""
ssh pi-admin@192.168.x.x
```

### Step 14: Disable Bash history for the Pi

```jsx title=""
sed -i -E 's/^HISTSIZE=/#HISTSIZE=/' ~/.bashrc
sed -i -E 's/^HISTFILESIZE=/#HISTFILESIZE=/' ~/.bashrc
echo "HISTFILESIZE=0" >> ~/.bashrc
history -c; history -w
source ~/.bashrc
```

### Step 15: Configure Pi SSH authorized keys

#### Create `.ssh` directory

```jsx title=""
mkdir ~/.ssh
```

#### Create `~/.ssh/authorized_keys` using heredoc generated at [step 2](#step-2-generate-heredoc-the-output-of-following-command-will-be-used-at-step-13)

```jsx title=""
cat << "_EOF" > ~/.ssh/authorized_keys
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHLwQ2fk5VvoKJ6PNdJfmtum6fTAIn7xG5vbFm0YjEGY pi
_EOF
```

## Step 16: log out

```jsx title=""
exit
```

### Step 17: log in
> Heads-up: replace `192.168.x.x` with IP of Raspberry Pi.

> Heads-up: when asked for passphrase, enter passphrase from [step 1](#step-1-create-ssh-key-pair-on-macos).


```jsx title=""
ssh -i ~/.ssh/pi pi-admin@192.168.x.x
```


### Step 18: switch to root

```jsx title=""
sudo su -
```

### Step 19: disable root Bash history

```jsx title=""
echo "HISTFILESIZE=0" >> ~/.bashrc
history -c; history -w
source ~/.bashrc
```

### Step 20: disable pi sudo `nopassword` “feature”

```jsx title=""
rm /etc/sudoers.d/010_*
```

### Step 21: set root password

When asked for password, use output from `openssl rand -base64 24` (and store password in password manager).

```jsx title=""
$ passwd
New password:
Retype new password:
passwd: password updated successfully
```

### Step 22: disable root login and password authentication

```jsx title=""
sed -i -E 's/^(#)?PermitRootLogin (prohibit-password|yes)/PermitRootLogin no/' /etc/ssh/sshd_config
sed -i -E 's/^(#)?PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart ssh
```

### Step 23: Disable Bluetooth and Wi-Fi

> Will take effect after reboot.

> Disable Bluetooth

```jsx title=""
echo "dtoverlay=disable-bt" >> /boot/config.txt
```

> Disable Wi-Fi (if using ethernet)

```jsx title=""
echo "dtoverlay=disable-wifi" >> /boot/config.txt
```

### Step 24: configure sysctl (if network is IPv4-only)

> Heads-up: only run following if network is IPv4-only.

```jsx title=""
cp /etc/sysctl.conf /etc/sysctl.conf.backup
cat << "EOF" >> /etc/sysctl.conf
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
EOF
sysctl -p
```

### Step 25: enable nftables and configure firewall rules

#### Enable nftables

```jsx title=""
systemctl enable nftables
systemctl start nftables
```

#### Configure firewall rules

- `nft flush ruleset``
  - resets nftables to an empty state.
- `nft add table ip firewall`: 
  - Create new table named `firewall` in the `ip` family
- `nft add chain ip firewall input { type filter hook input priority 0 \; policy drop \; }`:
  - Add input chain with drop policy
- `nft add rule ip firewall input iif lo accept`
  - Allow loopback traffic (accept packets on loopback interface):
- `nft add rule ip firewall input iif != lo ip daddr 127.0.0.0/8 drop`
  - Drop packets destined for localhost (except loopback interface)
- `nft add rule ip firewall input tcp dport ssh accept`
  - Allow SSh traffic
- `nft add rule ip firewall input ct state established,related accept`
  - Allows established and related incoming packets connections to be accepted
- `nft add chain ip firewall forward { type filter hook forward priority 0 \; policy drop \; }`
  - Add forward chain with drop policy
- `nft add chain ip firewall output { type filter hook output priority 0 \; policy drop \; }`
  - Add output chain with drop policy
- `nft add rule ip firewall output oif lo accept`
  - Allow loopback traffic (accept packets on loopback interface for output)
- `nft add rule ip firewall output tcp dport { http, https } accept`
  - Allow HTTP and HTTPS traffic (output)
- `nft add rule ip firewall output udp dport { domain, ntp } accept`
  - Allow DNS and NTP traffic (output)
- `nft add rule ip firewall output ct state established,related accept`
  - Allow established and related connections (output)



<!-- nft flush ruleset
nft add table ip firewall

nft add chain ip firewall input { type filter hook input priority 0 \; policy drop \; }
nft add rule ip firewall input iif lo accept
nft add rule ip firewall input iif != lo ip daddr 127.0.0.0/8 drop
nft add rule ip firewall input tcp dport ssh accept
nft add rule ip firewall input ct state established,related accept
# Allow incoming traffic to Docker published ports (example: 8080)
nft add rule ip firewall input tcp dport 8080 accept

nft add chain ip firewall forward { type filter hook forward priority 0 \; policy drop \; }
# Allow Docker bridge network traffic
nft add rule ip firewall forward iifname "docker0" oifname != "docker0" accept
nft add rule ip firewall forward oifname "docker0" ct state related,established accept

nft add chain ip firewall output { type filter hook output priority 0 \; policy drop \; }
nft add rule ip firewall output oif lo accept
nft add rule ip firewall output tcp dport { http, https } accept
nft add rule ip firewall output udp dport { domain, ntp } accept
nft add rule ip firewall output ct state established,related accept -->







### Step 26: log out and log in to confirm firewall is not blocking SSH

#### Log out

```jsx title=""
$ exit

$ exit
```


#### Log in

> Heads-up: replace `192.168.x.x` with IP of Raspberry Pi.

```jsx title=""
ssh -i ~/.ssh/pi pi-admin@192.168.x.x
```

### Step 27: switch to root

```jsx title=""
sudo su -
```

### Step 28: make firewall rules persistent

```jsx title=""
cat << "EOF" > /etc/nftables.conf
#!/usr/sbin/nft -f

flush ruleset

EOF
```

```jsx title=""
nft list ruleset >> /etc/nftables.conf
```

### Step 29: disable swap

```jsx title=""
systemctl disable dphys-swapfile
```

### Step 30: update APT index and upgrade packages

```jsx title=""
$ apt update

$ apt upgrade -y
```