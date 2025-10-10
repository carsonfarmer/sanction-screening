# How to update the sanctions list

```bash
git clone https://github.com/0xB10C/ofac-sanctioned-digital-currency-addresses.git
git checkout lists
cat sanctioned_addresses_*.txt | grep '^0x' | tr '[:upper:]' '[:lower:]' | sort -u > all_sanctioned_addresses.txt
cp all_sanctioned_addresses.txt data/
```
