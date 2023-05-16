String Calculator Kata in Typescript

note (spanish): si te gusta este repo te recomiendo hacer el curso https://testingsostenible.com 

# Enunciado:

This kata proposes the implementation of a function that performs the sum of the elements of an expression received as a parameter in the form of a string. 

This expression has some particularities. Let's see the different use cases to be covered:

- In the case of receiving null or an empty string, the function must return 0.
- In the case of receiving only a number in string format, it must convert it to a numeric type and return it.
- In the case of receiving several numbers, it must correctly return the result of the sum. The numbers will be separated, by default, by commas. 
- It could be the case that some of the elements separated by commas is a non-numeric character, such as a letter. These values should not affect the total result. 
- Finally, the function must support custom separators. For this purpose, the first part of the expression shall indicate the configuration. The beginning of the configuration will be given by a double slash, then the next character would be the separator chosen by the user, and the end of the configuration is indicated by another slash.

