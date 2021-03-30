---

---

<code>
LOOP through numbers 0 - 100 
    IF number is a multiple of 3 and 5
        THEN output 'fizzbuzz'
    ELSE IF number is a multiple of 5
        THEN output 'buzz'
    ELSE IF number is a multiple of 3
        THEN output 'fizz'
    ELSE THEN output number

</code>

<script>
//LOOP through numbers 0 - 100 
for (counter=1; counter<=100; counter++){
    var message = '';
 //   IF number is a multiple of 5
    if (counter % 3 == 0){
 //       THEN output 'fizz'
        message += 'fizz';
    }
 //   ELSE IF number is a multiple of 5
     if (counter % 5 == 0){
   //     THEN output 'buzz'
           message += 'buzz';
     }
  //  ELSE IF number is a multiple of 3 & 5
    if (!message){
        message = counter;
    }

    console.log(message);
  //      THEN output 'fizzbuzz'
  //  ELSE THEN output number
}
</script>

Task 1 - Reading List 
<script>
    VAR for read = true 'You have already read + 'bookTitle + bookAuthor' + has been read'
    VAR for read = untrue 'You have not read + 'bookTitle + bookAuthor' + so far'

    LET book ID
    STRING bookTitle '' bookAuthor ''
    BOOLEAN for has it been read yet Y/N
    
    FOR itterate through books ++

    IF read = true
        THEN output 'read, bookTitle + bookAuthor'
    IF read = untrue
        THEN output 'read, bookTitle + bookAuthor'

        CONSOLE.LOG output read

</script>
