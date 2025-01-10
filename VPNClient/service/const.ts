export const config = `
client
dev tun
proto udp
resolv-retry infinite
nobind
persist-key
persist-tun

cipher AES-256-GCM
auth SHA512
verb 3
tls-client
tls-version-min 1.2
key-direction 1
remote-cert-tls server


dhcp-option DNS 1.1.1.1
dhcp-option DNS 1.0.0.1


remote 92.246.142.23 33492
<ca>
-----BEGIN CERTIFICATE-----
MIIDQjCCAiqgAwIBAgIURUnoQxl9GcwNIF4O3pwj5M/v7A0wDQYJKoZIhvcNAQEL
BQAwEzERMA8GA1UEAwwIQ2hhbmdlTWUwHhcNMjQxMjMxMjAzODExWhcNMzQxMjI5
MjAzODExWjATMREwDwYDVQQDDAhDaGFuZ2VNZTCCASIwDQYJKoZIhvcNAQEBBQAD
ggEPADCCAQoCggEBAOmJuMRFPzIhjkccV5aGesoekJBcjEF2svh01wf2C11faeW8
/z6kvMWaOjVSOA79j6gcwI4h46gOGX5Vmv3QyMytdhEHS14lzBn/1q6GdoROCYvu
iCfx5NslXhiC+p4zLD5XoOwAD6dqizLRWT/pFMR7iUEcLyxw8tQd7qFdGUsrzUdl
aekfElrKc2ePHRfG54DB/hWSFdXyPK07XdcVajVCecJ2scd21Dal5fazaFucdiiT
TiM6yseQm/v+I37RnWWXswc4Sfrr5qf+2ytxSlKDzd/Y04YviLmqBTGuGw/ljdxT
goicey+ioLuyiWemMBi1TnyEmCRQgu44YP4B9scCAwEAAaOBjTCBijAdBgNVHQ4E
FgQUooPxnmkwSBAP2rQ4a3a6xeM1EiYwTgYDVR0jBEcwRYAUooPxnmkwSBAP2rQ4
a3a6xeM1EiahF6QVMBMxETAPBgNVBAMMCENoYW5nZU1lghRFSehDGX0ZzA0gXg7e
nCPkz+/sDTAMBgNVHRMEBTADAQH/MAsGA1UdDwQEAwIBBjANBgkqhkiG9w0BAQsF
AAOCAQEACwYFTgtMN8mx49EKRxujQS3OCaISUp04270mU+BP8/tbu9dDQGF60Jyi
r8vl2Vuy3XA09/B7n513SDzbtR3GmlwSq+SaTy0VQd02t1+pGCStPmSEcjut/AL2
c2w1Oth2nPMy79O+vNab1Zmz0A+casN9Kj/gXb45yhsZyWkBjGC3c7gXoONubFLI
iquGQEkw2NJz+9R9h11lAfh9nbeyfjqrH/X0r/klEoUm5eYRt3QQQBoBK0/zcQtu
QXky3BDgGPxgpkk0MjlGXwDVevTecdxmSmK7A8Dmy9iOSMK8jlrkjPeQyrpB39xZ
URoao/JkZEFQzlM5iN/RpGio5oMevA==
-----END CERTIFICATE-----

</ca>
<cert>
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            c2:c7:d2:1c:d5:c9:96:13:0f:dd:50:41:ac:12:c7:53
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: CN=ChangeMe
        Validity
            Not Before: Dec 31 20:39:33 2024 GMT
            Not After : Apr  5 20:39:33 2027 GMT
        Subject: CN=Iz5ZX3CquZdjzHtBQoc2kRjWloUaMwsw
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                RSA Public-Key: (2048 bit)
                Modulus:
                    00:ad:ea:fa:82:be:66:5b:8e:3e:6b:71:4d:5a:76:
                    bd:cd:0c:e7:de:8a:00:22:cd:a4:5a:96:8f:20:17:
                    68:74:16:95:4d:ae:cb:69:76:5f:97:3d:90:76:73:
                    bb:29:66:75:e9:c1:16:39:e2:b7:27:e8:6b:da:8f:
                    f4:10:13:bc:ca:4a:a9:a1:64:8a:cc:27:79:24:21:
                    c4:18:a2:ee:a7:85:c6:7c:13:94:7d:2c:2c:b7:69:
                    a4:4f:bb:f2:2c:1b:5b:a1:69:ea:97:5f:63:83:6a:
                    8a:75:49:41:a5:da:54:b8:f2:c4:1c:22:9b:e1:4b:
                    c1:67:9a:4d:d7:21:ff:b9:ee:04:d7:8e:f1:13:5a:
                    23:39:7a:a8:43:e2:68:af:e9:21:71:a9:37:a2:68:
                    af:34:6c:f8:3c:91:bf:3e:b1:65:05:88:e7:03:51:
                    02:5c:b1:32:46:f5:28:15:9f:36:c7:42:93:fd:25:
                    66:45:0a:bb:e9:ed:07:16:32:f8:07:2d:23:fc:9b:
                    e6:d1:c0:59:42:98:af:8b:82:a6:68:ea:02:99:16:
                    9a:56:fd:bb:1e:54:59:f9:40:da:a7:24:23:e0:50:
                    9d:b2:82:34:fe:b4:1c:40:fe:8c:5d:44:5b:b2:af:
                    ef:21:1d:18:03:c2:41:5e:e2:75:30:39:5b:65:4e:
                    ae:e3
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Subject Key Identifier: 
                C1:13:75:22:0A:86:BE:48:15:8C:67:02:CC:5D:6A:F6:F8:DB:0D:F4
            X509v3 Authority Key Identifier: 
                keyid:A2:83:F1:9E:69:30:48:10:0F:DA:B4:38:6B:76:BA:C5:E3:35:12:26
                DirName:/CN=ChangeMe
                serial:45:49:E8:43:19:7D:19:CC:0D:20:5E:0E:DE:9C:23:E4:CF:EF:EC:0D

            X509v3 Extended Key Usage: 
                TLS Web Client Authentication
            X509v3 Key Usage: 
                Digital Signature
    Signature Algorithm: sha256WithRSAEncryption
         a5:ab:54:95:65:6a:e2:02:45:e2:68:48:9e:8e:51:2c:b1:b1:
         6a:42:9b:59:3a:7b:fc:b9:20:c5:92:49:22:f8:8a:af:f4:53:
         9e:e6:39:e0:08:a8:14:7f:44:23:91:e9:76:7a:5d:1d:76:c5:
         b4:dd:54:1c:b6:ab:ab:b2:60:ab:0b:ce:d2:61:27:13:5e:e2:
         35:e2:78:29:ed:89:24:e5:1d:c3:e4:85:93:bd:50:32:70:f2:
         52:42:24:7b:89:6b:64:f1:1f:f1:54:e8:f8:3f:83:f8:33:44:
         6e:a9:42:42:8b:16:62:30:69:79:c4:48:a1:e4:43:8e:2a:86:
         55:5b:90:d2:53:2b:65:43:64:2c:10:f6:d3:80:cd:7c:33:8f:
         0d:78:61:45:18:9d:f4:00:1c:d2:7b:5e:c5:39:eb:9a:72:02:
         6a:54:09:6f:e4:b5:9d:19:d3:72:04:7d:0e:23:64:c9:84:98:
         44:04:af:8b:cf:42:34:9c:7c:8b:71:52:da:08:38:ec:06:0e:
         e3:1d:d3:79:6b:e3:0d:df:48:d9:05:cc:99:4e:f3:d5:da:89:
         08:e3:a6:fd:5d:3f:11:28:b5:8e:67:2a:9a:80:1b:76:65:50:
         bd:9a:06:75:c3:8c:27:d3:a1:bf:98:b9:8d:08:ca:22:b4:77:
         79:1d:34:d6
-----BEGIN CERTIFICATE-----
MIIDaTCCAlGgAwIBAgIRAMLH0hzVyZYTD91QQawSx1MwDQYJKoZIhvcNAQELBQAw
EzERMA8GA1UEAwwIQ2hhbmdlTWUwHhcNMjQxMjMxMjAzOTMzWhcNMjcwNDA1MjAz
OTMzWjArMSkwJwYDVQQDDCBJejVaWDNDcXVaZGp6SHRCUW9jMmtSaldsb1VhTXdz
dzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK3q+oK+ZluOPmtxTVp2
vc0M596KACLNpFqWjyAXaHQWlU2uy2l2X5c9kHZzuylmdenBFjnityfoa9qP9BAT
vMpKqaFkiswneSQhxBii7qeFxnwTlH0sLLdppE+78iwbW6Fp6pdfY4NqinVJQaXa
VLjyxBwim+FLwWeaTdch/7nuBNeO8RNaIzl6qEPiaK/pIXGpN6JorzRs+DyRvz6x
ZQWI5wNRAlyxMkb1KBWfNsdCk/0lZkUKu+ntBxYy+ActI/yb5tHAWUKYr4uCpmjq
ApkWmlb9ux5UWflA2qckI+BQnbKCNP60HED+jF1EW7Kv7yEdGAPCQV7idTA5W2VO
ruMCAwEAAaOBnzCBnDAJBgNVHRMEAjAAMB0GA1UdDgQWBBTBE3UiCoa+SBWMZwLM
XWr2+NsN9DBOBgNVHSMERzBFgBSig/GeaTBIEA/atDhrdrrF4zUSJqEXpBUwEzER
MA8GA1UEAwwIQ2hhbmdlTWWCFEVJ6EMZfRnMDSBeDt6cI+TP7+wNMBMGA1UdJQQM
MAoGCCsGAQUFBwMCMAsGA1UdDwQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAQEApatU
lWVq4gJF4mhIno5RLLGxakKbWTp7/LkgxZJJIviKr/RTnuY54AioFH9EI5Hpdnpd
HXbFtN1UHLarq7JgqwvO0mEnE17iNeJ4Ke2JJOUdw+SFk71QMnDyUkIke4lrZPEf
8VTo+D+D+DNEbqlCQosWYjBpecRIoeRDjiqGVVuQ0lMrZUNkLBD204DNfDOPDXhh
RRid9AAc0ntexTnrmnICalQJb+S1nRnTcgR9DiNkyYSYRASvi89CNJx8i3FS2gg4
7AYO4x3TeWvjDd9I2QXMmU7z1dqJCOOm/V0/ESi1jmcqmoAbdmVQvZoGdcOMJ9Oh
v5i5jQjKIrR3eR001g==
-----END CERTIFICATE-----

</cert>
<key>
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCt6vqCvmZbjj5r
cU1adr3NDOfeigAizaRalo8gF2h0FpVNrstpdl+XPZB2c7spZnXpwRY54rcn6Gva
j/QQE7zKSqmhZIrMJ3kkIcQYou6nhcZ8E5R9LCy3aaRPu/IsG1uhaeqXX2ODaop1
SUGl2lS48sQcIpvhS8Fnmk3XIf+57gTXjvETWiM5eqhD4miv6SFxqTeiaK80bPg8
kb8+sWUFiOcDUQJcsTJG9SgVnzbHQpP9JWZFCrvp7QcWMvgHLSP8m+bRwFlCmK+L
gqZo6gKZFppW/bseVFn5QNqnJCPgUJ2ygjT+tBxA/oxdRFuyr+8hHRgDwkFe4nUw
OVtlTq7jAgMBAAECggEAH4rUcE3z5nr/2yCrdNLATaYfj37b03QUcNGJl7pnGVbX
MUWYYsIzSAzEXJdUxIdurzxzuX/i0/wVQ4iELT5HKTEtXrYLbkdicykklYtHWV6r
xukOLz2JxqIESOm/XDyB+95ny5hjRfxWrDrjCx9z6i8tXiTwvIWuyAl2QKRL6v5w
zrd+S2C1MGZDqAirr4Td4hLJi1qFRo8hlhGxDkGCymy6MfqvpoSN0i6i5MgIqb7Z
nC9vuXo3QbyW1Yw7DtKnqaNgcvYAXIz7nyDaCjj/5vTrDHhqPzY7QAwk+dhJHHDd
ejAjM3jD5b5pTs6mKPEzjzjdU3mJTIqgrhjK4fkRoQKBgQDz5DVSk9x8pxBiKrcq
2HqYx+vnwyBt33M+mz/tfAhxv8iwMn+NELsq0pqMAD6MAU5hbvdFH/MRbUxdXdmH
fLNcP6zq8R071wnlW/iKJK0gj5oP0IgS4BGiGurZlwNywNOn9Dzt3ZfwrmycWH48
cd29sE98VNrAGQLDHWtUH6ZXuQKBgQC2jW0RUc8NSLlcJZFWZAUCw0/oUJIH2G8w
n3ufML/uJdeMQ1aHD6aA9KrLOJf9DY53U0XdwShdFJpGg23jOrSRf8lVbMvhGh2K
ISRXCsCQMZ2UiDG2CRg8RxwLh9n72BGd2IMa2xHCadBJ71KzcWynB1gg3dalSF+w
2grJkilRewKBgQDDJewAqi03VJoIYnNzhgn6q6U4KeqN38if5KtvQ9qh4bocOhvT
bPrGVgOxWBS0A+uKjLawCdN9Mz5ySsDe50nA23Zp+wnQMs1JR6EEMDqTHjRAyTPI
HqAdXHpkJrBsppv0/Lmv/qovu/FN3IUNqnKp8CR5sI/kO175blXN1xFLiQKBgDqf
lCT5tpo3fn8e+Vta51kJy8F5DkxCrwJYVOS8TQZ3VI8QmNrqpbfH2olEdVqoXdXo
AgnCm+m4UgrO7h0InzASb19lftuc/Vt8ZSUmqMwlgstOKVih9wx0cYcqa1A7BP1B
qGiZbUyXmnIDzvUdOZ0x+JUlaGbPpRswCkLNE0O9AoGASiDyWtGwmpdmKchA+t/9
/S9fliyILmInpyq1YzGijclga1hBfDovFS9/pslqDHEfOAdOQJ3Sa4t2oQwlq3qn
ToRwFwW+wyDutTCfmhkuTEaIh8TJmTyIZvajOoDo13DNV/oUVUVJmS5rPK5/fcCv
yH7Na1vjwts+7DAmsTuOdME=
-----END PRIVATE KEY-----

</key>
<tls-auth>
#
# 2048 bit OpenVPN static key
#
-----BEGIN OpenVPN Static key V1-----
f033535be00367438c66e2ba99034ec2
a308ebfa91606fa7272486e9807db837
d9d4d9b4850828a1eaf2cbb567c63413
d58d78769523c48bf1b426f6320f181b
49c74455113ffb3b98a296e7a6c64f1c
4c59046ee849cd44da59cd990898ad55
0ec3b807becff3dfa6680e5863692c0e
ff24579acfce58c8e29acde820a0c799
87dbb4a4cb86625956372db3c5fef1b8
27875d87d4d3c5a961d7007747b2fa28
ece27181ad58624cd073b71f21ff1f3d
c9a5acdbbd4e7917d0a1498444ee40fa
f44a418e34c20938d6407a44b3ba4490
0c2a77dbfda4c5ce1d0d4c2c485b4c6f
a427c3ef00550a2732c2697d99c01eed
5e7d801b0a9c497210d2de7428618bc5
-----END OpenVPN Static key V1-----

</tls-auth>

redirect-gateway def1 ipv6 bypass-dhcp
ifconfig-ipv6 fd15:53b6:dead::2/64  fd15:53b6:dead::1
block-ipv6

`