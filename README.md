typescript-notes

Typescript Notes

Typescript

Typescript bir uzantı dilidir. Kavram olarak Javascript Superseti olarak geçer. Yani var olan javascript koduna ek özellikler ve avantajlar ekler.Typescript, js e statik tür tanımları ekler.

Basitçe TypeScript kodun daha anlaşılır olması ve hataların engellenmesi için öncesinden değişkenlere verdiğimiz tip değerlerine göre kodun denetlenmesi ve kullanıcının uyarılmasını sağlayan mekanizmadır.

JavaScript, geliştiricilere büyük bir esneklik sağlar. Tamsayı olarak başlatılan bir değişkene, çalışma zamanında bir function değeri atanabilir. JavaScript’te değişken türleri tahmin edilemez. TypeScript, JavaScript dilinde yeni özellikler ve faydalı iyileştirmeler sunan bir JavaScript üst kümesidir. Kod tabanınızda TypeScript kullanarak, hataları erkenden kolayca tespit edebilir veya önleyebilir ve oldukça harika olan derleme zamanında hatalardan kurtulabilirsiniz. İlk bakışta TypeScript zor ve korkutucu görünebilir, ancak onunla biraz zaman geçirdikten sonra bence gerçekten seveceksiniz.

Neden ortaya çıktı?

Yaygın olarak web uygulamalarında kullanılan JavaScript, Node.js ile birlikte sunucu taraflı uygulamalarda, Electron.js ile birlikte masaüstü uygulamalarda, çeşitli kütüphaneler sayesinde de hibrit mobil uygulama geliştirmede sıkça kullanılmaya başlandı ve tahmin edilmeyen bir büyüme gösterdi. Tasarlanma amacı olarak bu tarz platformlar ve büyük çaplı uygulamalar düşünülmediğinden JavaScript’in bazı yapısal eksiklikleri vardı. Nesne tabanlı dillerin sağladığı tip kontrolü, sınıflar gibi yapılar bulunmuyordu, dinamik olmasından dolayı derleme aşaması yoktu ve hata kontrolü zor yapılıyordu. TypeScript bu eksikleri gidermek ve JavaScript’i büyük projelerde daha etkili şekilde kullanmak için tasarlanmış bir programlama dili olarak ortaya çıktı.
TypeScript, “uygulama ölçeğinde geliştirme için JavaScript.” olarak tanımlanmaktadır. TypeScript strongly-typed, nesne yönelimli ve derlenebilir açık kaynaklı bir programlama dilidir. Microsoft çalışanı ve C# dilinin tasarımcısı olan Anders Hejlsberg tarafından tasarlanmıştır. JavaScript’in tüm özelliklerini içinde barındıran ve ek özellikler eklenmiş bir üst kümesi olarak tanımlanabilir. Büyük ve kodlanma aşaması karmaşık olan projelerde verimliliği arttırır.
Neden ihtiyaç duyuyoruz?

Büyük ekipler ile çalışırken, Backend ve API üzerinden veriler ile çalışırken Dinamik Tip (Dynamic Typing) bir dil geliştirmeler sırasında esnekliğinden dolayı birçok hataya yol açabilir. Bu nedenle çok dikkatli kullanılması gerekir.

Büyük projelerde herkesin bu dikkati göstermemesi, projeye sonradan dahil olan, veya JS konularına hakim olmayan geliştiricilerin projede oluşturabilecekleri hataları minimize etmek için TypeScript gibi Type güvenliği sağlayan diller kullanılır.

Örneğin; basit bir toplama kodumuz olsun. Bu değerleri ekrandan, bir Rest API’sinden alıyor olabiliriz. Biz sum fonskiyonun da 2 sayıyı toplamak isteyen bir kod yazmak isterken JS Dynamic Type bir dil olmasından dolayı String + Number toplamamıza izin veriyor. Bu izin hatalara yol açabiliyor. Ve biz bunu run time aşamasında farkedebiliyoruz.

Static Typing & Dynamic Typing

Js dynamic typing bir dildir. Aynı python gibi. Ama java,c,c++ ve typescript static typing dillerdir. Dynamic typing dillerde typelar değişebilir.Örneğin;
let a = 5;
a = "Dynamic typing";
Yukarıdaki kod bloğunda herhangi bir hata söz konusu olmuyor çünkü js dynamic typing bir dildir. Eğer kod bloğunun error verip vermediğini biz runtime da anlayabiliyoruz. Bu durum da developerlar için sancılı bir süreç oluyor. Örneğin;
const a = 5;
a = "Dynamic typing";
//a değişkenini const ile tanınmladığımız için burada hata fırlatması lazım.
//Ama bu hatayı runtime da veriyor.
Static typing dillerde ise değişken tanımlarken ona bir type da tanımlıyoruz ve bu type a uygun değerler atayabiliyoruz.
let a: number = 5;
a = "Dynamic typing";
// burada bize ts den ötürü hata fırlatıyor.
//Type ı number olan bir değişkene sen string atayamazsın şeklinde daha compile aşamasında bana hata veriyor.
Yukarıdaki örnekte olduğu gibi static typing dillerde Compile aşamasında ben hatayı görebiliyorum.
jsvsts

Typescript avantajları;

Developerlar hatalarını erkenden tespit edebilir.
Static type bir dil olduğu için tahmin edilebilirlik sağlıyor. Yani bi değişken string olarak tanımlandıysa o değişken hep string olarak kalacaktır.
OOP(Class,Interface,Inheritance)
More types
Js in kullanıldığı her yerde kullanılabilir.
Note: Tarayıcılar Typescript kodunu anlayamazlar. Bu yüzden bir derleyici yardımı ile TS kodu Js koduna dönüştürülür. (tsc=> typescript compiler)
Ne zaman kullanılmalı?

Geniş ölçüde kod yapısına sahipseniz. Yani büyük ölçekli bir proje ise.
Kullandığınız framework veya kütüphane kullanmanızı öneriyorsa: Angular gibi.
Static type ihtiyacınız varsa.

Typescript tüm ecmascript versiyonlarını destekler. Pure typescriptte compile ettiği zaman default olarak şuan güncel tüm taraycıların desteklediği ES6 ya dönüştürür. React da ise durumlar değişiyor. Vite ile oluşturduğunuz zaman react - typescript projesini default olarak es2020 e dönüştürüyor. CRA ile yaptığınızda tüm taraycıların desteklediği ES5 e dönüştürür. Örneğin ES5 e dönüştürülmüş hali;
//ts kodu

const a = "anthony";

const myName = `Name: ${a}`;

// js kodu

var a = "anthony";
var myName = "Name: ".concat(a);
// es5 te const olmadığı için var olarak compile etti.
//yine template string olmadığı için de diğer bir yöntem olan concat ı kullandı.
Ama tabi bunu istersek customize edebiliriz.
Pure typescript de targetı es5 olarak ayarlayıp Spread operatörünü deneyebilirsiniz:).
Unutmamamız gereken önemli bir husus da Typescript evet compile aşamasında hatayı fırlatır ama kodu js e dönüştürmeye devam eder. Fırlatılan hata typescriptden kaynaklıysa bu hata javascript için bir engel teşkil etmez ve kod bloğu çalışır fırlatılan hata kodda bir probleme yol açıyorsa(örneğin toplama işlemi yapan fonksiyona string argüman gönderme gibi) biz bunu run time aşamasında görebiliriz. Yada typescripti dinleyerek fırlatılan hatayı ortadan kaldırırız.
TS Types

Any: Her şey any olabilir. Genelde kaçış rampası olarak kullanılıyor. Her yer de any kullanmak aslında js yazmak demektir. Ts kullanmanın bir anlamı kalmıyor.
let x;
x="merhaba";
burada x in type ını ts any olarak atıyor.
Eğer değişkeni declare edip değerini sonra atayacaksak ve any tipinde olmasını istemiyorsak tanımladığımız yerde @typeannotations :type kullanarak tipini de declare edebiliriz:

let x:string;
x="merhaba";
burada x in type ını string olarak belirlemiş olduk.
Ama değişkene değerini declare ederken değerinide vereceksek @typeannotations kullanmamıza gerek yok. Typescript değerin tipine göre değişkenimizin typeını belirliyor. TYPE INFERENCE

let x: string = "merhaba"; //yani buradaki işleme gerek yok
let y = "dünya";
//x vey yi ts string olarak belirliyor
String:
let x: string = "merhaba";
let y = "dünya"; //Type Inference
// x ve y değişkenlerine artık sadece string veri tipinde bir değer ataması yapabiliriz.
Number
let x: number = 67;
let y = 60.5; //Type Inference
// x ve y değişkenlerine artık sadece number veri tipinde bir değer ataması yapabiliriz.
Boolean
let x: boolean = false;
let y = true; //Type Inference
// x ve y değişkenlerine artık sadece boolean veri tipinde bir değer ataması yapabiliriz.
Array: Arraylerde durum farklı. İçine atacağınız elemanların tipine göre değişkene type tanımlaması yapıyoruz.
    let myArr: string[] = ["a","b","c"] //bu arraye atayacağınız elemanların hepsi string tipli olmalıdır.
    let myArr1:number[] = [1,2,3] //bu arraye atayacağınız elemanların hepsi number tipli olmalıdır.
    et myArr1:Array<number> = [1,2,3] //bu şekilde de arraylerde type tanımlaması yapabiliyoruz. Ama en yaygın kullanım diğer örneklerdeki gibi olan kullanım.
    let myAnyArr : any[] = ["a",1,true] //bu arraye atayacağınız elemanlar farklı tiplerde olabilir. any diyerek aslında javascript arraye dönüştürmüş olduk.

Tuple: Eğer arrayin içindeki elemanların tipini ve sayısını biliyorsanız tanımlarken tuple tipinide kullanabilirsiniz. Yani birden fazla tipli array.
let myArr: [string, number] = ["error", 25];
myArr = [285, 285]; // error
myArr = [34, "istanbul"]; // error
myArr = ["istanbul", 34]; // doğru kullanım
Unknown: Yapı olarak any ile aynıdır. Tek farkı any tipinde olan bir değişkeni tipi belirli olan bir değişkene atayabilirsiniz. Ama unknown tipinde olan bir değişkeni tipi belirli olan bir değişkene atayamazsınız.
let a = "anthony";

let myName = `Name: ${a}`;

let x: any = 5;

a = x;

let y: unknown = 5;

myName = y; // Type 'unknown' is not assignable to type 'string'.
Object Type: Objelerde type tanımlaması yaparken içerisinde bulunduğu keylerin valuelarına göre tek tek tanımlama yapmamız gerekiyor. ama tabi ki siz bir object tanımladığınızda içini doldurursanız type inference tanımladığınız değerlere göre objeye tip tanımlamalarını yapıyor.
let todo = {
  task: "deneme 1",
  description: "deneme 1 deneme 1",
  is_done: "false",
};
//bu şekilde tanımlama yaptığımzıda ts typeları belirliyor. ama diyelim değerlerimiz belli değil sadece değişkeni declare edeceğiz o zaman da:
let todo: {
  task: string;
  description: string;
  is_done: boolean;
};
todo = {
  task: "deneme 1",
  description: "deneme 1 deneme 1",
  is_done: "false",
}; // todo objesi sadece belirlediğimiz keyleri alabilir. Ve onlarında typeı yine sadece belirlenen tiplerde olur.

// Şimdilik bu şekilde objeyi declare edip tipini obje şeklinde verebiliriz. Ilerleyen aşamalarda obje tanımlamada en çok kullandığımız interfaceleri göreceğiz. Tabi ki type aliases ile de tanımlama yapabiliriz.
Union Type: Kelime anlamı olarak birleşme olsa da buraki kullanım tam anlamıyla birleşmeyi temsil etmiyor. Aslında union typeına typeların kesişimi diyebiliriz. Yani diyoruz ki count:string | number bu değişken string değer de alabilir, number değer de alabilir ikisinide kabul et. Örneğin; id bilgisi backendden number olarakta gelebilir veya string olarak da gelebilir. Kesin olarak bilmiyorsak union type kullanabiliriz.
let todo: {
  task: string;
  description: string;
  is_done: boolean;
  count: string | number;
};
todo = {
  task: "deneme 1",
  description: "deneme 1 deneme 1",
  is_done: "false",
  count: 5,
};
todo.count = "5"; // hem number hem string değer atayabildik. Union type kullanarak `|` hata vermesinin önüne geçebildik.
Literal Type: Burada type dan daha çok aslında spesifik olarak içerik(değer) atamış oluyoruz. Literal type kullanarak tanımladığımız değişken artık başka bir değer alamıyor.
let todo: {
  task: string;
  description: string;
  is_done: boolean;
  category: "work" | "travel";
};
todo.category = "enjoy"; // hata atar
todo.category = "work"; //kabul eder
todo.category = "travel"; //kabul eder
Custom Type or Reusable Types (Type Aliases): Bir type değişkeni tanımlamamıza yarıyor. Daha sonra bunu isteğimiz yerde kullanabiliyoruz. Örneğin yukarıdaki todoyu ele alabiliriz:
type Todo = {
  task: string;
  description: string;
  is_done: boolean;
};
let todo: Todo = {
  task: "deneme 1",
  description: "deneme 1 deneme 1",
  is_done: "false",
};

// custom typelı array
let todos: Todo[] = [
  {
    task: "deneme 1",
    description: "deneme 1 deneme 1",
    is_done: "false",
  },
  {
    task: "deneme 2",
    description: "deneme 2 deneme 2",
    is_done: "false",
  },
];
Custom typelar compile edildiğinde js dosyadında yer almazlar. Typescripte özeldirler.
Function: Void ve return u olan olarak iki çeşit fonksiyon vardır. Eğer hernagni bir değer döndürmüyorsa void fonksiyon olur, eğer bir değer döndürüyorsa döndürdüğü değere göre type tanımlaması yapabiliriz. Hem yaptığı işleme göre kendisine type tanımlayabiliyoruz hem de parametrelerine type verebiliyoruz. Böylelikle belirlediğimizin dışında parametre kabul etmez.
void : Bir şeyi yapmasını istediğimiz methodlara void operasyon denir. Örneğin veritabanına veri ekle gibi. Emir kipi gibi düşünülebilir.Herhangi bir veri döndürmezler.
const myfunc = (num1: number, num2: number): number => {
  return num1 + num2;
};
//void
const myfuncs = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

//Type Inference
const myfunc = (num1: number, num2: number) => {
  return num1 + num2;
};
//void
const myfunc = (num1: number, num2: number) => {
  console.log(num1 + num2);
};
? Optional Params: Örneğin bir obje typeı belirliyorsunuz ya da interfacei içindeki bir alanı olsa da olur olmasa da olur diyorsak ? kullanabiliriz:
type Todo = {
  task: string;
  description?: string; //description olsa da olur olmasada olur diyoruz.
  is_done: boolean;
};
let todo: Todo = {
  task: "deneme 1",
  description: "deneme 1 deneme 1",
  is_done: "false",
};
let todo2: Todo = {
  task: "deneme 1",
  is_done: "false",
};
// iki tanımlamada başarılı bir şekilde gerçekleşir.
Interface:TypeScript’teki bir Interface, aşağı yukarı bir object için önceden kurgulanmış plan gibi davranır. Object’lerde ki property(özellik) adları ve value(değerleri) hakkındaki bilgileri tanımlar. Bu, TypeScript derleyicisinin object’lerinizi doğrulamasına yardımcı olabilir, böylece object’leri yanlış biçimde tanımlamazsınız. Bir typescript dosyasında (.ts) Interface anahtar sözcüğünü ve ardından interface adı ve interface gövdesini kullanarak bir interface tanımlayabilirsiniz. Interfaceler sadece objeler için değil her şey için kullanilabilir. İçerisinde tanımladığımız keyin typeına value ataması da yapabiliriz. Aşağıdaki örneğe bir göz atın:
interface Course {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  currency: string;
  isActive: boolean;
}
const webCourse: Course = {
  title: "Typescript Basics",
  description: "A course about Typescript",
  createdAt: new Date(),
  updatedAt: new Date(),
  price: 1500,
  currency: "USD",
  isActive: true,
};
Interfaces’da, ? kullanarak değerin kullanımını isteğe bağlı olduğunu belirtebilirsiniz veya undefined ekleyerek de bu özelliği kullanabiliriz.
interface Course {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price?: number; //Optional
  currency: string | undefined; //Optional
  isActive: boolean;
}
const webCourse: Course = {
  title: "Typescript Basics",
  description: "A course about Typescript",
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: true,
};
Interface Extend: Bir interfaceten miras alarak yeni bir interface de oluşturabiliriz.
interface Course {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price?: number; //Optional
  currency: string | undefined; //Optional
  isActive: boolean;
}
interface NewCourse extend Course {
    instructor:string
}
let mycourse: NewCourse = {
  title: "Typescript Plus",
  description: "A course about Typescript",
  createdAt: new Date(),
  updatedAt: new Date(),
  price: 2000,
  currency: "USD",
  isActive: true,
  instructor: "anthony",
};

//Burada görebileceğiniz gibi, bir NewCourse ve Course tanımladık. NewCourse, Course interface’ini kullanmamıza izin verir.
Interfaces, JavaScript nesnelerinin alabileceği çok çeşitli şekilleri tanımlayabilir. Interface, bir object’i özelliklerle tanımlamanın yanı sıra, function türlerini de tanımlama yeteneğine sahiptir.

TypeScript’de interface kavramı,  Javascript’deki, genişletilebilirliği sağlayan en esnek yapı. Normalde Javascript’de interface kavramı bildiğiniz üzere yok. Dolayısıyla type-safe bir yapı oluşturmak, doğası gereği zor. TypeScript’de ki interface’ler temel olarak bu zorluğu ortadan kaldırmak için geliştirilmiş diyebiliriz.

TypeScript’deki interface, temelinde bir tip tanımından başka birşey değildir. class ve function‘lar nesnelerin davranışlarını tanımlarken, interface‘ler nesnelerin tiplerini tanımlar şeklinde düşünebiliriz. Javascript’de interface kavramı olmadığı için TypeScript’de bir interface tanımladığınız ve compile ettiğiniz zaman, onun bir Javascript kodu üretmediğini görürsünüz. Bu noktada interface’lerin compile zamanında tipleri tanımladığını ve geliştirme aşamasında da kolaylık sağladığını belirtmek isterim.

readonly: Bir object oluşturdunuz diyelim ve daha sonra bir özelliğinin değerinin değiştiilmesini istemiyorsunuz o zaman o özelliğ readonly tanımlası yaparak bunu sağlayabilirsiniz.Bunu tanımladıktan sonra değeri değiştirmeye çalışırsanız, readonly sayesinde derleyici bir hata verecektir:

interface Course {
  readonly title: string; //Read only
  description: string;
  createdAt: Date;
  updatedAt: Date;
  price?: number; //Optional
  currency: string | undefined; //Optional
  isActive: boolean;
}
interface FootballCourse extends Course {
  coach: string;
}
Aşağıdaki kullanım hata verecektir:

const webCourse: FootballCourse = {
  title: "Typescript Basics",
  description: "A course about Typescript",
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: true,
  coach: "Nicky Christensen",
};
webCourse.title = "A new title"; //ERROR. Çünkü readonly field oalrak tanımladık. İlk atamadaki değeri alır onu korur.
GENERICS

interface auth {
  id: number;
  username: string;
}

interface Category {
  id: number;
  title: string;
}

interface Post {
  id: number;
  title: string;
  desc: string;
  exttra: auth[] | Category[];
}
///Buraya kadar bildiiğimiz İnterface
interface PostBetter<T> {
  id: number;
  title: string;
  extra: T[];
}
//Burada <T> ile gördüğünüz bize bir parametre döndürmemizi istiyor >> Type Parameter
const testGenerics: PostBetter<String> = {
  // Burada o Beklediği Type Parametreyi giriyoruz <String> olarak
  id: 1,
  title: "Big Titlle",
  extra: ["extra1", "extra2"], // Burada tanımlamamız bu şekilde
};

interface UpgradePostWithObject<T extends Object> {
  id: number;
  title: string;
  extra: T[];
}

const test2Generics: UpgradePostWithObject<{ id: number; username: string }> = {
  id: 1,
  title: "Big Titlle",
  extra: [{ id: 1, username: "taha" }],
}; // Burada Obje çağırdık çüngü UpgradePotWithObject interface kısmıbnda T nin üzerine  bir de obje ekle dedik
Type Assertions

2 yöntemi vardır. Amacı typescriptin fırlattığı hataları engellemek ve type avantajlarından yararlanmak(intellisense gibi). Ama runtime aşamasında hataya yol açabilir. Emin olmadığımız sürece kullanmamalıyız.
let myAge;
myAge = 29;
const newAge = (<string>myAge).toLowerCase();
const newAge2 = (myAge as string).toLowerCase();
//tsyi susturyoruz ama runtime aşamasında hata döner.çünkü numberın toLowerCase metodu yoktur.
Pure Typescript Projesi Oluşturma Komutları

`npx tsc --init`
# bu komutla birlikte tsconfig.json dosyası oluşur. Sonrasında app.ts de yazdığımız kodların js e dönüşmesi için aşağıdaki komutu gireriz:
`tsc app.ts`
# Bu komutton sonra bize otomatik olarak aynı isimde js dosyası oluşturur. Biz index.html e oluşan app.js dosyasını bağlamamız gerekir.her yeni işlemde terminale girmem gerekiyor.

`tsc app.ts -w`
# watch moduna alıp her yaptığım işlemi anında compile eder.
React Typescript

Start Project CRA

npx create-react-app todo-ts --template typescript

#or

yarn create react-app todo-ts --template typescript

CRA ile Proje Oluşturma

Start Project Vite

Command => pnpm create vite or yarn create vite
Framework => React
Variant => Typescript

# or

pnpm create vite todoapp --template react-ts

Vite ile Proje Oluşturma

React Types

Inline Props Type Tanımlama:
function Card(props: { children: React.ReactNode }) {
  return <button>{props.children}</button>;
}
Props Type Tanımlama:
// interface de kullanabiliriz
type CardProps = {
  title: string;
};

function Card(props: CardProps) {
  return <h1>{props.title}</h1>;
}

// with destructuring
function Card({ title }: ButtonProps) {
  return <h1>{title}</h1>;
}
Props Type Tanımlama ve Default Değer Kullanma:
interface ICardProps = {
  disabled?: boolean;
  title: string;
};

function Card({ disabled = true, title }: ICardProps) {
  return (
    <div disabled={disabled}>
      <h1>{title}</h1>
      <button disabled={disabled}>Change</button>
    </div>
  );
}
React.FC: Functional Componentler tanımlarken FC keywordunu kullanarak Componentin Functional Component olduğunu açık olarak declare edebiliriz. Kullanmayı zorunlu diyenler var, zorunlu değil kullanmayın diyenler var. Kullandığımızda type tanımlaması da yapabiliyoruz.
import React from "react";

interface ICardProps = {
  disabled?: boolean;
  title: string;
};
const Card:React.FC<ICardProps> = ({ disabled = true, title }) => {
  return (
    <div disabled={disabled}>
      <h1>{title}</h1>
      <button disabled={disabled}>Change</button>
    </div>
  );
}
useState:
// ❌ Typescript her zaman initial değere string atadığınızda o statein string olduğunu bilir.
const [text, setText] = useState<string>("");
// ✅ Type Inference sayesinde primitive typelarda initia değer verdiğimizde type tanımlamıza ihtiyaç yok.
const [text, setText] = useState("");

type Todo = {
  id: number;
  text: string;
};
// ama non-primitive typelarda initial değere boş array veya obje verdiğimizde typeı tanımlamalıyız.
const [todos, setTodos] = useState<Todo[]>([]);

const [todos, setTodos] = useState<Todo[] | null>(null);
useRef:
export const AddTodo = () => {
  // initial değer varsa type tanımlamaya gerek yok
  const myRef = useRef("");
  // initial değer yoksa type tanımlamlanır
  const yourRef = useRef<string>();

  useEffect(() => {
    myRef.current = "Random value!";
    yourRef.current = "Random value!";
  }, []);

  return <div></div>;
};
// HTML elementleri ile kullanım

export const AddTodo = () => {
  // hangi elemente tanımlayacaksak onu belirtiyoruz. İnitial değere de null atıyoruz.
  const inputRef = useRef<HTMLInputElement>(null);

  return <input ref={inputRef} />;
};
Context:
//ThemeContext.ts
import React,{ createContext, useState,useContext } from "react";

type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType | null>("light");

const ThemeContextProvider: React.FC = ({ children }:React.ReactNode) => {
  const [myTheme, setMyTheme] = useState<ThemeContextType>("light");

  return (
    <ThemeContext.Provider value=>
      {children}
    </ThemeContext.Provider>
  );
};


export const useThemeContext = () => {
    return useContext(ThemeContext)
}

//index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

//App.tsx

import { useThemeContext } from "./context/ThemeContext";
const App = () => {
  const {myTheme} = useThemeContext();
  return <p>current theme: {myTheme}</p>;
};
Redux Toolkit:
Redux Toolkit Dökümanından ayrıntılı inceleyebilirsiniz.

Yaygın Eventslar:
//input-form examples
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
onFocus: (event: FocusEvent<HTMLInputElement>) => void;
onBlur: (event: FocusEvent<HTMLInputElement>) => void;

//button-div examples
onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
onDoubleClick: (event: MouseEvent<HTMLDivElement>) => void;
onMouseEnter: (event: MouseEvent<HTMLButtonElement>) => void;
onMouseLeave: (event: MouseEvent<HTMLButtonElement>) => void;
Type ları globalde tanımlama

.d.ts uzantılı olarak tanımlama yaparsak bunu global olarak algılayıp herhangi bir export import yapmamıza gerek kalmıyor. Eğer diğer türlü yaparsak yani .d koymadan oluşturursak export import yapmamız gerekiyor
Typescript Cheat Sheet

Typescript Cheat Sheet
