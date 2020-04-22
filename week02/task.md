```

"a"

"b"

<Program>::= "a"+ | "b"+

<Number>::= "0"  |  "1" | "2"  | .....| "9"

<DecimalNumber>::= "0" | (("1" | "2"  | .....| "9") <Number>*)

<DecimalNumber>::= /0|[1-9][0-9]*/

<PrimaryExpression>::= <DecimalNumber> | "(" <LogicalExpression> ")"

<MultiplicativeExpression>::= <DecimalNumber> | 
      <MultiplicativeExpression> "*" <DecimalNumber> |
      <MultiplicativeExpression> "/" <DecimalNumber> |

<AddtiveExpression>::= <MultiplicativeExpression> |
         <AddtiveExpression> "+" <MultiplicativeExpression> |
         <AddtiveExpression> "-" <MultiplicativeExpression> |


<LogicalExpression>::= <AddtiveExpression> | 
    <LogicalExpression> "||" <AddtiveExpression> |
    <LogicalExpression>  "&&" <AddtiveExpression>

```
                       




