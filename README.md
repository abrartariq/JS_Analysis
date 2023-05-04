# What does it mean to add a JavaScript to a Webpage?

Web pages often embed scripts for a variety of purposes,
including advertising and dynamic interaction.
Understanding embedded scripts and their purposes can not
only help to interpret information about the webpage, but it
can also help to find out how much memory will that script
take as well as how long will it take to load. I have
developed a functionality-based categorization of
JavaScript, the most widely used web page scripting
language. I then view understanding embedded scripts as a
text categorization problem. I show how traditional
information retrieval methods can be augmented with the
features distilled from the domain knowledge of JavaScript
to improve classification performance. I perform
experiments on the alexa top 100 web pages, and show that
my what are some commonly used 3rd party scripts and
how does they impact a webpage performance.

## General Terms

Performance, Measurement

## Keywords

JavaScript, Libraries, Esprima

## 1. INTRODUCTION

Webpages are no more simple static web pages. Nowadays,
there are a lot of other things like Cascading Style Sheets
(CSS), fonts, images, JavaScripts, flash etc. JavaScript is
one of the important essential components of a webpage
and according to a survey (May 1, 2019), JavaScript is used
by 95.2% of all the websites. It is used to design interactive
web pages at blazing speed. But, unfortunately, there is
little or no research to understand how much does a
JavaScript impacts the performance of a webpage. The only
thing that is considered important in terms of performance
is Page Weight. Page Weight measures the total cost, in
bytes, of loading a page and all of its resources. Although it
is important, but it does not directly correlate with
performance i.e. a javascript with very small size can take
more time to execute than an image that is may be of 10x
larger size. So, there is a need to have a clear understanding
of impact of a JavaScript on a webpage.

In this paper, I have tried to examine a javascript
and classify it as an ad, analytics, library etc. and show

```
what are some of the commonly used methods in each of
these classes. I also show that previous techniques for
javaScript classification will not work accurately in this
case and show how traditional information retrieval
methods can be augmented with the features distilled from
the domain knowledge of JavaScript to improve
classification performance. In order to measure impact of a
javaScript on memory and page load time, I have designed
a system that loads a javaScript on a headless browser and
capture its scripting time (parsing, compiling and
executing) and javaScript heap size.
Using my new classification system, I have analyzed alexa
top 100 webpages and answered following questions:
● How many javaScripts does each page has?
● How much do these javascripts corresponds to
overall Page Weight?
● To what class, these javaScripts belong to?
● What are the commonly operations performed
across these scripts?
● What are the commonly used memory intensive
methods used?
● What are CPU intensive operations performed
across these scripts?
Finally, I have analyzed the use of different javaScript
libraries and show that how these libraries impact the
performance of a webpage.
Permission to make digital or hard copies of all or part of this work for
personal or classroom use is granted without fee provided that copies are
not made or distributed for profit or commercial advantage and that copies
bear this notice and the full citation on the first page. To copy otherwise,
or republish, to post on servers or to redistribute to lists, requires prior
specific permission and/or a fee.
Conference’19 ​, May 17, 2020,Lahore, Punjab, Pakistan.
Copyright 2004 ACM 1-58113-000-0/00/0004...$5.00.
```
## 2. BackGround

```
JavaScript is one of the most commonly used computer
languages specially designed to work with Internet
browsers. It lets you create small programs called scripts
and embed them inside Hypertext Markup Language
(HTML) pages in order to provide interactive content on
```

Figure. 1: How to add script to a webpage

your Web pages. It is used in 95.2% of all the websites [1]
and its importance comes from the following reasons:

```
● It makes the webpage more interactive and
user-friendly.
● It adds value to a site.
● Visual effects can also be achieved with
JavaScript.
● Support external applications like PDF and Flash
```
### ● Compatible across almost all browsers.

### 2.1 Imbedding JavaScripts in a Webpage

The JavaScripts are embedded in a webpage using <script>
element. This element can be used to embed the JavaScript

directly into the web page (also known as inline), or to
specify an external file that contains the JavaScript [9]. The

figure 1 shows these two methods.
There are several other methods that are used using script

element like one can specify async. Async will allow the
browser to load, compile and execute script

asynchronously, but still if script is very large to parse or
takes too long to execute, the browser will wait for it

execute before actually triggering onload event.

### 2.2 Chrome V8 Engine

Chrome uses V8 engine to handle javascripts. The figure
below shows how V8 compile/execute scripts. Code is
initially compiled by a baseline compiler, which can
generate non-optimized machine code quickly. The
compiled code is analyzed during runtime and optionally
re-compiled dynamically with a more advanced optimizing
compiler for peak performance [6]. The figure 2 shows how
chrome V8 engines actually works.

### 2.3 Low-End Phones

The exceptional growth of the mobile phone market has
expanded to developing and under-developed countries.
But, in these countries, people usually use low-end phones
i.e. phones that have less memory or less computational
resources or both. The problem will these low-end phones
is that they can not give performance comparable to
high-end phones. For instance, a javascript heavy web page
may load faster on a high-end phone, but one a low-end
phone, it may take more than 1 minute to load or the phone
may crash if it runs out of memory. So, while designing a
webpage, it is important to consider these phones as well
otherwise a large number of mobile phone users will not be
use that page.

```
As seen above, javascript compilation/execution in a
popular browser, Chrome consists of a long process that
includes parsing, byte code generation, unoptimized code
generation and finally optimized code generation that may
take a lot of CPU resources to complete as well a lot of
memory to store code. So, before adding a script to a
webpage, one must carefully analyze its memory and cpu
consumption.
```
### 2.4 JavaScript Libraries

```
Different kinds of third party scripts are added to a
webpage and one of them are JavaScript Libraries. These
are libraries of pre-written JavaScript which allows for
easier development of JavaScript-based applications. Most
of the websites now uses some kind of JavaScript libraries
like jQuery, React, Angular, Modernizr etc. that makes the
life of a web developer a lot more easier. But, adding these
libraries to a webpage has a cost and one must understand
before deciding over the use of JavaScript library.
```
### 3. JavaScript Classification

```
There are a lot of javaScripts in a webpage. As shown in
figure 3, the ,median number of external javaScripts in a
web page is 15. These javascripts are provides different
functionalities and may have nothing to do with each other.
So, it is important to categorize these javaScripts into
different classes because it will help the website owner to
know what are different scripts in his/her webpage and
he/she can then decide which javascript to remove and
which he/she can optimize. For instance, one can remove a
javascript library/ optimize it, but can not change the ads
script. One other reason is that javascripts do not have
much part in Page Weight as shown in figure 4 that 80% of
javascripts in alexa top 100 web pages have less than
0.1MB while average size of a complete web page is
20-30MB. Previous studies have also shown that
javascripts play an important role in overall load time and
memory footprint [2]. So, it is important to understand how
these scripts impact performance.
```
```
Figure 3: Distribution of JavaScripts in Alexa top 100
webpages
```

```
Figure. 2: JavaScript Parsing and Compiling in
```
### Chrome V8 Engine

### 3.1 First Party Vs Third Party Scripts

Classifying javascripts as first party (same-domain) and
third party (other) is essential. The figure 3 below shows
this classification over alexa top 100 webpages. We can see
that median number of third party scripts is only 3 while
third party scripts is 12 (that is too much). One thing to
note that is it only shows scripts downloaded till onload
event because our assumption is a page is completely
loaded at onload event and resources loaded after that does
not affect the performance for a user.

### 3.2 Different Classes of JavaScript:

As seen above, classifying scripts as third party and first
party is not enough, we still have ~13 scripts in third party.

So, further dividing these scripts is important. There are
various ways to classify these scripts e.g. by their weights,
by domain name, by importance etc. But, we want to have
classes so that website owner can have choice to make. In
above cases, he/she will not be able to make a clear choice
that which script he/she can remove etc. So, classifying
scripts with their application/usage point of view will make
more sense. Table# 1 shows the classes we divided these
third party scripts into and figure 5 shows the distribution
of these scripts in alexa top 100 webpages. Although we
were unable to classify a large number of scripts, but still
we can see there were 20% ads scripts that are out of
website

owner’s control while 10% tag-manager scripts that tends
to download many other resources and should be
controlled.

### 3.3 Tokenization

```
In order to analyze a script to understand what are the
different methods it is using, what are the other resources it
downloads, how much does it interact with DOM and
browser window etc. it is important to parse its code. The
easiest thing is code tokenization. Tokenization is the
process of demarcating and possibly classifying sections of
a string of input characters. As far as we know, there is
little research work in this field and those who have done
that due to various reasons like finding vulnerabilities,
malicious scripts etc. have done string tokenization. But,
we argue that string tokenization is good for lexical
analysis of text, it is not a technique to analyze a code due
to following reasons:
● It can not make use of syntax of code.
● Information can be interpreted wrong and can
mean a lot.
● It does not tell anything about other resources
script downloads.
● It does not tells anything about memory.
● It can not tell us about script
parsing/compiling/executing time.
● Can not differentiate between code and comment.
Let’s take an example. Figure 6 shows the code snippet that
we want to tokenize. If we use naive approach, it will see a
lot of links and will classify them as downloaded resources.
Similarly, string in second array will be classified as
different operations performed. While, if we use syntactical
analysis that tells us both these are variables containing
strings, we will successfully classify that code snippet.
Due to the limitations above, we decided to use
tokenization augmented with the features distilled from the
domain knowledge of JavaScript for code classification.
The next section describes our approach in more detail.
```

Figure 4. CDF of javaScript file sizes in alexa top 100
pages

### 3.4 JavaScript Classifier

In order to analyze a JavaScript, we have designed a
two-step analysis of Script. In the first step, we use a static
code analysis and in second step, we run it on a headless
browser.

In order to do static code analysis, we decided to use a tool
known as Esprima [11], that provides a nice structured tree
of JavaScript code that helps us to do analysis in more
intelligent way. Consider the example code given in figure
7 and its tree.

We can see that we have two lines of code, the first one is a
Variable declaration and the second one is an Expression
statement that is a function call. Note that esprima provides
that tree with complete information.

We can easily get what are different methods used, how
many global variables do we have, how many function
declarations we have and then, we can classify these
methods to our predefined set of classes. We decided to
have hierarchical categorization of different JavaScript
methods and table# 2 shows our main classes.

Furthermore, to find out how much time does a script takes
to load, how many new nodes it inserts to DOM, how much
time does it take for loading/parsing/compiling/executing
and how many resources it actually downloads, we run that
script in a headless browser and load that particular script
using a <script> tag in head of HTML and collects the
above mentioned information.

Although this will only provide us a lower bound as we are
only loading the script, there is no interaction with script, it

```
Figure 5. Distribution of 3rd Party JavaScripts across alexa
top 100 webpages
```
```
stills provides much information that can be used to
understand the true cost of a JavaScript.
```
### 4. Evaluation

```
In order to evaluate our JavaScript classifier, we used alexa
top 100 webpages. The next section describes our setup in
more detail.
```
### 4.1 Setup

```
First of all, we downloaded alexa top 100 webpages and
saved all the scripts these pages requested until onload of
webpage and then run the first classifier. For, the second
part of our classifier, we run it on headless desktop chrome
browser. Although we had to run it on a low-end phone, but
in order to remove all variables and to see what is the cost
of a script in a webpage with no bottleneck is important as
well. In future, it can be run on a low-end phone as well to
see to how that script affects the performance of a low-end
phone user.
```
### 4.2 Discussion

```
First of all, let’s see how the use of different methods vary
across different classes of scripts so that we can better
understand that what type of scripts are memory heavy and
what type of scripts are cpu-heavy. Figure 8 shows average
number of resources downloaded by each script class. We
can see that social widgets like twitter or facebook scripts
downloads more resources than library or ads sites, so these
sites can be more network heavy and can be disabled if we
have network bottleneck.
Similarly, figure 9 shows how many global variables and
functions each script class on average has. Global variables
are important as they tend to increase to scripting time as
described in Google I/O talk [11]. Similarly, number of
functions also tells us how long that script will take to parse
```

Figure 6: JavaScript code to tokenize

Figure 7: (a) shows code snippet and (b) Esprima Tree of
above code snippet

and according to Google I/O talk, more number of
functions will take more memory in V8 compilation.

The figure 10 shows usage of different methods of Browser
BOM and DOM across scripts. BOM means Browser
Object Model and it represents methods related to browser
like current time, browser version/name, browser history
etc. Similarly, DOM (Document Object Model) represents
methods used to change DOM either
insertion/deletion/update. We observed that library scripts
uses more DOM methods while content and social scripts
are more interested in Browser methods.

```
Figure 8: Average number of resources downloaded across
different JavaScript Classes
```
```
Figure 9: Average number of functions and Global
Variables declared in different JavaScript Classes
The figure 11 shows usage of different methods across
scripts. We observed that library and social scripts tends to
send more POST requests than other scripts while content
and social scripts uses File_API to access users’ storage.
Similarly, in figure 12 we observe social, library and
sameOrigin scripts do more styling than other scripts.
Takeaway:
Since we have observed the usage of different methods
across different scripts, we can optimize our site according
to the need. For instance, we can disable memory heavy
scripts if user’s device has low RAN or we can disable
network heavy scripts if user is in 2G.
```
### 4.3 JavaScript Libraries

```
In order to further evaluate our second part of classifier, we
used different JavaScript Libraries for evaluation because it
was not feasible to test all the scripts on our system due to
time constraint. So, we first see the trend of different
JavaScript Libraries across alexa top ~870 webpages and
then we pick top 4 libraries and give a detailed comparison
```

Figure 10: Usage of different methods of Browser BOM
and DOM across scripts.

Figure 11. Usage of different methods across scripts

on Google Nexus 5 that has 2GB of RAM and Quad Core
processor.

Figure 13 shows the distribution of different JavaScript
Libraries usage across alexa top ~870 webpages. We
observed that ~50% of the sites used jQuery and then
comes React and Modernizr.

Similarly, figures 14 (a and b) shows js Heap size and
scripting time of different operations performed on these
libraries. Note that VanillaJS means pure JavaScript with
no library and we observe that if we are not doing any
complex operations on DOM, we do not really need a
library. We can save a lot of memory and time using
VanillaJS.

### 5. Related Work

Although javaScripts is the core component of World Wide
Web, but classification of javaScript to understand it is not
a very common problem. A little work or no work has been
done in this regard. In almost all the research done,
JavaScript Code analysis is done using tokenization [4] and
[5]. But, none of them had to find all methods used and so,
tokenization can work in that case. Moreover, they do not
need memory footprint/ scripting time.

```
Figure 12. Usage of video, stylesheet and image methods
across scripts
```
```
Figure 13: Distribution of JavaScript Libraries across alexa
top ~870 webpages
Another paper that does classification of JavaScript using
tokenization and then apply some Program Analysis
technique to classify javascript is [3]. They did classify in
more than ten classes like in our case, but they did program
analysis on variables and functions name so that they can
better understand the code. But, the major limitation of that
approach is not all people follow naming conventions
during coding and Moreover, if you can exactly figure out
the methods using syntactical analysis like we did, there is
no point of doing program analysis on identifiers.
Chrome V8 Ignition
Chrome V8 as described above first produces an
unoptimized bitcode at compile time and then, recompile it
to produce optimized code. For low-end devices with RAM
less than 512MB, they did design Ignition that executes
code with less memory overhead and paving the way for a
simpler script execution pipeline. According to their
experimentation, they reduced 5% memory of V8 using
```

Figure : 14 (a) Scripting Time across Different JavaScript
Libraries

Figure: 14 (b) JavaScript Heap across different Libraries

Ignition [7]. Although that is good, but it comes at the cost
of execution time. Moreover, they enabled it for devices

with memory less than or equal to 512MB that does not
incorporate all low-end phones. A phone with low-memory
will likely to have less CPU resources and will eventually
take longer to open website and degrade performance. So,
although that is a good step, ignition can itself not boost the
performance of a Script and so, developer must understand
the cost of a javaScript before adding it to the webpage.

### 6. Future Work and Conclusion

```
The limitations of our work includes that it performs
analysis of JavaScript by just loading it. We have observed
that if we use some functions/methods of a Script after
loading it, its memory footprint increases i.e. this effect can
be seen in above javascript libraries analysis. Moreover, we
did our analysis on alexa top 100 web pages and these are
mostly websites of top tech/news companies. So, analysis
of lower ranked webpages may reveal some other insights.
We have designed a complete system to perform analysis
on a JavaScript, both static and dynamic and we did an
experimental study to analyze scripts in alexa top 100
webpages. We observed that there are different classes of
JavaScripts and each of these class is different based on the
methods used, number of resources downloaded. Some
scripts are memory heavy, while others are cpu heavy or
network heavy. So, one can design a real-time transcoding
service that performs JavaScripts transformations based on
the device internet, type and current memory status. We
believe that our work has opened a whole new research
area where there is still a lot to things to learn.
```
### 7. REFERENCES

```
[1] WeTechs, 2019. Usage of JavaScript for websites.
https://w3techs.com/technologies/details/cp-javascript/
all/all​.
[2] Xiao Sophia Wang, Aruna Balasubramanian,
Demystifying Page Load Performance with WProf
[3] Wei Lu and Min-Yen Kan. Supervised Categorization
of JavaScript using Program Analysis Features
[4] Pavel Laskov, Nedim Šrndic, Static Detection of
Malicious JavaScript-Bearing PDF Documents
```

[5] Peter Likarish, Eunjin (EJ) Jung, Obfuscated Malicious
Javascript Detection using Classification Techniques

[6] Firing up the Ignition interpreter
https://v8.dev/blog/ignition-interpreter

[7] JavaScript V8 Engine Explained,
https://hackernoon.com/javascript-v8-engine-explained
-3f940148d4ef

```
[8] Nic Jansma, 2018, When Third Parties Stop Being
Polite... and Start Getting Real
[9] Importance Of JavaScript
https://gotechark.com/blog/importance-javascript/
[10]Techtopia, Embedding JavaScript into Web pages
[11]Esprima, http://esprima.org
```
## 9. Appendix

#### Class Description

#### Ads

#### These scripts are part of advertising networks, either serving or

#### measuring.

#### Analytics These scripts measure or track users and their actions.

#### Social These scripts enable social features.

#### Video These scripts enable video player and streaming functionality.

#### Utilities These scripts are developer utilities (API clients, fraud detection, etc)

#### Hosting These scripts are from web hosting platforms.

#### Library These are mostly open source libraries (e.g. jQuery).

#### Tag-manager These scripts tend to load lots of other scripts and initiate many tasks.

#### Other These scripts are those we are unable to classify

Table 1: Different JavaScript classes for 3rd Party JavaScript Classification

```
Class Description
```
```
BrowserBOM Methods related to browser like location, history, navigation etc.
DOM Methods related to DOM like getElement, appendChild, etc.
```
```
File_API Methods used to access file storage for storing/accessing file in user's device
```
```
ImageData Methods related to image downloading/formatting
```
```
IndexedDB Methods used to access database like MongoDB
Window Methods related to current window like address etc.
```
```
Video Methods used to play video
```
```
StyleSheet Methods used to styling (CSS)
```
```
PerformanceTiming Methods used to access timing like loadtime/ event listeners/ timeouts
LoadingResource Methods used to download other resources like stylesheets, images etc.
```
```
XML_HTPP_REQUE
ST Methods used for sending POST requests
```
Table 2: Different classes for methods used in JavaScripts


