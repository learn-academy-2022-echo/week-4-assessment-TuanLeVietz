# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
# We define a metod called odd_numb and set num as its parameters.
# Inside the method we set up a condtional for it to output if the number is odd or even by using modulo. Pretty similar to JS.  

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_numb num
    if num % 2 == 0
        "#{num} is even"
    else num % 2 != 0
        "#{num} is odd"
    end
end

p odd_numb num1
p odd_numb num2
p odd_numb num3
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# we define a method called vowel_police and assign album as an argument
#within the method we use built in method .delete "vowels" to delete the vowels from the string. Keep in mind that the strings also contain capital letters so we will need to incorporate that in the methods condition. 

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_police  album
    album.delete"aeiouAEIOU"
end
p vowel_police beatles_album1
p vowel_police beatles_album2
p vowel_police beatles_album3
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# We define a method called dot_reverse and assign pali as its argument. Inside the method we set a condition so that if the argumnet is equal to reverse argument then it is a palindrome, and if it aint then it is not a palindrome. We have to take in consideration that some are capitalized so we need to use .downcase to make sure everything has the same casing. 

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def dot_reverse pali    
    if pali.downcase == pali.reverse.downcase
        "#{pali} is a palindrome"
    else pali.downcase != pali.reverse.downcase
        "#{pali} is not a palindrome"
    end
end
 p dot_reverse palindrome_tester1
 p dot_reverse palindrome_tester2
 p dot_reverse palindrome_tester3