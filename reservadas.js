// lista de variáveis reservadas pelo javascript
// exceção de from, set e target

/*
arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield
*/

// valores possivelmente restritos no futuro
/*
enum
implements
interface
package
private
protected
public
*/

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

// Alternativa correta! Muito bem! Variáveis declaradas com var ou let podem ser reatribuídas. 
// Porém, uma variável declarada com let só pode ser usada no mesmo escopo em que está definida. 
// No caso da declaração const, significa que a variável sempre terá uma referência ao mesmo objeto 
// ou valor primitivo, porque essa referência não pode ser alterada. A referência em si é imutável, 
// mas o valor mantido pela variável não se torna imutável.


let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

/* 
var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.
O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias.
null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).
null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e String() converte as variáveis para texto.
*/
