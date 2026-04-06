def solution(phone_number):
    answer = phone_number.replace(phone_number[:-4], '*' * len(phone_number[:-4]))
    return answer

# answer = '*' * (len(phone_number) - 4) + phone_number[-4:]