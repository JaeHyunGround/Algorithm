function solution(phone_book) {
    let sortPhoneBook = phone_book.sort()
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
            return false;
        }
    }
    
    return true;
}