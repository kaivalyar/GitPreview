# GitPreview
A chrome extension to provide single click toggle between viewing HTML source on GitHub, and browser rendered HTML.

## Synopsis

As of May 2017, GitHub has near 60,000 HTML repositories. While the default GitHub interface is great for viewing HTML code, it is hard to see how it finally looks when rendered by the browser. Most developers working on software projects open local copies of HTML files in their browsers to see how they look. While this works for developers actively developing a particular web project, it is not desirable for the many others who use GitHub. If you browse through software projects online, and wish to see how a particular page looks, **GitPreview** is for you. If you wish to contribute a minor edit on an HTML page, you no longer need to download the repo to your computer, but can now use this extension to shift your entire workflow online to the GitHub web interface.

## Setup

#### To Install:

(I am working on getting this extension up onto the webstore. Until then, use the steps below.)

1. Clone or download this repository.
2. Open chrome (or chromium) and navigate to the extensions page: `Menu` > `More Tools` > `Extensions`.
3. Enable developer mode from the checkbox in the top-right corner.
4. Click the `Load unpacked extension...` button.
5. Select GitPreview in the file selection dialog that opens (might be named GitPreview-master on your machine after extracting from zip).

#### To Run:

1. Navigate to an html page on GitHub, like [this](https://github.com/kaivalyar/TrainingSetGeneratorTool/blob/master/Generator.html) one.
2. Click the automatically highlighted GitPreview extension icon in the top-right of your browser.
3. Wait for the page to redirect and HTML to render.
4. Click on the extension again to return to the default GitHub code view.

## Contact

If you have any questions, suggestions, or feedback, please feel free to write to [kaivalyaraw@gmail.com](mailto:kaivalyaraw@gmail.com). I look forward to hearing from you.

## License

This extension uses a [local fork](https://github.com/kaivalyar/htmlpreview) of the excellent [htmlpreview](http://htmlpreview.github.io/) project by [Jerzy Głowacki](http://niute.ch/) to function.

_Copyright © 2017 Kaivalya Rawal_

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
