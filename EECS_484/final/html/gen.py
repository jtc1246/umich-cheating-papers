format = '''.text-img-$1 {
    display: flex;
    flex-direction: row;
}

.text-img-$1 > div {
    display: inline-block;
    width: $2%;
}

.text-img-$1 > img {
    display: inline-block;
    width: $1%;
    height: 3vw;
    vertical-align: middle;
}

'''

result = ''

for i in range(1, 1099):
    result += format.replace('$1', str(i)).replace('$2', str(100-i))

with open('css/imgs.css', 'w') as f:
    f.write(result)
