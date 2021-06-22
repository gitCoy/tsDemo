import Header from '../../components/Header';
import ContentLayout from '../../components/ContentLayout';
import Title from '../../components/Title';
import titleList from '../../constants/titleList';
import './index.scss';

function Home() {
  return (
    <div className="page-wrap">
      <Header />
      <ContentLayout>
        <Title titleType="h1" id={titleList[0].nav}>{titleList[0].name}</Title>
        <Title titleType="h2">介绍</Title>
        <p>为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。 TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。</p>
        <Title titleType="h2">布尔值</Title>
        <p>最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。</p>
        <Title titleType="h2">数字</Title>
        <p>和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。</p>
        <Title titleType="h2">字符串</Title>
        <p>JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 string表示文本数据类型。 和JavaScript一样，可以使用双引号（&quot;）或单引号（&apos;）表示字符串。</p>
        <Title titleType="h2">数组</Title>
        <p>TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：</p>
        <p>第二种方式是使用数组泛型，Array&lt;元素类型&gt;</p>
        <Title titleType="h2">元组 Tuple</Title>
        <p>元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。</p>
        <Title titleType="h2">枚举</Title>
        <p>enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。</p>
        <p>默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号</p>
        <p>枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字</p>
        <Title titleType="h2">Any</Title>
        <p>有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量</p>
        <p>在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法</p>
        <Title titleType="h2">Void</Title>
        <p>某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void</p>
        <p>声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null</p>
        <Title titleType="h2">Null 和 Undefined</Title>
        <p>TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大</p>
        <p>默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。</p>
        <Title titleType="h2">Never</Title>
        <p>never类型表示的是那些永不存在的值的类型。例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。</p>
        <p>never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。</p>
        <Title titleType="h2">Object</Title>
        <p>object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。</p>
        <Title titleType="h2">类型断言</Title>
        <p>有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型</p>
        <p>通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。</p>
        <p>两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的</p>
        <Title titleType="h2">关于let</Title>
        <p>你可能已经注意到了，我们使用let关键字来代替大家所熟悉的JavaScript关键字var。 let关键字是JavaScript的一个新概念，TypeScript实现了它。 我们会在以后详细介绍它，很多常见的问题都可以通过使用 let来解决，所以尽可能地使用let来代替var吧。</p>
        <Title titleType="h1" id={titleList[1].nav}>{titleList[1].name}</Title>
        <Title titleType="h2">变量声明</Title>
        <p>let和const是JavaScript里相对较新的变量声明方式。 像我们之前提到过的， let在很多方面与var是相似的，但是可以帮助大家避免在JavaScript里常见一些问题。 const是对let的一个增强，它能阻止对一个变量再次赋值。因为TypeScript是JavaScript的超集，所以它本身就支持let和const。 下面我们会详细说明这些新的声明方式以及为什么推荐使用它们来代替 var。如果你之前使用JavaScript时没有特别在意，那么这节内容会唤起你的回忆。 如果你已经对 var声明的怪异之处了如指掌，那么你可以轻松地略过这节。</p>
        <Title titleType="h2">var 声明</Title>
        <Title titleType="h3">作用域规则</Title>
        <p>有些读者可能要多看几遍这个例子。 变量 x是定义在*if语句里面*，但是我们却可以在语句的外面访问它。 这是因为 var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问（我们后面会详细介绍），包含它的代码块对此没有什么影响。 有些人称此为* var作用域或函数作用域*。 函数参数也使用函数作用域。这些作用域规则可能会引发一些错误。 其中之一就是，多次声明同一个变量并不会报错</p>
        <Title titleType="h3">块级作用域变量的获取</Title>
        <p>要小心使用解构。 从前面的例子可以看出，就算是最简单的解构表达式也是难以理解的。 尤其当存在深层嵌套解构的时候，就算这时没有堆叠在一起的重命名，默认值和类型注解，也是令人难以理解的。 解构表达式要尽量保持小而简单。 你自己也可以直接使用解构将会生成的赋值表达式。</p>
        <Title titleType="h1" id={titleList[2].nav}>{titleList[2].name}</Title>
        <Title titleType="h2">介绍</Title>
        <p>TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。</p>
        <Title titleType="h2">接口初探</Title>
        <p>类型检查器会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。 然而，有些时候TypeScript却并不会这么宽松，我们下面会稍做讲解。</p>
        <Title titleType="h2">可选属性</Title>
        <p>接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。</p>
        <p>带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。</p>
        <Title titleType="h2">只读属性</Title>
        <p>一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性</p>
        <p>TypeScript具有ReadonlyArray&lt;T&gt;类型，它与Array&lt;T&gt;相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改</p>
        <p>最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。</p>
        <Title titleType="h2">额外的属性检查</Title>
        <p>绕开这些检查非常简单。 最简便的方法是使用类型断言</p>
        <Title titleType="h2">函数类型</Title>
        <p>接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。</p>
        <p>为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。</p>
        <p>对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。</p>
        <Title titleType="h2">可索引的类型</Title>
        <p>与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap[&lt;daniel&gt;]。 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。</p>
        <Title titleType="h2">类类型</Title>
        <Title titleType="h3">实现接口</Title>
        <p>与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。</p>
        <Title titleType="h2">继承接口</Title>
        <p>和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。</p>
        <p>一个接口可以继承多个接口，创建出多个接口的合成接口。</p>
        <Title titleType="h2">混合类型</Title>
        <p>先前我们提过，接口能够描述JavaScript里丰富的类型。 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。</p>
        <Title titleType="h2">接口继承类</Title>
        <p>当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 这个子类除了继承至基类外与基类没有任何关系。</p>
        <Title titleType="h1" id={titleList[3].nav}>{titleList[3].name}</Title>
        <Title titleType="h2">介绍</Title>
        <p>传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。</p>
        <Title titleType="h2">类</Title>
        <p>我们使用 new构造了 Greeter类的一个实例。 它会调用之前定义的构造函数，创建一个 Greeter类型的新对象，并执行构造函数初始化它。</p>
        <Title titleType="h2">继承</Title>
        <p>在TypeScript里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。</p>
        <p>派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。</p>
        <Title titleType="h2">公共，私有与受保护的修饰符</Title>
        <Title titleType="h3">默认为 public</Title>
        <p>在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 public来做修饰；例如，C#要求必须明确地使用 public指定成员是可见的。 在TypeScript里，成员都默认为 public。</p>
        <Title titleType="h3">理解 private</Title>
        <p>当成员被标记成 private时，它就不能在声明它的类的外部访问。</p>
        <Title titleType="h3">理解 protected</Title>
        <p>protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问</p>
        <p>构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承</p>
        <Title titleType="h3">readonly修饰符</Title>
        <p>你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。</p>
        <Title titleType="h2">存取器</Title>
        <p>TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。</p>
        <p>对于存取器有下面几点需要注意的：</p>
        <p>首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。</p>
        <Title titleType="h2">静态属性</Title>
        <p>到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。</p>
        <Title titleType="h2">抽象类</Title>
        <p>抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。</p>
        <Title titleType="h2">高级技巧</Title>
        <Title titleType="h3">构造函数</Title>
        <p>当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。</p>
        <Title titleType="h3">把类当做接口使用</Title>
        <p>类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。</p>
        <Title titleType="h1" id={titleList[4].nav}>{titleList[4].name}</Title>
        <Title titleType="h2">介绍</Title>
        <p>函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义 行为的地方。 TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用。</p>
        <Title titleType="h2">函数</Title>
        <p>和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，不论是定义一系列API函数还是只使用一次的函数。</p>
        <p>通过下面的例子可以迅速回想起这两种JavaScript中的函数：</p>
        <pre>
          function add(x, y) {
            `return x + y`
          }
          <br />
          <br />
          let myAdd = function(x, y) { `return x + y` };
        </pre>
        <p>在JavaScript里，函数可以使用函数体外部的变量。 当函数这么做时，我们说它‘捕获’了这些变量。 至于为什么可以这样做以及其中的利弊超出了本文的范围，但是深刻理解这个机制对学习JavaScript和TypeScript会很有帮助。</p>
        <pre>
          let z = 100;
          <br />
          <br />
          function addToZ(x, y) {
            `return x + z + y`
          }
        </pre>
        <Title titleType="h2">函数类型</Title>
        <Title titleType="h3">为函数定义类型</Title>
        <pre>
          function add(x: number, y: number): number {
            `return x + y`
          }
          <br />
          <br />
          let myAdd = function(x: number, y: number): number { `return x + y` }
        </pre>
        <p>我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。</p>
        <Title titleType="h3">书写完整函数类型</Title>
        <p>现在我们已经为函数指定了类型，下面让我们写出函数的完整类型。</p>
        <p>函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：</p>
        <p>只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。</p>
        <p>第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =&gt;)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。</p>
        <p>函数的类型只是由参数类型和返回值组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数的隐藏状态并不是组成API的一部分。</p>
        <Title titleType="h3">推断类型</Title>
        <p>在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：</p>
        <p>这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。</p>
        <Title titleType="h2">可选参数和默认参数</Title>
        <p>TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。</p>
        <p>JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：</p>
        <p>可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。</p>
        <p>在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。 让我们修改上例，把last name的默认值设置为&ldquo;Smith&ldquo;。</p>
        <p>在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。</p>
        <p>与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。 例如，我们重写最后一个例子，让 firstName是带默认值的参数：</p>
        <Title titleType="h2">剩余参数</Title>
        <p>必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在JavaScript里，你可以使用 arguments来访问所有传入的参数。</p>
        <p>在TypeScript里，你可以把所有参数收集到一个变量里：</p>
        <p>剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。</p>
        <p>这个省略号也会在带有剩余参数的函数类型定义上使用到：</p>
        <Title titleType="h2">this</Title>
        <p>TypeScript能通知你错误地使用了 this的地方。 如果你想了解JavaScript里的 this是如何工作的，那么首先阅读Yehuda Katz写的Understanding JavaScript Function Invocation and &ldquo;this&ldquo;。 Yehuda的文章详细的阐述了 this的内部工作原理，因此我们这里只做简单介绍。</p>
        <Title titleType="h3">this和箭头函数</Title>
        <p>JavaScript里，this的值在函数被调用的时候才会指定。 这是个既强大又灵活的特点，但是你需要花点时间弄清楚函数调用的上下文是什么。 但众所周知，这不是一件很简单的事，尤其是在返回一个函数或将函数当做参数传递的时候。</p>
        <Title titleType="h3">重载</Title>
        <p>JavaScript本身是个动态语言。 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。</p>
        <Title titleType="h1" id={titleList[5].nav}>{titleList[5].name}</Title>
        <Title titleType="h2">介绍</Title>
        <p>软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。</p>
        <p>在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。</p>
        <Title titleType="h2">泛型之Hello World</Title>
        <p>我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。</p>
        <p>我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。</p>
        <p>我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数</p>
        <p>这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了&lg;&gt;括起来而不是().</p>
        <p>第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型</p>
        <p>注意我们没必要使用尖括号（&lg;&gt;）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。</p>
        <Title titleType="h2">使用泛型变量</Title>
        <p>使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型.</p>
        <Title titleType="h2">泛型类型</Title>
        <p>上一节，我们创建了identity通用函数，可以适用于不同的类型。 在这节，我们研究一下函数本身的类型，以及如何创建泛型接口。</p>
        <p>泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样</p>
        <p>这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口</p>
        <p>一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary&lt;string&gt;而不只是Dictionary）。 这样接口里的其它成员也能知道这个参数的类型了。</p>
        <p>注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。 当我们使用 GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型（这里是：number），锁定了之后代码里使用的类型。 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。</p>
        <p>除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间</p>
        <Title titleType="h2">泛型类</Title>
        <p>泛型类看上去与泛型接口差不多。 泛型类使用（&lt;&gt;）括起泛型类型，跟在类名后面。</p>
        <p>我们在类那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。</p>
        <Title titleType="h2">泛型约束</Title>
        <p>你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 在 loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。</p>
        <p>相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。</p>
        <p>为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束</p>
        <Title titleType="h2">在泛型约束中使用类型参数</Title>
        <p>你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束。</p>
        <Title titleType="h2">在泛型里使用类类型</Title>
        <p>在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。</p>
        <Title titleType="h1" id={titleList[6].nav}>{titleList[6].name}</Title>
        <Title titleType="h2">枚举</Title>
        <Title titleType="h3">枚举</Title>
        <p>使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。</p>
        <Title titleType="h3">数字枚举</Title>
        <p>使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型</p>
        <Title titleType="h3">字符串枚举</Title>
        <p>字符串枚举的概念很简单，但是有细微的 运行时的差别。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。</p>
        <p>由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息（尽管 反向映射会有所帮助），字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。</p>
        <Title titleType="h3">异构枚举（Heterogeneous enums）</Title>
        <p>从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做</p>
        <p>除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。</p>
        <Title titleType="h3">计算的和常量成员</Title>
        <p>每个枚举成员都带有一个值，它可以是 常量或 计算出来的。 当满足如下条件时，枚举成员被当作是常量</p>
        <p>枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式</p>
        <p>1. 一个枚举表达式字面量（主要是字符串字面量或数字字面量）</p>
        <p>2. 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）</p>
        <p>3. 带括号的常量枚举表达式</p>
        <p>4. 一元运算符 +, -, ~其中之一应用在了常量枚举表达式</p>
        <p>5. 常量枚举表达式做为二元运算符 +, -, *, /, %, &lt;&lt;, &gt;&gt;, &gt;&gt;&gt;, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。</p>
        <p>所有其它情况的枚举成员被当作是需要计算得出的值。</p>
        <Title titleType="h3">联合枚举与枚举成员的类型</Title>
        <p></p>
      </ContentLayout>
    </div>
  )
}
export default Home;
