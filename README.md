# Bundler Performance
This repo will test the performance of bundlers on real world app

Webpack version: 3.10.0
Parcel version:  1.2.1
Node version:    9.2.1

# Assumptions:
These assumptions are to ensure we do fair comparison of frameworks.

* Cache loader will be used for caching in webpack.
* Thread loader will be used for parallelization in webpack.
* Source maps will not be used. Since parcel doesn't support source maps yet, Webpack source maps will be turned off.
* Bundle size will consider all assets ( HTML, CSS, and JS )
* Tests exclude .babelrc and similar files as config lines of code (LOC).

# 1. Favesound redux App performance:
```
cd real-examples
cd favesound-redux
npm install
npm run build # webpack
parcel build index.html --out-dir dist_parcel # parcel
```
**CONFIG:**

Modified webpack.prod.config.js to add cache-loader and thread-loader. Used new UglifyJSPlugin
with parallelism of 8. And copied the exact uglify configuration from parcel source code.

| Project  | Run 1 | Run 2 | Bundle Size | Config LOC |
|----------|---------| -------------|-------------|------------|
| Webpack  | 18.323 s |  2.917 s | 1144 KB | 44 |
| Parcel   | 12.38 s | 2.47 s | 1126 KB | 0 |

