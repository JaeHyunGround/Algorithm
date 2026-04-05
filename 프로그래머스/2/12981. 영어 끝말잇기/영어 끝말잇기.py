def solution(n, words):
    set_words = set()
    prev = words[0][0]
    
    for i, word in enumerate(words):
        if word in set_words or word[0] != prev:
            return [(i % n) + 1, (i // n) + 1]
        else:
            set_words.add(word)
            prev = word[-1]
    return [0, 0]