def fibonacci(num, dic):
    key = str(num)
    if key in dic:
        return dic[key]
    if num < 1:
        return 0
    if num < 2:
        return 1
    result = fibonacci(num-1, dic) + fibonacci(num-2, dic)
    dic[key] = result
    return result


myDic = {}
print(fibonacci(1000,myDic))

# i = 0
# mStr = ''
# while i < 10:
#     result = fibonacci(i, myDic)
#     mStr += str(result) + ' '
#     i += 1
# print(mStr)
