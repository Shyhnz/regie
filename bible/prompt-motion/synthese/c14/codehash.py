import sys,re,hashlib
for f in sys.argv[1:]:
    t=open(f).read(); c=re.search(r"```js\n(.*?)\n```",t,re.S).group(1)
    print(f, hashlib.sha256(c.encode()).hexdigest()[:8])
