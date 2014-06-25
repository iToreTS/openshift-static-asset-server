# OpenShift Static Asset Server
_A boilerplate template for [OpenShift](https://www.openshift.com/) deployment using the Node.js 0.10 Cartridge and Express.js._

---

## Usage

1. git `clone` repository and `cd` into newly created directory
2. Update the `package.json` with information relevant to your project. Namely: **name**, **version**, and **author**
3. Configure `server.js` to suit your needs. File has been annotated with explanations.
4. `npm install` and `node server.js` should start serving your assets locally.

---

## Deployment
1. Delete existing git repository `rm -rf .git`, and `git init` to initialize a new git repo. `git commit` your changes, and push up to GitHub.
2. Create a new OpenShift project, and reference your new GitHub repository as the source when setting up your application.

---

## Author
####Jeffrey Canty
* Web: [cantyjeffrey.io](http://www.cantyjeffrey.io)
* Email: [shout@cantyjeffrey.io](mailto:shout@cantyjeffrey.io)
* Twitter: [@cantyjeffrey](https://twitter.com/cantyjeffrey)

---
## License
#### MIT Open Source

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
