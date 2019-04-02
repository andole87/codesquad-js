def solution(a,b):
    answer = 0
    if a == b:
        return a
    
    if b < a:
        a,b = b,a
    
    for x in range(a,b+1):
        answer += x
    
    return answer
