x = 3
y = 0

while(x<8):
    if(y>11):
        x += 1
        y = 0

    y_string = str(y)
    if (y<10):
        y_string = "0"+str(y)

    val1 = str(x) + "|"+ str(y)
    val2= str(x) + "'"+ y_string + "\""

    print("<option value=\""+ val1+"\">"+ val2+"</option>")
    y +=1
